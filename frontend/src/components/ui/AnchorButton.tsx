import type { AnchorHTMLAttributes } from 'react'
import type { ButtonSize, ButtonVariant } from '@/types/ui'
import { cn } from '@/utils/cn'

interface AnchorButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

/**
 * A plain `<a>` styled as a button — for `tel:`, `mailto:`, `wa.me` and other
 * non-router links. For in-app routes use <ButtonLink> instead.
 */
export function AnchorButton({ variant = 'primary', size = 'md', className, ...rest }: AnchorButtonProps) {
  return <a className={cn('btn', `btn--${variant}`, `btn--${size}`, className)} {...rest} />
}
