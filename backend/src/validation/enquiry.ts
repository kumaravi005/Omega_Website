/**
 * Server-side validation for an admission enquiry. This is the authoritative
 * check — the frontend's matching validation (frontend/src/utils/enquiry.ts)
 * is only for immediate UX feedback and must never be trusted on its own.
 * Keep the rules in the two files in sync.
 */

export type ProgrammeSlug = 'pre-foundation' | 'foundation'
export type PreferredContact = 'call' | 'whatsapp'

export interface EnquiryInput {
  studentName: string
  parentName: string
  studentClass: string
  programme: ProgrammeSlug
  phone: string
  preferredContact: PreferredContact
  message?: string
}

export type FieldErrors = Record<string, string>

const PROGRAMME_SLUGS: readonly ProgrammeSlug[] = ['pre-foundation', 'foundation']
const PREFERRED_CONTACTS: readonly PreferredContact[] = ['call', 'whatsapp']

// A plain 10-digit Indian mobile number, optionally prefixed with +91, 91 or
// a leading 0 (matches the format the institute's own number is shown in).
const PHONE_PATTERN = /^(?:\+91|91|0)?[6-9]\d{9}$/

// Generous but firm limits: enough for genuine input, not enough for abuse.
const LIMITS = {
  studentName: 100,
  parentName: 100,
  studentClass: 20,
  phone: 20,
  message: 1000,
} as const

function asTrimmedString(value: unknown): string {
  return typeof value === 'string' ? value.trim() : ''
}

export type ValidationResult =
  | { ok: true; data: EnquiryInput }
  | { ok: false; fields: FieldErrors }

/** Validates and sanitizes (trims, narrows) an unknown request body. */
export function validateEnquiry(body: unknown): ValidationResult {
  if (typeof body !== 'object' || body === null || Array.isArray(body)) {
    return { ok: false, fields: { _: 'The request body must be a JSON object.' } }
  }

  const input = body as Record<string, unknown>
  const fields: FieldErrors = {}

  const studentName = asTrimmedString(input.studentName)
  const parentName = asTrimmedString(input.parentName)
  const studentClass = asTrimmedString(input.studentClass)
  const programme = asTrimmedString(input.programme)
  const preferredContact = asTrimmedString(input.preferredContact)
  const message = asTrimmedString(input.message)
  const phoneDigits = asTrimmedString(input.phone).replace(/[\s-]/g, '')

  if (!studentName) fields.studentName = "Enter the student's name."
  else if (studentName.length > LIMITS.studentName) fields.studentName = 'That name is too long.'

  if (!parentName) fields.parentName = "Enter the parent or guardian's name."
  else if (parentName.length > LIMITS.parentName) fields.parentName = 'That name is too long.'

  if (!studentClass) fields.studentClass = "Enter the student's class."
  else if (studentClass.length > LIMITS.studentClass) fields.studentClass = 'That value is too long.'

  if (!PROGRAMME_SLUGS.includes(programme as ProgrammeSlug)) {
    fields.programme = 'Select a valid programme.'
  }

  if (!phoneDigits) fields.phone = 'Enter a phone number.'
  else if (phoneDigits.length > LIMITS.phone || !PHONE_PATTERN.test(phoneDigits)) {
    fields.phone = 'Enter a valid 10-digit Indian mobile number.'
  }

  if (!PREFERRED_CONTACTS.includes(preferredContact as PreferredContact)) {
    fields.preferredContact = 'Select how the institute should contact you.'
  }

  if (message.length > LIMITS.message) fields.message = 'That message is too long.'

  if (Object.keys(fields).length > 0) {
    return { ok: false, fields }
  }

  return {
    ok: true,
    data: {
      studentName,
      parentName,
      studentClass,
      programme: programme as ProgrammeSlug,
      phone: phoneDigits,
      preferredContact: preferredContact as PreferredContact,
      ...(message ? { message } : {}),
    },
  }
}
