import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import type { NavItem } from '@/types/common'

interface SectionPlaceholderProps {
  id: string
  title: string
  /** What the finished section is intended to contain. */
  plannedContent: string
  tone?: 'default' | 'muted'
  /** Link to the page where this content will live once ready. */
  cta?: NavItem
}

/**
 * Temporary body for homepage sections that are planned but not built yet.
 * Replace the usage inside a section component when it is implemented.
 */
export function SectionPlaceholder({ id, title, plannedContent, tone, cta }: SectionPlaceholderProps) {
  return (
    <Section id={id} tone={tone} labelledBy={`${id}-heading`}>
      <SectionHeading headingId={`${id}-heading`} eyebrow="Coming soon" title={title} description={plannedContent} />
      {cta && (
        <CtaGroup>
          <ButtonLink to={cta.to} variant="outline">
            {cta.label}
          </ButtonLink>
        </CtaGroup>
      )}
    </Section>
  )
}
