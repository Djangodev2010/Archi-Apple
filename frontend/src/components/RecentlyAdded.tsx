import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUp, Atom, Database, FileText } from 'lucide-react'
import type { CommunityResource, ResourceThumbIcon } from '../data/mock'
import { recentlyAdded, timeAgo } from '../data/mock'

const thumbIcons: Record<ResourceThumbIcon, { letters?: string; icon?: typeof Atom }> = {
  js: { letters: 'JS' },
  react: { icon: Atom },
  note: { icon: FileText },
  python: { letters: 'Py' },
  postgres: { icon: Database },
}

function ResourceThumb({ resource }: { resource: CommunityResource }) {
  const thumb = thumbIcons[resource.thumb]
  const Icon = thumb.icon
  return (
    <span
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md text-xs font-bold ${resource.tile}`}
      aria-hidden="true"
    >
      {Icon ? <Icon className="h-5 w-5" /> : thumb.letters}
    </span>
  )
}

function ResourceRow({ resource }: { resource: CommunityResource }) {
  return (
    <li className="flex items-center gap-4 px-4 py-4 sm:px-5">
      <ResourceThumb resource={resource} />
      <div className="min-w-0 flex-1">
        <p className="truncate font-medium text-headers">{resource.title}</p>
        <p className="mt-0.5 text-sm text-muted">
          {resource.kind} · {resource.source} · {timeAgo(resource.addedDaysAgo)}
        </p>
      </div>
      <div className="hidden shrink-0 items-center gap-1.5 md:flex">
        {resource.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-surface px-2.5 py-0.5 text-xs text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex w-12 shrink-0 flex-col items-center text-sm font-medium text-muted">
        <span className="flex items-center gap-0.5 text-headers">
          <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          {resource.upvotes}
        </span>
      </div>
    </li>
  )
}

/** "Recently Added by the Community" list — fresh resources shared by learners. */
export function RecentlyAdded() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-labelledby="recently-added">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 id="recently-added" className="text-2xl font-bold tracking-tight text-headers sm:text-3xl">
            Recently Added by the Community
          </h2>
          <p className="mt-2 text-muted">Fresh resources, shared by learners like you.</p>
        </div>
        <Link
          to="/topics"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-sky hover:underline sm:inline-flex"
        >
          View all
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <ul className="mt-8 divide-y divide-surface rounded-lg border border-surface bg-white">
        {recentlyAdded.map((resource) => (
          <ResourceRow key={resource.id} resource={resource} />
        ))}
      </ul>

      <Link to="/topics" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sky sm:hidden">
        View all
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
