import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface CtaGroupProps {
  align?: 'start' | 'center'
  className?: string
  /** <Button> / <ButtonLink> elements. Full width and stacked on small screens. */
  children: ReactNode
}

/** A row of call-to-action buttons with consistent spacing. */
export function CtaGroup({ align = 'start', className, children }: CtaGroupProps) {
  return (
    <div className={cn('cta-group', align === 'center' && 'cta-group--center', className)}>
      {children}
    </div>
  )
}
