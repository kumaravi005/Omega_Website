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

/**
 * Link groups for the footer. The footer adds its own "Courses" column
 * (from data/courses.ts) and "Contact" column (from data/contact.ts and
 * data/branches.ts), so they are not listed here.
 */
export const footerNav: NavGroup[] = [
  {
    title: 'Explore',
    items: [
      { label: 'About', to: ROUTES.about },
      { label: 'Faculty', to: ROUTES.faculty },
      { label: 'Results', to: ROUTES.results },
      { label: 'Scholarship', to: ROUTES.scholarship },
      { label: 'News', to: ROUTES.news },
      { label: 'Admission', to: ROUTES.admission },
    ],
  },
]
