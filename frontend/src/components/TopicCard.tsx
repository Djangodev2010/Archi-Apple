import { Link } from 'react-router-dom'
import {
  Blocks,
  BookOpen,
  Brain,
  ChevronRight,
  Cloud,
  Code2,
  Compass,
  Database,
  Ellipsis,
  GitBranch,
  Layers,
  Lock,
  Network,
  Server,
  Smartphone,
  UserRound,
  Wrench,
} from 'lucide-react'
import type { Topic, TopicIcon } from '../data/mock'
import { topics } from '../data/mock'

export const topicIcons: Record<TopicIcon, typeof Code2> = {
  code: Code2,
  server: Server,
  layers: Layers,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  'git-branch': GitBranch,
  book: BookOpen,
  compass: Compass,
  brain: Brain,
  smartphone: Smartphone,
  network: Network,
  blocks: Blocks,
  lock: Lock,
  ellipsis: Ellipsis,
  user: UserRound,
}

interface TopicCardProps {
  topic: Topic & { description?: string }
  /**
   * 'full' (Home): "12 sub-topics · 248 resources" meta line.
   * 'resources' (Topic browser): resource count only, plus the topic's
   * one-line description under the icon row.
   */
  meta?: 'full' | 'resources'
  selected?: boolean
  /** When provided, the card selects in place instead of navigating. */
  onSelect?: () => void
}

/** A single topic card — icon tile, name, counts, chevron. Vertically stacked
 * on mobile, compact rows on desktop. Shared by Home and the Topic browser. */
export function TopicCard({ topic, meta = 'full', selected = false, onSelect }: TopicCardProps) {
  const Icon = topicIcons[topic.icon]

  const shell = `group relative flex w-full flex-col rounded-lg border bg-white p-5 text-left transition ${
    selected
      ? 'border-forest shadow-sm ring-1 ring-forest'
      : 'border-surface hover:border-forest/50 hover:shadow-sm'
  }`

  const chevron = (
    <ChevronRight
      className={`absolute right-4 h-4 w-4 transition group-hover:translate-x-0.5 ${
        selected ? 'text-forest' : 'text-muted group-hover:text-forest'
      } ${meta === 'full' ? 'top-5 sm:top-1/2 sm:-translate-y-1/2' : 'top-1/2 -translate-y-1/2'}`}
      aria-hidden="true"
    />
  )

  const countsLine =
    meta === 'full'
      ? `${topic.subTopicCount} sub-topics · ${topic.resourceCount} resources`
      : `${topic.resourceCount} resources`

  if (meta === 'full') {
    const inner = (
      <>
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${topic.tile}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0 flex-1 sm:pr-8">
          <span className="block font-semibold text-headers">{topic.name}</span>
          <span className="mt-1 block text-sm text-muted">{countsLine}</span>
        </span>
        {chevron}
      </>
    )
    return onSelect ? (
      <button type="button" onClick={onSelect} className={`${shell} gap-4 sm:flex-row sm:items-center`}>
        {inner}
      </button>
    ) : (
      <Link to={`/topics/${topic.slug}`} className={`${shell} gap-4 sm:flex-row sm:items-center`}>
        {inner}
      </Link>
    )
  }

  // Browser-card variant: icon + name + count on top, description underneath.
  const inner = (
    <>
      <span className="flex items-center gap-4 sm:pr-10">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${topic.tile}`}
        >
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block font-semibold text-headers">{topic.name}</span>
          <span className="mt-0.5 block text-sm text-muted">{countsLine}</span>
        </span>
      </span>
      {topic.description ? (
        <span className="mt-3 block text-sm leading-relaxed text-muted">{topic.description}</span>
      ) : null}
      {selected ? (
        <span className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-forest/10">
          <ChevronRight className="h-4 w-4 text-forest" aria-hidden="true" />
        </span>
      ) : (
        chevron
      )}
    </>
  )
  return onSelect ? (
    <button type="button" onClick={onSelect} className={shell}>
      {inner}
    </button>
  ) : (
    <Link to={`/topics/${topic.slug}`} className={shell}>
      {inner}
    </Link>
  )
}

/** The shared topics grid — used on Home. */
export function TopicGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <TopicCard key={topic.slug} topic={topic} />
      ))}
    </div>
  )
}

