/** Joins class names, skipping falsy values: cn('btn', isActive && 'btn--active'). */
export function cn(...parts: (string | false | null | undefined)[]): string {
  return parts.filter(Boolean).join(' ')
}
