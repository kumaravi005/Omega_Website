import cors from 'cors'
import express, { type NextFunction, type Request, type Response } from 'express'
import { env } from './env.ts'
import { rateLimit } from './rateLimit.ts'
import { enquiriesRouter } from './routes/enquiries.ts'
import { healthRouter } from './routes/health.ts'

const app = express()

// Only the configured frontend origin may call this API.
app.use(cors({ origin: env.frontendOrigin }))

// Small, fixed limit — an admission enquiry is a few short fields, never large.
app.use(express.json({ limit: '10kb' }))

app.use('/api/health', healthRouter)
app.use('/api/enquiries', rateLimit, enquiriesRouter)

// Anything else under /api is an unknown endpoint.
app.use('/api', (_req: Request, res: Response) => {
  res.status(404).json({ ok: false, error: 'not_found', message: 'Unknown endpoint.' })
})

// Generic error handler — must take 4 params for Express to treat it as one.
// Internal error details (stack traces, library messages) are logged on the
// server only and never sent to the client.
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error('[server error]', err)

  // express.json() rejects malformed bodies with a 400-status SyntaxError;
  // treat any other 4xx a body-parser-style middleware might throw the same
  // way. Anything else is treated as an unexpected server error (500).
  const status = (err as { status?: number; statusCode?: number } | null)?.status
  const statusCode = (err as { status?: number; statusCode?: number } | null)?.statusCode
  const httpStatus = status ?? statusCode ?? 500
  const isClientError = httpStatus >= 400 && httpStatus < 500

  res.status(isClientError ? httpStatus : 500).json({
    ok: false,
    error: isClientError ? 'bad_request' : 'server',
    message: isClientError
      ? 'The request could not be understood. Please try again.'
      : 'Something went wrong. Please try again, or contact us directly.',
  })
})

app.listen(env.port, () => {
  console.log(`Omega admission-enquiry API listening on http://localhost:${env.port}`)
})
