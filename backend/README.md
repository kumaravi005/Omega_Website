# Backend

A small Express + TypeScript API for the admission enquiry form on the
[frontend](../frontend). It runs directly on Node's built-in TypeScript
support — no build step, no `ts-node`/`tsx`.

## Running locally

```sh
cd backend
npm install
cp .env.example .env   # see variables below
npm run dev             # http://localhost:4000, restarts on file changes
```

## Environment variables

Copy `.env.example` to `.env` for local development (never commit the real
`.env`):

| Variable          | Purpose                                                              |
| ------------------ | --------------------------------------------------------------------- |
| `PORT`             | Port the API listens on. Defaults to `4000`.                         |
| `FRONTEND_ORIGIN`  | The frontend origin allowed to call this API (CORS). Set this to the site's real production URL once deployed. |

## API

| Method | Path              | Purpose                                   |
| ------ | ----------------- | ------------------------------------------ |
| GET    | `/api/health`     | Liveness check — `{ ok: true, status: 'up' }` |
| POST   | `/api/enquiries`  | Submit an admission enquiry (see below)   |

`POST /api/enquiries` validates every field server-side
(`src/validation/enquiry.ts`) regardless of what the frontend already
checked, rejects malformed JSON and oversized bodies, and is rate-limited per
IP (`src/rateLimit.ts`, 5 requests / 60s). It returns:

- `201 { ok: true, message }` — the enquiry was received and validated.
- `400 { ok: false, error: 'validation', fields }` — one or more fields
  failed validation; `fields` maps field name to a human-readable message.
- `429 { ok: false, error: 'rate_limited', message }` — too many requests
  from this IP.
- `500 { ok: false, error: 'server', message }` — an unexpected server
  error. Internal error details are logged server-side and never sent to the
  client.

## Important: no persistence, email, or CAPTCHA yet

A successful `201` response means the server **received and validated** the
enquiry — it is currently only logged to the server console
(`src/routes/enquiries.ts`), not stored anywhere durable, and no one is
notified. Do not treat this endpoint as a real intake system until one of the
following is decided and configured:

- **Permanent storage** — a database needs to be chosen (and its connection
  details supplied) before enquiries survive a server restart.
- **Email notification** — an email provider and credentials need to be
  chosen before the institute is notified of a new enquiry automatically.
- **CAPTCHA / abuse protection beyond IP rate limiting** — a provider and
  site/secret keys need to be chosen if the current per-IP rate limit isn't
  enough.

None of these have been added, invented, or simulated — see the root
[README](../README.md) for current project status.

See the [root README](../README.md) for the overall project structure, and
[`../frontend/README.md`](../frontend/README.md) for the website itself.
