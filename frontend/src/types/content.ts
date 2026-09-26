/**
 * Content models for the institute's data files in src/data.
 *
 * Fields that the institute may not have yet are optional. UI must handle
 * missing values (and empty lists) without inventing placeholder facts.
 */

import type { ImageRef, IsoDate, NavItem } from './common'

/** URL slugs of the programmes that have their own page (/courses/:slug). */
export type ProgrammeSlug = 'pre-foundation' | 'foundation'

/** A named area of academic focus within a programme (e.g. "Concept Building"). */
export interface ProgrammeFocusArea {
  id: string
  title: string
  description: string
}

/**
 * One of Omega's classroom programmes. Content must trace back to the official
 * prospectus or another institute-confirmed source — see src/data/programmes.ts.
 */
export interface Programme {
  id: string
  slug: ProgrammeSlug
  name: string
  /** e.g. "Classes 5 to 10". */
  classRange: string
  /** Board / curriculum alignment, e.g. ["CBSE", "BSEB", "NCERT-based learning"]. */
  curriculum: string[]
  /** One-line summary for cards (homepage, /courses listing). */
  shortDescription: string
  /** Longer overview paragraph for the programme detail page. */
  description: string
  focusAreas: ProgrammeFocusArea[]
  /** School-level entrance/competitive examinations this programme prepares students for, if any. */
  examinations?: string[]
  cta: NavItem
  image?: ImageRef
  highlights?: string[]
}

/** One item in the institute's academic system (lecture classes, doubt sessions, ...). */
export interface AcademicSystemItem {
  id: string
  title: string
  description: string
}

/** One category of test (minor, major, board-pattern). */
export interface AssessmentType {
  id: string
  title: string
  description: string
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

/** Homepage hero. Copy must contain only confirmed facts. */
export interface HomeHero {
  /** Small label above the headline. */
  eyebrow: string
  /** The page's single H1. */
  headline: string
  description: string
  primaryCta: NavItem
  secondaryCta?: NavItem
  /** The real hero photograph. While absent, a labelled placeholder is shown. */
  image?: ImageRef
  /** Caption shown on the placeholder so it is never mistaken for a real photo. */
  imagePlaceholder: string
}

/** Homepage "About Omega" introduction. Short preview only; the full story lives on /about. */
export interface HomeIntro {
  eyebrow: string
  title: string
  paragraphs: string[]
  /** Short supporting points. Reuses the Feature shape (icon unused for now). */
  points: Feature[]
  cta?: NavItem
  /** Optional photo shown above the points once a real one exists. */
  image?: ImageRef
}
