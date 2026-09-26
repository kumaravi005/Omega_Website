import { Router } from 'express'
import { validateEnquiry } from '../validation/enquiry.ts'

export const enquiriesRouter = Router()

/**
 * POST /api/enquiries — receive and validate an admission enquiry.
 *
 * IMPORTANT — no permanent storage or email notification is configured yet.
 * A validated enquiry is only logged to the server console below; it is
 * NOT durably stored anywhere, and no one is notified automatically. See
 * backend/README.md for what is needed to change that, and do not treat this
 * endpoint as a real intake system until it does.
 */
enquiriesRouter.post('/', (req, res) => {
  const result = validateEnquiry(req.body)

  if (!result.ok) {
    res.status(400).json({ ok: false, error: 'validation', fields: result.fields })
    return
  }

  console.log(
    '[enquiry:received]',
    JSON.stringify({ ...result.data, receivedAt: new Date().toISOString() }),
  )

  res.status(201).json({ ok: true, message: 'Enquiry received.' })
})
