import { AnchorButton } from '@/components/ui/AnchorButton'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { ROUTES } from '@/config/routes'
import { branches, contactInfo } from '@/data'
import { formatAddress, telHref, whatsappHref } from '@/utils/contact'
import styles from './EnquiryOptions.module.css'

interface EnquiryOptionsProps {
  /**
   * Where the "Enquiry Form" button goes. Defaults to the /admission page.
   * On that page itself, pass an in-page anchor (e.g. "#enquiry-form") so it
   * jumps to the real form instead of linking to the page it's already on.
   */
  formHref?: string
}

/**
 * Four independent offline admission-enquiry paths — a visitor picks whichever
 * suits them, none is forced. Call, WhatsApp and Visit Centre only appear once
 * a number / centre is confirmed in data/contact.ts and data/branches.ts.
 */
export function EnquiryOptions({ formHref = ROUTES.admission }: EnquiryOptionsProps) {
  const { phones, whatsapp } = contactInfo
  const phone = phones[0]
  const branch = branches[0]
  const isAnchor = formHref.startsWith('#')

  return (
    <div>
      <CtaGroup>
        {isAnchor ? (
          <AnchorButton href={formHref} variant="accent" size="lg">
            Enquiry Form
          </AnchorButton>
        ) : (
          <ButtonLink to={formHref} variant="accent" size="lg">
            Enquiry Form
          </ButtonLink>
        )}
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
