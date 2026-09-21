import { siteConfig } from '@/config/site'
import { cn } from '@/utils/cn'
import styles from './Logo.module.css'

interface LogoProps {
  /** Light-on-dark colours, for the footer and other dark backgrounds. */
  inverse?: boolean
  className?: string
}

/**
 * PROVISIONAL brand lockup: a simple omega mark drawn in code plus a text
 * wordmark. When the official Omega logo is supplied, replace the contents of
 * this component (and public/favicon.svg) — every place that shows the logo
 * uses this component, so nothing else changes.
 */
export function Logo({ inverse, className }: LogoProps) {
  const descriptor = siteConfig.name.replace(siteConfig.shortName, '').trim()

  return (
    <span className={cn(styles.logo, inverse && styles.inverse, className)}>
      <svg className={styles.mark} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
        <rect className={styles.markBg} width="32" height="32" rx="7" />
        <path
          className={styles.markGlyph}
          d="M7 25H12.5C9 22.7 7.2 19.6 7.2 15.6A8.8 8.8 0 0 1 24.8 15.6C24.8 19.6 23 22.7 19.5 25H25"
        />
      </svg>
      <span className={styles.text}>
        <span className={styles.name}>{siteConfig.shortName}</span>{' '}
        <span className={styles.descriptor}>{descriptor}</span>
      </span>
    </span>
  )
}
