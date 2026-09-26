import type { ContactInfo } from '@/types/content'

/**
 * Institute-wide contact details, confirmed from the official prospectus
 * ("OEC Guide", session 2026-27, back cover). +91 is added to the phone
 * number as given (a plain 10-digit Indian mobile number) only because the
 * WhatsApp deep link requires a country code to resolve correctly — the
 * number itself is unchanged.
 */
export const contactInfo: ContactInfo = {
  phones: ['+91 62991 76109'],
  whatsapp: '+91 62991 76109',
  email: 'vk554443@gmail.com',
  social: {},
}
