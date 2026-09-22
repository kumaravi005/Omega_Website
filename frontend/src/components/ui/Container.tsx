import type { ReactNode } from 'react'
import type { ContainerSize } from '@/types/ui'
import { cn } from '@/utils/cn'

interface ContainerProps {
  /** default 1200px, narrow 800px (forms / reading), wide 1400px (full-bleed bands). */
  size?: ContainerSize
  className?: string
  children: ReactNode
}

/** Centres content and applies the standard max-width and side gutters. */
export function Container({ size = 'default', className, children }: ContainerProps) {
  return (
    <div className={cn('container', size !== 'default' && `container--${size}`, className)}>
      {children}
    </div>
  )
}
