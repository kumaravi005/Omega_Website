import { PageMeta } from '@/components/common/PageMeta'
import { ButtonLink } from '@/components/ui/ButtonLink'
import { Section } from '@/components/ui/Section'
import { ROUTES } from '@/config/routes'

export default function NotFoundPage() {
  return (
    <Section>
      <PageMeta title="Page not found" />
      <p className="eyebrow">Error 404</p>
      <h1>Page not found</h1>
      <p className="lead">The page you are looking for does not exist or has moved.</p>
      <ButtonLink to={ROUTES.home}>Go to homepage</ButtonLink>
    </Section>
  )
}
