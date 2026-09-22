import { ROUTES } from '@/config/routes'
import type { Programme, ProgrammeSlug } from '@/types/content'

/**
 * Omega's classroom programmes. Sourced from the official prospectus
 * ("OEC Guide", session 2026-27) and institute-confirmed facts.
 *
 * Omega is NOT presented as directly providing JEE/NEET coaching. Wording such
 * as "JEE Coaching" or "NEET Preparation Course" must not be used; the
 * Foundation programme is described only as a foundation for future
 * competitive examinations, without naming specific target exams.
 */
export const programmes: Programme[] = [
  {
    id: 'pre-foundation',
    slug: 'pre-foundation',
    name: 'Pre-Foundation',
    classRange: 'Classes 5 to 10',
    curriculum: ['CBSE', 'BSEB', 'NCERT-based learning'],
    shortDescription:
      'School academics and concept building for Classes 5 to 10, with preparation for relevant school-level entrance examinations.',
    description:
      'A structured classroom programme for Classes 5 to 10, focused on building strong school-level fundamentals in line with the CBSE, BSEB and NCERT curriculum. Alongside regular school academics, the programme also prepares students for relevant school-level entrance and competitive examinations, where applicable.',
    focusAreas: [
      {
        id: 'school-foundation',
        title: 'School Academic Foundation',
        description:
          'Building strong fundamentals in school subjects, in line with the CBSE, BSEB and NCERT curriculum.',
      },
      {
        id: 'concept-practice',
        title: 'Concept Building & Practice',
        description:
          'Concepts are built through classroom teaching and reinforced with regular practice and revision.',
      },
      {
        id: 'assessment',
        title: 'Regular Assessment',
        description:
          'Periodic tests help track understanding and identify areas that need more attention.',
      },
      {
        id: 'entrance-exams',
        title: 'School-Level Entrance Exam Preparation',
        description:
          'For Classes 5 to 10, Omega also prepares students for relevant school-level entrance and competitive examinations, where applicable.',
      },
    ],
    // Confirmed by the institute (JNV, CHS, Sainik School) and the prospectus'
    // PNCF batch table on p.4 (Olympiad, NTSE), for Classes 5-10.
    examinations: [
      'Jawahar Navodaya Vidyalaya (JNV)',
      'Central Hindu School (CHS)',
      'Sainik School',
      'Olympiad',
      'NTSE',
    ],
    cta: { label: 'Enquire about Pre-Foundation', to: ROUTES.admission },
  },
  {
    id: 'foundation',
    slug: 'foundation',
    name: 'Foundation',
    classRange: 'Classes 11 and 12',
    curriculum: ['CBSE', 'BSEB', 'NCERT-based learning'],
    shortDescription: 'Board-focused education with a strong competitive foundation.',
    description:
      'A structured classroom programme for Classes 11 and 12, focused on strong conceptual understanding, CBSE and BSEB board preparation, NCERT-based learning and a solid academic foundation for future competitive examinations.',
    focusAreas: [
      {
        id: 'concept-building',
        title: 'Concept Building',
        description: 'Strong understanding of fundamental concepts.',
      },
      {
        id: 'board-preparation',
        title: 'Board Preparation',
        description:
          'Systematic preparation aligned with the relevant CBSE/NCERT and BSEB academic requirements.',
      },
      {
        id: 'problem-solving',
        title: 'Problem Solving',
        description: 'Regular practice to strengthen application and understanding.',
      },
      {
        id: 'competitive-foundation',
        title: 'Competitive Foundation',
        description:
          'Development of conceptual clarity, logical thinking and problem-solving ability that can support future competitive-examination preparation.',
      },
    ],
    // Deliberately no `examinations`: Foundation is not presented as coaching
    // for a specific competitive exam (see the file-level note above).
    cta: { label: 'Enquire about Foundation', to: ROUTES.admission },
  },
]

export function getProgramme(slug: string): Programme | undefined {
  return programmes.find((programme) => programme.slug === slug)
}

/** Type guard used where a route param needs to be narrowed to `ProgrammeSlug`. */
export function isProgrammeSlug(slug: string): slug is ProgrammeSlug {
  return programmes.some((programme) => programme.slug === slug)
}
