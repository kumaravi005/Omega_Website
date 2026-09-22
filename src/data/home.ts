import { ROUTES } from '@/config/routes'
import type { HomeHero, HomeIntro } from '@/types/content'
import { formatList } from '@/utils/text'
import { courses } from './courses'

/*
 * Homepage copy. Only statements that are confirmed for Omega are used here:
 *  - it is a purely offline (in-person) coaching institute; no online classes
 *  - it has Foundation, JEE and NEET course pages (from data/courses.ts)
 * Do not add claims about tests, doubt sessions, results, faculty, batch sizes
 * or facilities until the institute confirms them.
 */

const courseNames = formatList(courses.map((course) => course.title))

export const homeHero: HomeHero = {
  eyebrow: 'Omega Education Centre',
  headline: `Offline classroom coaching for ${courseNames}`,
  description:
    'At Omega, students learn in person, in the classroom, face to face with their teachers.',
  // Enquiry has no form yet: /admission is a placeholder page for now.
  primaryCta: { label: 'Enquire Now', to: ROUTES.admission },
  secondaryCta: { label: 'Explore Courses', to: ROUTES.courses },
  // To use the real photo: import it from '@/assets/hero/...' and set
  //   image: { src: heroPhoto, alt: 'Describe what the photo actually shows' }
  imagePlaceholder: 'Classroom photograph to be added',
}

export const homeIntro: HomeIntro = {
  eyebrow: 'About Omega Education Centre',
  title: 'Coaching in the classroom, in person',
  paragraphs: [
    'Omega Education Centre is an offline coaching institute. Every class takes place at the centre, with the teacher and the students in the same room.',
    'There are no online classes at Omega. Students attend in person and learn directly from their teachers.',
  ],
  points: [
    {
      id: 'in-person',
      title: 'In-person classes',
      description: 'All teaching takes place at the centre, in the classroom.',
    },
    {
      id: 'face-to-face',
      title: 'Face to face with teachers',
      description: 'Questions can be asked and answered in the classroom, as they come up.',
    },
    {
      id: 'programmes',
      title: courseNames,
      description: 'The programmes Omega offers. See the Courses page for details.',
    },
  ],
  cta: { label: 'About Omega', to: ROUTES.about },
}
