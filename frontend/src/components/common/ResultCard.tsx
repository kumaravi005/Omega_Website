import { Card } from '@/components/ui/Card'
import { ImageFrame } from '@/components/ui/ImageFrame'
import type { ResultEntry } from '@/types/content'

interface ResultCardProps {
  result: ResultEntry
}

/** One verified student result. Only renders what data/results.ts actually documents. */
export function ResultCard({ result }: ResultCardProps) {
  return (
    <Card as="article" flush>
      <ImageFrame image={result.photo} placeholderLabel="Photograph" ratio="1/1" />
      <div className="card__body">
        <h3 className="h4">{result.studentName}</h3>
        <p className="text-muted">
          {result.exam} · {result.year}
        </p>
        <p>{result.achievement}</p>
      </div>
    </Card>
  )
}
