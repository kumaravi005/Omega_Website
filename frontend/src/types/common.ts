/** Shared primitive types used across content models and UI. */

/** An image reference. `src` is a resolved asset URL (see src/assets/README.md). */
export interface ImageRef {
  src: string
  /** Required for accessibility. Use an empty string only for purely decorative images. */
  alt: string
}

/** ISO 8601 date string, e.g. "2026-04-30". */
export type IsoDate = string

export interface NavItem {
  label: string
  to: string
}

export interface NavGroup {
  title: string
  items: NavItem[]
}
