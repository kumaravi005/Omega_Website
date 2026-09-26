import { EnquiryOptions } from '@/components/common/EnquiryOptions'
import { PageMeta } from '@/components/common/PageMeta'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { siteConfig } from '@/config/site'
import { branches, contactInfo } from '@/data'
import { formatAddress, telHref } from '@/utils/contact'

/**
 * Contact details and every offline enquiry path. Only confirmed institute
 * facts appear here (see data/contact.ts, data/branches.ts) — no fees,
 * timings or facilities that have not been confirmed.
 */
export default function ContactPage() {
  const branch = branches[0]
  const { phones, email } = contactInfo

  return (
    <>
      <Section labelledBy="contact-heading">
        <PageMeta
          title="Contact"
          description="Contact Omega Education Centre: phone, email, centre location and admission enquiry options."
        />
        <SectionHeading
          as="h1"
          headingId="contact-heading"
          eyebrow="Get in touch"
          title="Contact Omega Education Centre"
          description="Reach us by whichever way suits you — call, WhatsApp, send an enquiry, or visit the centre."
        />

        <div className="stack">
          <h2 className="h4">{siteConfig.name}</h2>
          {branch && <address>{formatAddress(branch.address)}</address>}
          {phones.map((phone) => (
            <p key={phone}>
              <a href={telHref(phone)}>{phone}</a>
            </p>
          ))}
          {email && (
            <p>
              <a href={`mailto:${email}`}>{email}</a>
            </p>
          )}
        </div>
      </Section>

      <Section tone="muted" labelledBy="enquire-heading">
        <SectionHeading
          headingId="enquire-heading"
          eyebrow="Admission"
          title="Enquire about admission"
          description="Pick whichever option is easiest for you — none of these routes is compulsory."
        />
        <EnquiryOptions />
      </Section>
    </>
  )
}
