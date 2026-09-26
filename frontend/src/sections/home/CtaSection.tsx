import { EnquiryOptions } from '@/components/common/EnquiryOptions'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

/** Closing homepage call to action: every offline enquiry path, in one place. */
export function CtaSection() {
  return (
    <Section id="admission-cta" tone="dark" labelledBy="cta-heading">
      <SectionHeading
        headingId="cta-heading"
        eyebrow="Admissions"
        title="Ready to enquire?"
        description="Get in touch about admission for Pre-Foundation or Foundation — call, WhatsApp, send an enquiry, or visit the centre."
      />
      <EnquiryOptions />
    </Section>
  )
}
