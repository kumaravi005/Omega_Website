import { Link, type LinkProps } from 'react-router'
import type { ButtonSize, ButtonVariant } from '@/types/ui'
import { cn } from '@/utils/cn'

interface ButtonLinkProps extends LinkProps {
  variant?: ButtonVariant
  size?: ButtonSize
}

/** A router link styled as a button. Styles live in styles/buttons.css. */
export function ButtonLink({
  variant = 'primary',
  size = 'md',
  className,
  ...rest
}: ButtonLinkProps) {
  return (
    <Link
      className={cn('btn', `btn--${variant}`, `btn--${size}`, className)}
      {...rest}
    />
  )
}
