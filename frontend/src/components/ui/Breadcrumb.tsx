import { Link } from 'react-router'

export interface BreadcrumbItem {
  label: string
  /** Omit on the last item: it represents the current page. */
  to?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

/** Trail of ancestor pages, ending with the current page. Use on nested pages (e.g. course details). */
export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isCurrent = index === items.length - 1
          return (
            <li key={item.label}>
              {isCurrent || !item.to ? (
                <span aria-current={isCurrent ? 'page' : undefined}>{item.label}</span>
              ) : (
                <Link to={item.to}>{item.label}</Link>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
