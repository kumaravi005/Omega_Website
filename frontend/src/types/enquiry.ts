import type { ProgrammeSlug } from './content'

export type PreferredContact = 'call' | 'whatsapp'

/** Raw form field values — strings only, validated before submission. */
export interface EnquiryFormValues {
  studentName: string
  parentName: string
  studentClass: string
  programme: ProgrammeSlug | ''
  phone: string
  preferredContact: PreferredContact | ''
  message: string
}

export type EnquiryFieldErrors = Partial<Record<keyof EnquiryFormValues, string>>
