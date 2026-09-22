import { Card } from './Card'

export interface InfoGridItem {
  id: string
  title: string
  description: string
}

interface InfoGridProps {
  items: InfoGridItem[]
  columns?: 2 | 3
}

/** A responsive grid of title + description cards (academic focus, academic system, assessment types...). */
export function InfoGrid({ items, columns = 3 }: InfoGridProps) {
  return (
    <div className={`grid grid--${columns}`}>
      {items.map((item) => (
        <Card as="article" key={item.id}>
          <h3 className="h4">{item.title}</h3>
          <p className="text-muted">{item.description}</p>
        </Card>
      ))}
    </div>
  )
}
