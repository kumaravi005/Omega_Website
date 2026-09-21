import { useParams } from 'react-router'
import { PagePlaceholder } from '@/components/common/PagePlaceholder'
import { getCourse } from '@/data'
import NotFoundPage from '@/pages/not-found/NotFoundPage'

/**
 * One page component serves every /courses/:courseSlug route
 * (foundation, jee, neet). A slug that is not in data/courses.ts shows the 404 page.
 */
export default function CourseDetailPage() {
  const { courseSlug = '' } = useParams()
  const course = getCourse(courseSlug)

  if (!course) return <NotFoundPage />

  return (
    <PagePlaceholder
      title={course.title}
      plannedContent="Course details: who it is for, syllabus coverage, batch structure, schedule and how to enrol."
    />
  )
}
