/** "tel:" link for a phone number as typed by the institute, e.g. "+91 98765 43210". */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}

/** wa.me chat link for a WhatsApp number. */
export function whatsappHref(number: string): string {
  return `https://wa.me/${number.replace(/\D/g, '')}`
}
