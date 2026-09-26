import { ButtonLink } from '@/components/ui/ButtonLink'
import { CtaGroup } from '@/components/ui/CtaGroup'
import { ImageFrame } from '@/components/ui/ImageFrame'
import type { NavItem } from '@/types/common'

interface EmptyStateProps {
  /** Caption on the placeholder visual, e.g. "Result photographs will appear here". */
  imageLabel: string
  /** What will be published here, and when — no invented facts or dates. */
  message: string
  cta?: NavItem
}

/**
 * Honest "not published yet" body for a content page whose data file is still
 * empty (Results, Faculty, Scholarship, News). Reuses the same image-frame
 * placeholder pattern as the hero and programme pages, so an unfinished page
 * still looks considered rather than abandoned.
 */
export function EmptyState({ imageLabel, message, cta }: EmptyStateProps) {
  return (
    <div className="split">
      <ImageFrame placeholderLabel={imageLabel} ratio="4/3" />
      <div>
        <p className="lead">{message}</p>
        {cta && (
          <CtaGroup>
            <ButtonLink to={cta.to} variant="outline">
              {cta.label}
            </ButtonLink>
          </CtaGroup>
        )}
      </div>
    </div>
  )
}
