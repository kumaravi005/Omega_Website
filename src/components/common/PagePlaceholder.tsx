import { Breadcrumb, type BreadcrumbItem } from '@/components/ui/Breadcrumb'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROUTES } from '@/config/routes'
import { PageMeta } from './PageMeta'

interface PagePlaceholderProps {
  title: string
  /** What the finished page is intended to contain. */
  plannedContent: string
  /** Trail for nested pages (e.g. Home / Courses / JEE). */
  breadcrumbs?: BreadcrumbItem[]
}

/**
 * Temporary body for pages that are routed but not built yet.
 * Delete its usage from a page when that page is implemented.
 */
export function PagePlaceholder({ title, plannedContent, breadcrumbs }: PagePlaceholderProps) {
  return (
    <Section>
      <PageMeta title={title} />
      {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
      <SectionHeading as="h1" eyebrow="Coming soon" title={title} description={plannedContent} />
      <CtaGroup>
        <ButtonLink to={ROUTES.home} variant="outline">
          Back to home
        </ButtonLink>
      </CtaGroup>
    </Section>
  )
}
