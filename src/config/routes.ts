/**
 * Route path constants. Always link via these instead of hardcoding strings,
 * so a path change happens in exactly one place.
 */

import type { CourseSlug } from '@/types/content'

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

/** Path of a single course page, e.g. courseRoute('jee') -> "/courses/jee". */
export function courseRoute(slug: CourseSlug): string {
  return `${ROUTES.courses}/${slug}`
}
