import { EmptyState } from '@/components/common/EmptyState'
import { FacultyCard } from '@/components/common/FacultyCard'
import { PageMeta } from '@/components/common/PageMeta'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROUTES } from '@/config/routes'
import { faculty } from '@/data'

/** Faculty profiles, organised by subject, once the institute documents them in data/faculty.ts. */
export default function FacultyPage() {
  return (
    <Section labelledBy="faculty-heading">
      <PageMeta
        title="Faculty"
        description="Faculty profiles at Omega Education Centre, organised by subject."
      />
      <SectionHeading
        as="h1"
        headingId="faculty-heading"
        eyebrow="Our faculty"
        title="Faculty"
        description="Profiles of the teaching faculty, organised by subject."
      />
      {faculty.length > 0 ? (
        <div className="grid grid--3">
          {faculty.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <EmptyState
          imageLabel="Faculty photographs will appear here once available"
          message="Profiles of our teaching faculty will be published here, organised by subject, once confirmed."
          cta={{ label: 'Contact us', to: ROUTES.contact }}
        />
      )}
    </Section>
  )
}
