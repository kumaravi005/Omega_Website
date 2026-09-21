import type { ReactNode } from 'react'
import type { BadgeTone } from '@/types/ui'
import { cn } from '@/utils/cn'

interface BadgeProps {
  tone?: BadgeTone
  className?: string
  children: ReactNode
}

/** A small pill for categories and statuses (e.g. "Notice", "New batch"). */
export function Badge({ tone = 'neutral', className, children }: BadgeProps) {
  return (
    <span className={cn('badge', tone !== 'neutral' && `badge--${tone}`, className)}>
      {children}
    </span>
  )
}
