import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'

interface SectionPlaceholderProps {
  id: string
  title: string
  /** What the finished section is intended to contain. */
  plannedContent: string
  tone?: 'default' | 'muted'
}

/**
 * Temporary body for homepage sections that are planned but not built yet.
 * Replace the usage inside a section component when it is implemented.
 */
export function SectionPlaceholder({ id, title, plannedContent, tone }: SectionPlaceholderProps) {
  return (
    <Section id={id} tone={tone}>
      <SectionHeading eyebrow="Planned section" title={title} description={plannedContent} />
    </Section>
  )
}
