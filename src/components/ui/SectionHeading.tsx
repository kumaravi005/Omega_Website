import { cn } from '@/utils/cn'

interface SectionHeadingProps {
  /** Small coloured label above the title. */
  eyebrow?: string
  title: string
  description?: string
  /** Document-outline level. Pages use one h1; sections use h2. */
  as?: 'h1' | 'h2' | 'h3'
  align?: 'start' | 'center'
  className?: string
}

/** Eyebrow + title + description block that introduces a page or section. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = 'h2',
  align = 'start',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('section-heading', align === 'center' && 'section-heading--center', className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Heading>{title}</Heading>
      {description && <p className="lead section-heading__description">{description}</p>}
    </div>
  )
}
