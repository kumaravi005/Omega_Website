import { EmptyState } from '@/components/common/EmptyState'
import { PageMeta } from '@/components/common/PageMeta'
import { ResultCard } from '@/components/common/ResultCard'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROUTES } from '@/config/routes'
import { results } from '@/data'

/**
 * Verified student results, organised by exam and year, once the institute
 * documents them in data/results.ts. Real result photographs and figures are
 * published only with student and parent consent — see src/assets/README.md.
 */
export default function ResultsPage() {
  return (
    <Section labelledBy="results-heading">
      <PageMeta
        title="Results"
        description="Verified student results and achievements from Omega Education Centre, organised by exam and year."
      />
      <SectionHeading
        as="h1"
        headingId="results-heading"
        eyebrow="Results and achievements"
        title="Results"
        description="Verified student results, organised by exam and year."
      />
      {results.length > 0 ? (
        <div className="grid grid--3">
          {results.map((result) => (
            <ResultCard key={result.id} result={result} />
          ))}
        </div>
      ) : (
        <EmptyState
          imageLabel="Result photographs will appear here once available"
          message="Once available, verified student results will be published here, organised by exam and year, with student and parent consent."
          cta={{ label: 'Contact us', to: ROUTES.contact }}
        />
      )}
    </Section>
  )
}
