import { Breadcrumbs, type Crumb } from '../components/Breadcrumbs'

interface PlaceholderScreenProps {
  crumbs?: Crumb[]
  title: string
  description: string
  note: string
}

/**
 * Shared scaffold for screens that come after Home in the review queue.
 * Keeps token usage, spacing rhythm and breadcrumbs consistent while we
 * build the real screens one mockup at a time.
 */
export function PlaceholderScreen({ crumbs, title, description, note }: PlaceholderScreenProps) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {crumbs && (
        <div className="mb-4">
          <Breadcrumbs items={crumbs} />
        </div>
      )}
      <h1 className="text-3xl font-bold tracking-tight text-headers">{title}</h1>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
      <div className="mt-8 rounded-lg border border-dashed border-muted/40 bg-surface/40 p-8 text-center">
        <p className="font-semibold text-headers">Coming next</p>
        <p className="mt-1 text-sm text-muted">{note}</p>
      </div>
    </div>
  )
}
