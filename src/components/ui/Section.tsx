import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'
import { Container } from './Container'

interface SectionProps {
  /** Anchor id, e.g. "courses" -> /#courses. Also labels the section for assistive tech. */
  id?: string
  tone?: 'default' | 'muted' | 'dark'
  className?: string
  children: ReactNode
}

/** A full-width page band with standard vertical spacing and a contained inner width. */
export function Section({ id, tone = 'default', className, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn('section', tone !== 'default' && `section--${tone}`, className)}
    >
      <Container>{children}</Container>
    </section>
  )
}
