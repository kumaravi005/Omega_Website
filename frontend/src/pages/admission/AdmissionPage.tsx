import { EnquiryOptions } from '@/components/common/EnquiryOptions'
import { PageMeta } from '@/components/common/PageMeta'
import { ProgrammeCard } from '@/components/common/ProgrammeCard'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { programmes } from '@/data'

/**
 * Admission enquiry landing page. There is no backend form yet, so this page
 * leads with every other offline enquiry path instead of a dead end (see
 * EnquiryOptions), then reminds a visitor which programme applies to them.
 * No admission dates, fees, seat availability or procedure steps are shown —
 * none of that is confirmed.
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
        <EnquiryOptions />
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
