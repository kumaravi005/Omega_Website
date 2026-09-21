import { ROUTES } from '@/config/routes'
import type { NavGroup, NavItem } from '@/types/common'

/** Main header navigation, in display order. */
export const primaryNav: NavItem[] = [
  { label: 'Home', to: ROUTES.home },
  { label: 'About', to: ROUTES.about },
  { label: 'Courses', to: ROUTES.courses },
  { label: 'Results', to: ROUTES.results },
  { label: 'Faculty', to: ROUTES.faculty },
  { label: 'Scholarship', to: ROUTES.scholarship },
  { label: 'News', to: ROUTES.news },
  { label: 'Contact', to: ROUTES.contact },
]

/** Highlighted call-to-action shown beside the main navigation. */
export const headerCta: NavItem = { label: 'Admission', to: ROUTES.admission }

/** Grouped links for the footer. */
export const footerNav: NavGroup[] = [
  {
    title: 'Institute',
    items: [
      { label: 'About', to: ROUTES.about },
      { label: 'Faculty', to: ROUTES.faculty },
      { label: 'Results', to: ROUTES.results },
      { label: 'News', to: ROUTES.news },
    ],
  },
  {
    title: 'Admissions',
    items: [
      { label: 'Courses', to: ROUTES.courses },
      { label: 'Scholarship', to: ROUTES.scholarship },
      { label: 'Admission', to: ROUTES.admission },
      { label: 'Contact', to: ROUTES.contact },
    ],
  },
]
