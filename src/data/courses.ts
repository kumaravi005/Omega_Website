import type { Course } from '@/types/content'

/**
 * Courses that have a dedicated page (/courses/:slug).
 * Only the slug and title are set. Add summary, audience, duration and
 * highlights once the institute confirms them.
 */
export const courses: Course[] = [
  { slug: 'foundation', title: 'Foundation' },
  { slug: 'jee', title: 'JEE' },
  { slug: 'neet', title: 'NEET' },
]

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug)
}
