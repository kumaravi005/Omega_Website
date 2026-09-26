// Loads backend/.env when present (never committed — see .env.example).
// Requires the process to be started with this folder as the working
// directory (true for `npm run dev` / `npm start` run from here).
try {
  process.loadEnvFile('.env')
} catch {
  // No .env file — fine in production if the host provides real env vars
  // directly, or for a fresh checkout that hasn't been configured yet.
}

export const env = {
  port: Number(process.env.PORT ?? 4000),
  frontendOrigin: process.env.FRONTEND_ORIGIN ?? 'http://localhost:5173',
}
