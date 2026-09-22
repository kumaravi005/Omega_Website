import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { ImageFrame } from '@/components/ui/ImageFrame'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { homeHero } from '@/data'
import styles from './HeroSection.module.css'

/**
 * Homepage hero: the page's only H1, a short supporting line, the enquiry and
 * courses calls to action, and a photo area. All copy comes from data/home.ts;
 * the photo area shows a labelled placeholder until homeHero.image is set.
 */
export function HeroSection() {
  const { eyebrow, headline, description, primaryCta, secondaryCta, image, imagePlaceholder } =
    homeHero

  return (
    <Section id="hero" labelledBy="hero-heading" tone="dark" tight>
      <div className={styles.layout}>
        <div className={styles.copy}>
          <SectionHeading
            as="h1"
            headingId="hero-heading"
            eyebrow={eyebrow}
            title={headline}
            description={description}
            className={styles.heading}
          />
          <CtaGroup>
            <ButtonLink to={primaryCta.to} variant="accent" size="lg">
              {primaryCta.label}
            </ButtonLink>
            {secondaryCta && (
              <ButtonLink to={secondaryCta.to} variant="outline" size="lg">
                {secondaryCta.label}
              </ButtonLink>
            )}
          </CtaGroup>
        </div>

        <ImageFrame
          image={image}
          placeholderLabel={imagePlaceholder}
          ratio="4/3"
          className={styles.visual}
          priority
        />
      </div>
    </Section>
  )
}
