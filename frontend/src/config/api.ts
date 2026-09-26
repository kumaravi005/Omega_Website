/**
 * Base URL of the admission-enquiry backend (see /backend). Set VITE_API_URL
 * to point at a different instance — see .env.example.
 */
export const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'
