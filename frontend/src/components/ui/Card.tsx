import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CardProps {
  /** Element to render: use "article" for standalone items, "li" inside lists. */
  as?: 'div' | 'article' | 'li'
  /** Highlights the card on hover and keyboard focus. Use when it contains a link. */
  interactive?: boolean
  /** No padding, so an <ImageFrame> can run edge to edge. Add padding to inner text. */
  flush?: boolean
  className?: string
  children: ReactNode
}

/** A bordered surface that groups related content (course, faculty member, notice). */
export function Card({
  as: Tag = 'div',
  interactive,
  flush,
  className,
  children,
}: CardProps) {
  return (
    <Tag
      className={cn(
        'card',
        interactive && 'card--interactive',
        flush && 'card--flush',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
