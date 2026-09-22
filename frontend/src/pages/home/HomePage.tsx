import { PageMeta } from '@/components/common/PageMeta'
import {
  ClassroomSection,
  CoursesSection,
  CtaSection,
  FacultySection,
  HeroSection,
  IntroSection,
  NewsSection,
  ResultsSection,
  ScholarshipSection,
  TestimonialsSection,
  WhyOmegaSection,
} from '@/sections/home'

/** Homepage: composes the section components in display order. */
export default function HomePage() {
  return (
    <>
      <PageMeta />
      <HeroSection />
      <IntroSection />
      <CoursesSection />
      <WhyOmegaSection />
      <FacultySection />
      <ResultsSection />
      <TestimonialsSection />
      <ScholarshipSection />
      <ClassroomSection />
      <NewsSection />
      <CtaSection />
    </>
  )
}
