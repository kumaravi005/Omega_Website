import type { CSSProperties } from 'react'
import { omegaGlyphPath } from '@/config/brand'
import type { ImageRef } from '@/types/common'
import type { MediaRatio } from '@/types/ui'
import { cn } from '@/utils/cn'

interface ImageFrameProps {
  /** Omit while the real photo is not available; a labelled placeholder is shown. */
  image?: ImageRef
  /** Caption on the placeholder, so it is never mistaken for a real photograph. */
  placeholderLabel?: string
  ratio?: MediaRatio
  /** Load immediately (use only for the first image visible on the page). */
  priority?: boolean
  className?: string
}

/**
 * Fixed-ratio image container. The reserved ratio prevents layout shift, images
 * are lazy-loaded by default, and alt text is mandatory via ImageRef
 * (use alt="" only for purely decorative images).
 *
 * Without an image it renders a neutral, brand-marked placeholder that is hidden
 * from assistive technology. Supplying `image` later needs no layout changes.
 */
export function ImageFrame({
  image,
  placeholderLabel,
  ratio = '16/9',
  priority,
  className,
}: ImageFrameProps) {
  const style = { '--media-ratio': ratio.replace('/', ' / ') } as CSSProperties

  return (
    <div className={cn('media', className)} style={style}>
      {image ? (
        <img
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
        />
      ) : (
        <div className="media__placeholder" aria-hidden="true">
          <svg className="media__glyph" viewBox="0 0 32 32" focusable="false">
            <path d={omegaGlyphPath} />
          </svg>
          {placeholderLabel && <span className="media__label">{placeholderLabel}</span>}
        </div>
      )}
    </div>
  )
}
