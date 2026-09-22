import { SectionPlaceholder } from '@/components/common/SectionPlaceholder'

/** Planned: latest items from data/news.ts linking to /news. */
export function NewsSection() {
  return (
    <SectionPlaceholder
      id="news"
      title="Notices and news"
      plannedContent="Latest notices, announcements and events, driven by the news data."
      tone="muted"
    />
  )
}
