import { Section } from '@/components/ui/Section'

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
export function SectionPlaceholder({
  id,
  title,
  plannedContent,
  tone,
}: SectionPlaceholderProps) {
  return (
    <Section id={id} tone={tone}>
      <div className="section__header">
        <p className="eyebrow">Planned section</p>
        <h2>{title}</h2>
        <p className="lead">{plannedContent}</p>
      </div>
    </Section>
  )
}
