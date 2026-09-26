import { AdmissionEnquiryForm } from '@/components/common/AdmissionEnquiryForm'
import { EnquiryOptions } from '@/components/common/EnquiryOptions'
import { PageMeta } from '@/components/common/PageMeta'
import { ProgrammeCard } from '@/components/common/ProgrammeCard'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { programmes } from '@/data'

/**
 * Admission enquiry landing page: every offline enquiry path up top (see
 * EnquiryOptions), a real enquiry form, and a reminder of which programme
 * applies to a visitor before they get in touch. No admission dates, fees,
 * seat availability, procedure steps or response-time promises are shown —
 * none of that is confirmed. The form has no permanent storage or email
 * notification behind it yet — see backend/README.md.
 */
export default function AdmissionPage() {
  return (
    <>
      <Section tone="dark" tight labelledBy="admission-heading">
        <PageMeta
          title="Admission"
          description="How to enquire about admission at Omega Education Centre, for the Pre-Foundation and Foundation programmes."
        />
        <SectionHeading
          as="h1"
          headingId="admission-heading"
          eyebrow="Admission"
          title="Admission enquiry"
          description="Get in touch about admission for Pre-Foundation or Foundation, by whichever method suits you — nobody is asked to pick just one."
        />
        <EnquiryOptions formHref="#enquiry-form" />
      </Section>

      <Section id="enquiry-form" width="narrow" labelledBy="enquiry-form-heading">
        <SectionHeading
          headingId="enquiry-form-heading"
          eyebrow="Enquiry form"
          title="Send us an enquiry"
          description="Share a few details below. This isn't the only way to reach us — call, WhatsApp or visit the centre if you'd rather."
        />
        <AdmissionEnquiryForm />
      </Section>

      <Section tone="muted" labelledBy="which-programme-heading">
        <SectionHeading
          headingId="which-programme-heading"
          eyebrow="Courses"
          title="Not sure which programme?"
          description="A quick look before you get in touch."
        />
        <div className="grid grid--2">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} />
          ))}
        </div>
      </Section>
    </>
  )
}
