import { EmptyState } from '@/components/common/EmptyState'
import { PageMeta } from '@/components/common/PageMeta'
import { InfoGrid } from '@/components/ui/InfoGrid'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROUTES } from '@/config/routes'
import { scholarship } from '@/data'

/**
 * Scholarship / O-SAT details, once the institute confirms them in
 * data/scholarship.ts. No percentages, eligibility rules or dates are shown
 * unless they are set there — none are invented on this page.
 */
export default function ScholarshipPage() {
  const hasContent = Boolean(scholarship.summary || scholarship.eligibility || scholarship.slabs.length)

  return (
    <Section labelledBy="scholarship-heading">
      <PageMeta
        title="Scholarship"
        description="Scholarship (O-SAT) information for Omega Education Centre: eligibility, test information and how to apply."
      />
      <SectionHeading
        as="h1"
        headingId="scholarship-heading"
        eyebrow="Scholarship"
        title={scholarship.testName ?? 'Scholarship'}
        description={scholarship.summary ?? 'Scholarship and O-SAT details: eligibility, test information and how to apply.'}
      />
      {hasContent ? (
        <div className="stack">
          {scholarship.eligibility && <p className="lead measure">{scholarship.eligibility}</p>}
          {scholarship.slabs.length > 0 && (
            <InfoGrid
              items={scholarship.slabs.map((slab) => ({
                id: slab.id,
                title: slab.label,
                description: slab.description,
              }))}
              columns={3}
            />
          )}
          {scholarship.nextTestDate && <p className="text-muted">Next test date: {scholarship.nextTestDate}</p>}
        </div>
      ) : (
        <EmptyState
          imageLabel="Scholarship details to be added"
          message="Details of Omega's scholarship scheme (O-SAT) — eligibility, test information and how to apply — will be published here once confirmed."
          cta={{ label: 'Contact us', to: ROUTES.contact }}
        />
      )}
    </Section>
  )
}
