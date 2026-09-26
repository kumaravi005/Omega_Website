import { AnchorButton } from '@/components/ui/AnchorButton'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { ROUTES } from '@/config/routes'
import { branches, contactInfo } from '@/data'
import { formatAddress, telHref, whatsappHref } from '@/utils/contact'
import styles from './EnquiryOptions.module.css'

/**
 * Four independent offline admission-enquiry paths — a visitor picks whichever
 * suits them, none is forced. Call, WhatsApp and Visit Centre only appear once
 * a number / centre is confirmed in data/contact.ts and data/branches.ts; the
 * enquiry form link is always shown. No backend form is built yet — "Enquiry
 * Form" routes to the /admission page.
 */
export function EnquiryOptions() {
  const { phones, whatsapp } = contactInfo
  const phone = phones[0]
  const branch = branches[0]

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
            <span className="visually-hidden"> (opens in a new tab)</span>
          </AnchorButton>
        )}
        {branch?.mapUrl && (
          <AnchorButton
            href={branch.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="lg"
          >
            Visit Centre
            <span className="visually-hidden"> (opens in a new tab)</span>
          </AnchorButton>
        )}
      </CtaGroup>
      {branch && <address className={styles.address}>{formatAddress(branch.address)}</address>}
    </div>
  )
}
