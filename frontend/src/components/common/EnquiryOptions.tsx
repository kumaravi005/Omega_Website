import { AnchorButton } from '@/components/ui/AnchorButton'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { ROUTES } from '@/config/routes'
import { contactInfo, locality } from '@/data'
import { telHref, whatsappHref } from '@/utils/contact'
import styles from './EnquiryOptions.module.css'

/**
 * Multiple offline admission-enquiry paths, so a visitor is not forced into
 * one particular route. Call and WhatsApp only appear once a number is
 * confirmed in data/contact.ts; the enquiry form link and the locality note
 * (from data/location.ts) are always shown. No backend form is built yet —
 * "Enquiry Form" routes to the /admission placeholder page.
 */
export function EnquiryOptions() {
  const { phones, whatsapp } = contactInfo
  const phone = phones[0]

  return (
    <div>
      <CtaGroup>
        <ButtonLink to={ROUTES.admission} variant="accent" size="lg">
          Enquiry Form
        </ButtonLink>
        {phone && (
          <AnchorButton href={telHref(phone)} variant="outline" size="lg">
            Call {phone}
          </AnchorButton>
        )}
        {whatsapp && (
          <AnchorButton
            href={whatsappHref(whatsapp)}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            WhatsApp
          </AnchorButton>
        )}
      </CtaGroup>
      <p className={styles.visit}>
        Visit the centre — near {locality.village}, {locality.district} ({locality.state}).
        Exact directions are shared when you enquire.
      </p>
    </div>
  )
}
