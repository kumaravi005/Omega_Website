import { SectionPlaceholder } from '@/components/common/SectionPlaceholder'
import { ROUTES } from '@/config/routes'

/** Planned: faculty preview from data/faculty.ts linking to /faculty. */
export function FacultySection() {
  return (
    <SectionPlaceholder
      id="faculty"
      title="Our faculty"
      plannedContent="A selection of faculty profiles, driven by the faculty data."
      cta={{ label: 'See the Faculty page', to: ROUTES.faculty }}
    />
  )
}
