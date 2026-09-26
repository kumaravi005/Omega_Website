import { EnquiryOptions } from '@/components/common/EnquiryOptions'
import { PageMeta } from '@/components/common/PageMeta'
import { ProgrammeCard } from '@/components/common/ProgrammeCard'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { programmes } from '@/data'

export default function CoursesPage() {
  return (
    <>
      <Section labelledBy="courses-heading">
        <PageMeta
          title="Courses"
          description="Omega Education Centre's classroom programmes: Pre-Foundation (Classes 5 to 10) and Foundation (Classes 11 and 12)."
        />
        <SectionHeading
          as="h1"
          headingId="courses-heading"
          eyebrow="Courses"
          title="Our programmes"
          description="Omega Education Centre runs two classroom programmes, for Classes 5 to 12, in the CBSE, BSEB and NCERT curriculum."
        />
        <div className="grid grid--2">
          {programmes.map((programme) => (
            <ProgrammeCard key={programme.slug} programme={programme} headingLevel="h2" />
          ))}
        </div>
      </Section>

      <Section tone="dark" labelledBy="courses-cta-heading">
        <SectionHeading
          headingId="courses-cta-heading"
          eyebrow="Admission"
          title="Have questions about a programme?"
          description="Get in touch — call, WhatsApp, send an enquiry, or visit the centre."
        />
        <EnquiryOptions />
      </Section>
    </>
  )
}
