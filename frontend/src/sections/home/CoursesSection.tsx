import { ProgrammeCard } from '@/components/common/ProgrammeCard'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROUTES } from '@/config/routes'
import { programmes } from '@/data'

/** Homepage programmes: Pre-Foundation and Foundation, from data/programmes.ts. */
export function CoursesSection() {
  return (
    <Section id="courses" labelledBy="courses-heading">
      <SectionHeading
        headingId="courses-heading"
        eyebrow="Programmes"
        title="Our programmes"
        description="Omega Education Centre runs two classroom programmes, for Classes 5 to 12, in the CBSE, BSEB and NCERT curriculum."
      />
      <div className="grid grid--2">
        {programmes.map((programme) => (
          <ProgrammeCard key={programme.slug} programme={programme} />
        ))}
      </div>
      <CtaGroup>
        <ButtonLink to={ROUTES.courses} variant="ghost">
          View all courses
        </ButtonLink>
      </CtaGroup>
    </Section>
  )
}
