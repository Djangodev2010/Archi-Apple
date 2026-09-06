import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface Crumb {
  label: string
  to?: string
}

/** Breadcrumbs — a core part of the "field guide" navigation language. */
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-sm">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted" aria-hidden="true" />}
          {item.to ? (
            <Link
              to={item.to}
              className="text-muted underline-offset-2 hover:text-sky hover:underline"
            >
              {item.label}
            </Link>
          ) : (
            <span className="font-medium text-headers" aria-current="page">
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  )
}
