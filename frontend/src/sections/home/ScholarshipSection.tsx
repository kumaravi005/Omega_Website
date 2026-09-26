import { SectionPlaceholder } from '@/components/common/SectionPlaceholder'
import { ROUTES } from '@/config/routes'

/** Planned: scholarship summary from data/scholarship.ts linking to /scholarship. */
export function ScholarshipSection() {
  return (
    <SectionPlaceholder
      id="scholarship"
      title="Scholarship and O-SAT"
      plannedContent="Scholarship test details and how to apply, driven by the scholarship data."
      tone="muted"
      cta={{ label: 'See the Scholarship page', to: ROUTES.scholarship }}
    />
  )
}
