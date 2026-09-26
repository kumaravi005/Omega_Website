import { EnquiryOptions } from '@/components/common/EnquiryOptions'
import { PageMeta } from '@/components/common/PageMeta'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

/**
 * Admission enquiry hub. There is no backend form yet, so this page offers
 * every other offline enquiry path instead of a dead end — see EnquiryOptions.
 */
export default function AdmissionPage() {
  return (
    <Section labelledBy="admission-heading">
      <PageMeta
        title="Admission"
        description="How to enquire about admission at Omega Education Centre, for the Pre-Foundation and Foundation programmes."
      />
      <SectionHeading
        as="h1"
        headingId="admission-heading"
        eyebrow="Admission"
        title="Admission enquiry"
        description="Get in touch about admission for Pre-Foundation or Foundation — call, WhatsApp, send an enquiry, or visit the centre."
      />
      <EnquiryOptions />
    </Section>
  )
}
