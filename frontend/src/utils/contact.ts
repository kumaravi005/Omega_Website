import type { PostalAddress } from '@/types/content'

/** "tel:" link for a phone number as typed by the institute, e.g. "+91 98765 43210". */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

/** wa.me chat link for a WhatsApp number. Needs the country code to resolve correctly. */
export function whatsappHref(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, '')}`
}

/** Single-line rendering of a postal address, e.g. for a map query or plain text. */
export function formatAddress(address: PostalAddress): string {
  return [address.line1, address.line2, address.city, `${address.state} ${address.pincode}`]
    .filter(Boolean)
    .join(', ')
}

/** Google Maps search link for an address — a best-effort text search, not a fixed pin. */
export function mapsSearchUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}
