import { PageMeta } from '@/components/common/PageMeta'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ROUTES } from '@/config/routes'

export default function NotFoundPage() {
  return (
    <Section>
      <PageMeta title="Page not found" />
      <SectionHeading
        as="h1"
        eyebrow="Error 404"
        title="Page not found"
        description="The page you are looking for does not exist or has moved."
      />
      <CtaGroup>
        <ButtonLink to={ROUTES.home}>Go to homepage</ButtonLink>
      </CtaGroup>
    </Section>
  )
}
