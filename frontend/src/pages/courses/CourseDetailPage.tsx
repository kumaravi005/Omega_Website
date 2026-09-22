import { useParams } from 'react-router'
import { EnquiryOptions } from '@/components/common/EnquiryOptions'
import { PageMeta } from '@/components/common/PageMeta'
import { Badge } from '@/components/ui/Badge'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { ImageFrame } from '@/components/ui/ImageFrame'
import { InfoGrid } from '@/components/ui/InfoGrid'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROUTES } from '@/config/routes'
import { academicSystem, assessmentCycle, assessments, getProgramme, parentInteractionSummary, studyMaterial } from '@/data'
import NotFoundPage from '@/pages/not-found/NotFoundPage'

/**
 * One page component serves every /courses/:courseSlug route (pre-foundation,
 * foundation). A slug that is not in data/programmes.ts shows the 404 page —
 * this is also how old /courses/jee and /courses/neet links now resolve.
 *
 * The academic system, assessment, study material and parent-interaction
 * sections are institute-wide (data/academics.ts) and identical on every
 * programme page; only the hero, overview and academic focus are programme-specific.
 */
export default function CourseDetailPage() {
  const { courseSlug = '' } = useParams()
  const programme = getProgramme(courseSlug)

  if (!programme) return <NotFoundPage />

  return (
    <>
      <PageMeta title={programme.name} description={programme.shortDescription} />

      {/* Hero */}
      <Section labelledBy="programme-heading" tone="dark" tight>
        <Breadcrumb
          items={[
            { label: 'Home', to: ROUTES.home },
            { label: 'Courses', to: ROUTES.courses },
            { label: programme.name },
          ]}
        />
        <div className="split">
          <div>
            <SectionHeading
              as="h1"
              headingId="programme-heading"
              eyebrow={programme.classRange}
              title={programme.name}
              description={programme.shortDescription}
            />
            <div className="cluster">
              {programme.curriculum.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <CtaGroup>
              <ButtonLink to={programme.cta.to} variant="accent" size="lg">
                {programme.cta.label}
              </ButtonLink>
            </CtaGroup>
          </div>
          <ImageFrame
            image={programme.image}
            placeholderLabel="Programme photograph to be added"
            ratio="4/3"
          />
        </div>
      </Section>

      {/* Overview */}
      <Section labelledBy="overview-heading">
        <SectionHeading
          headingId="overview-heading"
          eyebrow="Overview"
          title={`About the ${programme.name} programme`}
        />
        <p className="lead measure">{programme.description}</p>
        {programme.examinations && (
          <div className="cluster">
            <span className="text-small text-muted">Prepares for:</span>
            {programme.examinations.map((exam) => (
              <Badge key={exam} tone="primary">
                {exam}
              </Badge>
            ))}
          </div>
        )}
      </Section>

      {/* Academic focus */}
      <Section tone="muted" labelledBy="focus-heading">
        <SectionHeading
          headingId="focus-heading"
          eyebrow="Academic focus"
          title="What the programme focuses on"
        />
        <InfoGrid items={programme.focusAreas} columns={2} />
      </Section>

      {/* Academic system */}
      <Section labelledBy="system-heading">
        <SectionHeading headingId="system-heading" eyebrow="Academic system" title="How classes are run" />
        <InfoGrid items={academicSystem} columns={3} />
      </Section>

      {/* Study material */}
      <Section tone="muted" tight labelledBy="material-heading">
        <SectionHeading
          headingId="material-heading"
          eyebrow="Study material"
          title="What students use to practise"
        />
        <div className="cluster">
          {studyMaterial.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
      </Section>

      {/* Assessment */}
      <Section labelledBy="assessment-heading">
        <SectionHeading
          headingId="assessment-heading"
          eyebrow="Assessment"
          title="Minor, major and board-pattern tests"
          description={assessmentCycle.join(' → ')}
        />
        <InfoGrid items={assessments} columns={3} />
      </Section>

      {/* Parent interaction */}
      <Section tone="muted" tight labelledBy="parents-heading">
        <SectionHeading headingId="parents-heading" eyebrow="Parent interaction" title="Parent–Teacher Meetings" />
        <p className="lead measure">{parentInteractionSummary}</p>
      </Section>

      {/* Admission / enquiry CTA */}
      <Section tone="dark" labelledBy="enquire-heading">
        <SectionHeading
          headingId="enquire-heading"
          eyebrow="Admission"
          title={`Enquire about ${programme.name}`}
        />
        <EnquiryOptions />
      </Section>
    </>
  )
}
