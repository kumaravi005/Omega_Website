import { API_URL } from '@/config/api'
import type { EnquiryFieldErrors, EnquiryFormValues } from '@/types/enquiry'

/**
 * Inline-validation rules for the admission enquiry form. This is only for
 * immediate UX feedback — the backend (backend/src/validation/enquiry.ts)
 * re-validates everything and is the authoritative check. Keep the two in
 * sync: same phone pattern, same length limits.
 */

const PHONE_PATTERN = /^(?:\+91|91|0)?[6-9]\d{9}$/

const LIMITS = {
  studentName: 100,
  parentName: 100,
  studentClass: 20,
  phone: 20,
  message: 1000,
} as const

/** Validates a single field; returns an error message, or undefined if valid. */
export function validateField(
  name: keyof EnquiryFormValues,
  values: EnquiryFormValues,
): string | undefined {
  switch (name) {
    case 'studentName': {
      const value = values.studentName.trim()
      if (!value) return "Enter the student's name."
      if (value.length > LIMITS.studentName) return 'That name is too long.'
      return undefined
    }
    case 'parentName': {
      const value = values.parentName.trim()
      if (!value) return "Enter the parent or guardian's name."
      if (value.length > LIMITS.parentName) return 'That name is too long.'
      return undefined
    }
    case 'studentClass':
      return values.studentClass.trim() ? undefined : "Select the student's class."
    case 'programme':
      return values.programme ? undefined : 'Select a programme.'
    case 'phone': {
      const digits = values.phone.trim().replace(/[\s-]/g, '')
      if (!digits) return 'Enter a phone number.'
      if (digits.length > LIMITS.phone || !PHONE_PATTERN.test(digits)) {
        return 'Enter a valid 10-digit mobile number.'
      }
      return undefined
    }
    case 'preferredContact':
      return values.preferredContact ? undefined : 'Select how we should contact you.'
    case 'message':
      return values.message.trim().length > LIMITS.message
        ? 'That message is too long — please shorten it.'
        : undefined
    default:
      return undefined
  }
}

/** Field order used for validating and for moving focus to the first invalid field. */
export const ENQUIRY_FIELD_ORDER: (keyof EnquiryFormValues)[] = [
  'studentName',
  'parentName',
  'studentClass',
  'programme',
  'phone',
  'preferredContact',
  'message',
]

/** Validates every field. Returns an empty object when the form is valid. */
export function validateEnquiryForm(values: EnquiryFormValues): EnquiryFieldErrors {
  const errors: EnquiryFieldErrors = {}
  for (const name of ENQUIRY_FIELD_ORDER) {
    const error = validateField(name, values)
    if (error) errors[name] = error
  }
  return errors
}

export interface SubmitEnquiryResult {
  ok: boolean
  message: string
  fields?: EnquiryFieldErrors
}

interface ApiSuccessBody {
  ok: true
  message: string
}

interface ApiErrorBody {
  ok: false
  error: string
  message?: string
  fields?: EnquiryFieldErrors
}

/** Submits the enquiry to the backend. Never throws — always resolves with a result. */
export async function submitEnquiry(values: EnquiryFormValues): Promise<SubmitEnquiryResult> {
  let response: Response
  try {
    response = await fetch(`${API_URL}/api/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
  } catch {
    return {
      ok: false,
      message: 'We could not reach the server. Please check your connection, or contact us directly.',
    }
  }

  const body = (await response.json().catch(() => null)) as ApiSuccessBody | ApiErrorBody | null

  if (response.ok && body?.ok) {
    return { ok: true, message: body.message }
  }

  if (body && !body.ok && body.error === 'validation') {
    return { ok: false, fields: body.fields, message: 'Please check the highlighted fields.' }
  }

  return {
    ok: false,
    message:
      body?.message ?? 'Something went wrong sending your enquiry. Please try again, or contact us directly.',
  }
}
