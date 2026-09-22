import type { AcademicSystemItem, AssessmentType } from '@/types/content'

/**
 * Institute-wide academic system, testing, study material and parent
 * communication content. Sourced from the official prospectus ("OEC Guide",
 * session 2026-27) — see "Teaching Methodology" and "Our Academic System" —
 * and shared by every programme detail page, since the prospectus does not
 * describe these as varying by class range.
 */

export const academicSystem: AcademicSystemItem[] = [
  {
    id: 'lectures',
    title: 'Structured Lecture Classes',
    description: 'Classroom lectures are designed around the pattern and level of the board syllabus.',
  },
  {
    id: 'concept-building',
    title: 'Concept Building',
    description: 'Batch-wise classes with a limited number of students, held in morning and evening sessions.',
  },
  {
    id: 'revision',
    title: 'Revision Classes',
    description: 'Revision classes for selected topics are held regularly.',
  },
  {
    id: 'tutorial',
    title: 'Tutorial & Practice Sessions',
    description:
      'Separate sessions for working through worksheets, DPP (Daily Practice Problems) and the question bank.',
  },
  {
    id: 'doubt-solving',
    title: 'Doubt-Solving Sessions',
    description:
      'Doubt sessions are scheduled regularly, with additional sessions arranged for students who need extra support.',
  },
]

/** The stated purpose of the test system: learn, test, analyse, then improve. */
export const assessmentCycle = ['Learn', 'Test', 'Analyse', 'Improve']

export const assessments: AssessmentType[] = [
  {
    id: 'minor',
    title: 'Minor Test',
    description: 'Confined to the topics currently being taught.',
  },
  {
    id: 'major',
    title: 'Major Test',
    description: 'Conducted after a larger portion of the syllabus is complete.',
  },
  {
    id: 'board-pattern',
    title: 'Board-Pattern Test',
    description:
      'Designed around the board syllabus, to help students become familiar with the board examination pattern.',
  },
]

export const studyMaterial = [
  'NCERT-based learning',
  'Notes',
  'Practice sheets',
  'DPP (Daily Practice Problems)',
  'Question banks',
  'Board-oriented practice',
]

export const parentInteractionSummary =
  "Regular Parent–Teacher Meetings share a student's academic performance, progress, test results and any areas that may need more attention, so that parents stay informed."
