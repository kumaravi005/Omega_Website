import type { NextFunction, Request, Response } from 'express'

/**
 * Minimal in-memory per-IP rate limit for the public enquiry endpoint —
 * enough to blunt a simple spam script without adding an external service or
 * a dependency. Resets on server restart and does not work across multiple
 * server instances; fine for this project's current scale.
 *
 * Note: `req.ip` is the direct socket address unless Express is told to
 * trust a reverse proxy (`app.set('trust proxy', ...)`), which is not
 * configured — add that if this is ever deployed behind one.
 */

const WINDOW_MS = 60_000
const MAX_REQUESTS_PER_WINDOW = 5

interface Bucket {
  count: number
  resetAt: number
}

const buckets = new Map<string, Bucket>()

// Sweep expired buckets periodically so the map cannot grow unbounded.
setInterval(
  () => {
    const now = Date.now()
    for (const [ip, bucket] of buckets) {
      if (now > bucket.resetAt) buckets.delete(ip)
    }
  },
  10 * 60_000,
).unref()

export function rateLimit(req: Request, res: Response, next: NextFunction): void {
  const ip = req.ip ?? 'unknown'
  const now = Date.now()
  const bucket = buckets.get(ip)

  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    next()
    return
  }

  if (bucket.count >= MAX_REQUESTS_PER_WINDOW) {
    res.status(429).json({
      ok: false,
      error: 'rate_limited',
      message: 'Too many requests. Please wait a moment and try again.',
    })
    return
  }

  bucket.count += 1
  next()
}
