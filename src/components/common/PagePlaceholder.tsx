import { ROUTES } from '@/config/routes'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Section } from '@/components/ui/Section'
import { PageMeta } from './PageMeta'

interface PagePlaceholderProps {
  title: string
  /** What the finished page is intended to contain. */
  plannedContent: string
}

/**
 * Temporary body for pages that are routed but not built yet.
 * Delete its usage from a page when that page is implemented.
 */
export function PagePlaceholder({ title, plannedContent }: PagePlaceholderProps) {
  return (
    <Section>
      <PageMeta title={title} />
      <p className="eyebrow">Coming soon</p>
      <h1>{title}</h1>
      <p className="lead">{plannedContent}</p>
      <ButtonLink to={ROUTES.home} variant="outline">
        Back to home
      </ButtonLink>
    </Section>
  )
}
