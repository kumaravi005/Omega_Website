import type { ReactNode } from 'react'
import type { ContainerSize, SectionTone } from '@/types/ui'
import { cn } from '@/utils/cn'
import { Container } from './Container'

interface SectionProps {
  /** Anchor id, e.g. "courses" -> /#courses. */
  id?: string
  /** Background: default (white), muted (light grey) or dark (deep blue, light text). */
  tone?: SectionTone
  /** Less vertical padding, for compact bands such as banners or CTAs. */
  tight?: boolean
  width?: ContainerSize
  className?: string
  children: ReactNode
}

/** A full-width page band with standard vertical spacing and a contained inner width. */
export function Section({
  id,
  tone = 'default',
  tight,
  width,
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'section',
        tight && 'section--tight',
        tone !== 'default' && `section--${tone}`,
        tone === 'dark' && 'on-dark',
        className,
      )}
    >
      <Container size={width}>{children}</Container>
    </section>
  )
}
