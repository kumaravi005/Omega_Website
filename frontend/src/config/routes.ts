/**
 * Route path constants. Always link via these instead of hardcoding strings,
 * so a path change happens in exactly one place.
 */

import type { ProgrammeSlug } from '@/types/content'

export const ROUTES = {
  home: '/',
  about: '/about',
  courses: '/courses',
  results: '/results',
  faculty: '/faculty',
  scholarship: '/scholarship',
  admission: '/admission',
  news: '/news',
  contact: '/contact',
} as const

/** Path of a single programme page, e.g. courseRoute('foundation') -> "/courses/foundation". */
export function courseRoute(slug: ProgrammeSlug): string {
  return `${ROUTES.courses}/${slug}`
}
