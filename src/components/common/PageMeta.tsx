import { siteConfig } from '@/config/site'

interface PageMetaProps {
  /** Page title. The site name is appended automatically. Omit on the homepage. */
  title?: string
  description?: string
}

/**
 * Sets the document title and description. React 19 hoists <title> and <meta>
 * into <head>, so no extra library is needed.
 */
export function PageMeta({ title, description = siteConfig.description }: PageMetaProps) {
  return (
    <>
      <title>{title ? `${title} | ${siteConfig.name}` : siteConfig.name}</title>
      <meta name="description" content={description} />
    </>
  )
}
