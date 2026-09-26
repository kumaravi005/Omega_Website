import { SectionPlaceholder } from '@/components/common/SectionPlaceholder'
import { InfoGrid } from '@/components/ui/InfoGrid'
import { Section } from '@/components/ui/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { features } from '@/data'

/** Homepage "Why choose Omega": confirmed strengths, from data/features.ts. */
export function WhyOmegaSection() {
  if (features.length === 0) {
    return (
      <SectionPlaceholder
        id="why-omega"
        title="Why choose Omega"
        plannedContent="Confirmed strengths of the institute, driven by the features data."
        tone="muted"
      />
    )
  }

  return (
    <Section id="why-omega" tone="muted" labelledBy="why-omega-heading">
      <SectionHeading
        headingId="why-omega-heading"
        eyebrow="Why choose Omega"
        title="What sets Omega apart"
      />
      <InfoGrid items={features} columns={3} />
    </Section>
  )
}
