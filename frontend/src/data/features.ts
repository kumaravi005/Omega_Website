import type { Feature } from '@/types/content'

/**
 * "Why choose Omega" highlights — the documented features from the official
 * prospectus ("OEC Guide", session 2026-27): limited batch size, doubt and
 * tutorial sessions, NCERT-based study material, parent-teacher interaction,
 * and the structured academic system (see data/academics.ts for the detail
 * behind each). No exam-selection claims or unsupported statistics.
 */
export const features: Feature[] = [
  {
    id: 'small-batches',
    title: 'Limited batch size',
    description: 'Batches are kept to a limited number of students, taught in morning and evening sessions.',
  },
  {
    id: 'doubt-tutorial',
    title: 'Doubt and tutorial sessions',
    description: 'Regular doubt-solving and tutorial sessions, with extra support for students who need it.',
  },
  {
    id: 'ncert-material',
    title: 'NCERT-based study material',
    description: 'Notes, practice sheets, DPP and question banks are based on the NCERT curriculum.',
  },
  {
    id: 'parent-teacher',
    title: 'Parent–Teacher interaction',
    description:
      "Regular Parent–Teacher Meetings share a student's academic performance, progress and areas that may need more attention.",
  },
  {
    id: 'academic-system',
    title: 'A structured academic system',
    description: 'Classroom lectures, concept building, revision and a minor/major/board-pattern test cycle.',
  },
]
