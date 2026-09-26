import { SectionPlaceholder } from '@/components/common/SectionPlaceholder'
import { ROUTES } from '@/config/routes'

/** Planned: result highlights from data/results.ts linking to /results. */
export function ResultsSection() {
  return (
    <SectionPlaceholder
      id="results"
      title="Results and achievements"
      plannedContent="Verified student results, driven by the results data."
      tone="muted"
      cta={{ label: 'See the Results page', to: ROUTES.results }}
    />
  )
}
