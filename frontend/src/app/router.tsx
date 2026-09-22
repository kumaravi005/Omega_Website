import { createBrowserRouter } from 'react-router'
import { RootLayout } from '@/layouts/RootLayout'
import AboutPage from '@/pages/about/AboutPage'
import AdmissionPage from '@/pages/admission/AdmissionPage'
import ContactPage from '@/pages/contact/ContactPage'
import CourseDetailPage from '@/pages/courses/CourseDetailPage'
import CoursesPage from '@/pages/courses/CoursesPage'
import FacultyPage from '@/pages/faculty/FacultyPage'
import HomePage from '@/pages/home/HomePage'
import NewsPage from '@/pages/news/NewsPage'
import NotFoundPage from '@/pages/not-found/NotFoundPage'
import ResultsPage from '@/pages/results/ResultsPage'
import ScholarshipPage from '@/pages/scholarship/ScholarshipPage'

/**
 * The site's route table. Paths are relative to the root layout; the full
 * public URLs are listed in src/config/routes.ts. To add a page: create it
 * under src/pages, add a path constant, then add one entry here.
 */
export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'courses', Component: CoursesPage },
      // Serves /courses/foundation, /courses/jee and /courses/neet
      { path: 'courses/:courseSlug', Component: CourseDetailPage },
      { path: 'results', Component: ResultsPage },
      { path: 'faculty', Component: FacultyPage },
      { path: 'scholarship', Component: ScholarshipPage },
      { path: 'admission', Component: AdmissionPage },
      { path: 'news', Component: NewsPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: NotFoundPage },
    ],
  },
])
