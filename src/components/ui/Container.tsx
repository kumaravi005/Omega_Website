import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
  /** Reading / form width (800px) instead of the default page width (1200px). */
  narrow?: boolean
  className?: string
  children: ReactNode
}

/** Centres content and applies the standard max-width and side gutters. */
export function Container({ narrow, className, children }: ContainerProps) {
  return (
    <div className={cn('container', narrow && 'container--narrow', className)}>
      {children}
    </div>
  )
}
