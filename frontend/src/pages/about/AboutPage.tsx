import { Link } from 'react-router'
import { PageMeta } from '@/components/common/PageMeta'
import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { InfoGrid } from '@/components/ui/InfoGrid'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROUTES } from '@/config/routes'
import { academicSystem, assessmentCycle, parentInteractionSummary, studyMaterial } from '@/data'

/**
 * About page: a concise, prospectus-grounded account of how Omega teaches.
 * Reuses the same academic-system, assessment and parent-interaction content
 * as the programme pages (data/academics.ts), so the facts never drift
 * between pages. No history, founder details, achievements or statistics —
 * none of that is confirmed.
 */
export default function AboutPage() {
  return (
    <>
      <Section labelledBy="about-heading">
        <PageMeta
          title="About"
          description="Omega Education Centre is an offline classroom coaching institute for Classes 5 to 12, in the CBSE, BSEB and NCERT curriculum."
        />
        <SectionHeading
          as="h1"
          headingId="about-heading"
          eyebrow="About Omega Education Centre"
          title="Classroom-focused learning, for Classes 5 to 12"
        />
        <div className="stack measure">
          <p>
            Omega Education Centre is an offline coaching institute. Every class is taught in
            person, at the centre, with the teacher and the students in the same room — there
            are no online classes.
          </p>
          <p>
            Two classroom programmes are taught, in the CBSE, BSEB and NCERT curriculum:
            Pre-Foundation for Classes 5 to 10, and Foundation for Classes 11 and 12. See the{' '}
            <Link to={ROUTES.courses}>Courses page</Link> for details on each.
          </p>
        </div>
      </Section>

      <Section tone="muted" labelledBy="how-we-teach-heading">
        <SectionHeading headingId="how-we-teach-heading" eyebrow="Academic system" title="How we teach" />
        <InfoGrid items={academicSystem} columns={3} />
      </Section>

      <Section labelledBy="assessment-heading">
        <SectionHeading
          headingId="assessment-heading"
          eyebrow="Assessment"
          title="Minor, major and board-pattern tests"
          description={assessmentCycle.join(' → ')}
        />
        <p className="lead measure">
          Students are assessed through minor tests on topics currently being taught, major
          tests after a larger portion of the syllabus, and board-pattern tests designed
          around the board examination pattern.
        </p>
      </Section>

      <Section tone="muted" tight labelledBy="material-heading">
        <SectionHeading headingId="material-heading" eyebrow="Study material" title="What students use to practise" />
        <div className="cluster">
          {studyMaterial.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      <Section tight labelledBy="parents-heading">
        <SectionHeading headingId="parents-heading" eyebrow="Parent interaction" title="Parent–Teacher Meetings" />
        <p className="lead measure">{parentInteractionSummary}</p>
        <CtaGroup>
          <ButtonLink to={ROUTES.courses} variant="outline">
            Explore our programmes
          </ButtonLink>
          <ButtonLink to={ROUTES.contact}>Get in touch</ButtonLink>
        </CtaGroup>
      </Section>
    </>
  )
}
