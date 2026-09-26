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
      <PageMeta description="Omega Education Centre is an offline classroom coaching institute for Classes 5 to 12 — Pre-Foundation (Classes 5–10) and Foundation (Classes 11–12), in the CBSE, BSEB and NCERT curriculum." />
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
