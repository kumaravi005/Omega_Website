import type { CSSProperties } from 'react'
import type { ImageRef } from '@/types/common'
import type { MediaRatio } from '@/types/ui'
import { cn } from '@/utils/cn'

interface ImageFrameProps {
  /** Omit while the real photo is not available; a neutral placeholder is shown. */
  image?: ImageRef
  ratio?: MediaRatio
  /** Load immediately (use only for the first image visible on the page). */
  priority?: boolean
  className?: string
}

/**
 * Fixed-ratio image container. The reserved ratio prevents layout shift, images
 * are lazy-loaded by default, and alt text is mandatory via ImageRef
 * (use alt="" only for purely decorative images).
 */
export function ImageFrame({ image, ratio = '16/9', priority, className }: ImageFrameProps) {
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
        <div className="media__placeholder" aria-hidden="true" />
      )}
    </div>
  )
}
