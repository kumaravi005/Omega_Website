import { EmptyState } from '@/components/common/EmptyState'
import { PageMeta } from '@/components/common/PageMeta'
import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { news } from '@/data'

const categoryLabel = { notice: 'Notice', news: 'News', event: 'Event' } as const

/** Notices, news and events, newest and pinned first, once documented in data/news.ts. */
export default function NewsPage() {
  const ordered = [...news].sort((a, b) => {
    if (Boolean(a.pinned) !== Boolean(b.pinned)) return a.pinned ? -1 : 1
    return b.date.localeCompare(a.date)
  })

  return (
    <Section labelledBy="news-heading">
      <PageMeta title="News" description="Notices, announcements and events from Omega Education Centre." />
      <SectionHeading
        as="h1"
        headingId="news-heading"
        eyebrow="News and notices"
        title="News"
        description="Notices, announcements and events from the institute."
      />
      {ordered.length > 0 ? (
        <ul className="stack">
          {ordered.map((item) => (
            <Card as="li" key={item.id}>
              <div className="cluster">
                <Badge tone={item.pinned ? 'accent' : 'neutral'}>{categoryLabel[item.category]}</Badge>
                <span className="text-small text-muted">{item.date}</span>
              </div>
              <h3 className="h4">{item.title}</h3>
              <p className="text-muted">{item.summary}</p>
            </Card>
          ))}
        </ul>
      ) : (
        <EmptyState
          imageLabel="Notices will appear here once published"
          message="Notices, announcements and events will be published here as they happen."
        />
      )}
    </Section>
  )
}
