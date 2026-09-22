import { ButtonLink } from '@/components/ui/ButtonLink'
import { Card } from '@/components/ui/Card'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { ImageFrame } from '@/components/ui/ImageFrame'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { homeIntro } from '@/data'
import styles from './IntroSection.module.css'

/**
 * Homepage introduction: a short "About Omega" preview with a few supporting
 * points and a link to the full About page. Copy comes from data/home.ts.
 * If homeIntro.image is set, the photo appears above the points.
 */
export function IntroSection() {
  const { eyebrow, title, paragraphs, points, cta, image } = homeIntro

  return (
    <Section id="about" labelledBy="about-heading" tone="muted">
      <div className="split">
        <div>
          <SectionHeading headingId="about-heading" eyebrow={eyebrow} title={title} />
          <div className="stack measure">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {cta && (
            <CtaGroup>
              <ButtonLink to={cta.to} variant="outline">
                {cta.label}
              </ButtonLink>
            </CtaGroup>
          )}
        </div>

        <div className="stack">
          {image && <ImageFrame image={image} ratio="4/3" />}
          <ul className={`${styles.points} stack`}>
            {points.map((point) => (
              <Card as="li" key={point.id}>
                <h3 className="h4">{point.title}</h3>
                <p className="text-muted">{point.description}</p>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
