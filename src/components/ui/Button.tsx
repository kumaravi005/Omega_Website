import type { ButtonHTMLAttributes } from 'react'
import type { ButtonSize, ButtonVariant } from '@/types/ui'
import { cn } from '@/utils/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}

/** For actions. For navigation, use <ButtonLink>. Styles live in styles/buttons.css. */
export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn('btn', `btn--${variant}`, `btn--${size}`, className)}
      {...rest}
    />
  )
}
