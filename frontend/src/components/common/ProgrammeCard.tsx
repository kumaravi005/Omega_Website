import { Badge } from '@/components/ui/Badge'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { courseRoute } from '@/config/routes'
import type { Programme } from '@/types/content'
import styles from './ProgrammeCard.module.css'

interface ProgrammeCardProps {
  programme: Programme
  /** Document-outline level for the programme name. Match whatever heading precedes the card grid. */
  headingLevel?: 'h2' | 'h3'
}

/** Summary card for one programme. Used on the homepage and the /courses overview. */
export function ProgrammeCard({ programme, headingLevel: Heading = 'h3' }: ProgrammeCardProps) {
  return (
    <Card as="article" interactive>
      <Badge tone="primary" className={styles.classRange}>
        {programme.classRange}
      </Badge>
      <Heading className={Heading === 'h2' ? 'h3' : undefined}>{programme.name}</Heading>
      <p className="text-muted">{programme.shortDescription}</p>
      <CtaGroup>
        <ButtonLink to={courseRoute(programme.slug)} variant="outline">
          Learn more
        </ButtonLink>
      </CtaGroup>
    </Card>
  )
}
