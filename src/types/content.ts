/**
 * Content models for the institute's data files in src/data.
 *
 * Fields that the institute may not have yet are optional. UI must handle
 * missing values (and empty lists) without inventing placeholder facts.
 */

import type { ImageRef, IsoDate } from './common'

/** URL slugs of the courses that have their own page. Extend when a course page is added. */
export type CourseSlug = 'foundation' | 'jee' | 'neet'

export interface Course {
  slug: CourseSlug
  title: string
  summary?: string
  /** Who the course is for (class / target exam), as confirmed by the institute. */
  audience?: string
  duration?: string
  highlights?: string[]
  image?: ImageRef
}

export interface FacultyMember {
  id: string
  name: string
  subject: string
  designation?: string
  qualification?: string
  experience?: string
  bio?: string
  photo?: ImageRef
}

export interface ResultEntry {
  id: string
  studentName: string
  /** Exam name, e.g. as printed on the scorecard. */
  exam: string
  year: number
  /** Rank / percentile / score exactly as declared. Kept as text to avoid reformatting. */
  achievement: string
  photo?: ImageRef
}

export interface Testimonial {
  id: string
  name: string
  role: 'student' | 'parent'
  quote: string
  photo?: ImageRef
}

export type NewsCategory = 'notice' | 'news' | 'event'

export interface NewsItem {
  id: string
  slug: string
  title: string
  date: IsoDate
  category: NewsCategory
  summary: string
  body?: string
  /** Pinned items are surfaced first (e.g. admission notices). */
  pinned?: boolean
}

export interface PostalAddress {
  line1: string
  line2?: string
  city: string
  state: string
  pincode: string
}

export interface Branch {
  id: string
  name: string
  address: PostalAddress
  phones?: string[]
  email?: string
  timings?: string
  mapUrl?: string
  image?: ImageRef
}

export interface ContactInfo {
  phones: string[]
  whatsapp?: string
  email?: string
  /** Public enquiry hours, as text. */
  officeHours?: string
  social: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

/** A repeated "why choose us" style highlight. */
export interface Feature {
  id: string
  title: string
  description: string
  /** File name (without extension) inside src/assets/icons. */
  icon?: string
}

/** A photo for the offline classroom / campus experience gallery. */
export interface GalleryItem extends ImageRef {
  id: string
  caption?: string
}

export interface ScholarshipInfo {
  /** Name of the scholarship test (e.g. O-SAT), once details are confirmed. */
  testName?: string
  summary?: string
  eligibility?: string
  /** Scholarship slabs, exactly as the institute defines them. */
  slabs: { id: string; label: string; description: string }[]
  /** Next test date, if scheduled. */
  nextTestDate?: IsoDate
}
