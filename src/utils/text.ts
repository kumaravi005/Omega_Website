/** Joins words as natural prose: ["A"] -> "A", ["A", "B", "C"] -> "A, B and C". */
export function formatList(items: string[]): string {
  if (items.length <= 1) return items.join('')
  return `${items.slice(0, -1).join(', ')} and ${items[items.length - 1]}`
}
