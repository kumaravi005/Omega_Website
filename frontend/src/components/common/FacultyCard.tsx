import { Badge } from '@/components/ui/Badge'
import { Card } from '@/components/ui/Card'
import { ImageFrame } from '@/components/ui/ImageFrame'
import type { FacultyMember } from '@/types/content'

interface FacultyCardProps {
  member: FacultyMember
}

/** One faculty profile. Only renders what data/faculty.ts actually documents. */
export function FacultyCard({ member }: FacultyCardProps) {
  return (
    <Card as="article" flush>
      <ImageFrame image={member.photo} placeholderLabel="Photograph" ratio="1/1" />
      <div className="card__body">
        <h3 className="h4">{member.name}</h3>
        <p className="text-muted">{member.subject}</p>
        {member.designation && <Badge>{member.designation}</Badge>}
      </div>
    </Card>
  )
}
