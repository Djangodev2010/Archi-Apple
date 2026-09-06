import { Link } from 'react-router-dom'
import {
  BookOpen,
  ChevronRight,
  Cloud,
  Code2,
  Compass,
  Database,
  GitBranch,
  Layers,
  Server,
  Wrench,
} from 'lucide-react'
import type { Topic, TopicIcon } from '../data/mock'
import { topics } from '../data/mock'

const icons: Record<TopicIcon, typeof Code2> = {
  code: Code2,
  server: Server,
  layers: Layers,
  database: Database,
  cloud: Cloud,
  wrench: Wrench,
  'git-branch': GitBranch,
  book: BookOpen,
  compass: Compass,
}

/** A single topic card — icon tile, name, counts, chevron. Vertically stacked on
 * mobile (per the mobile mockup) and compact rows on desktop. */
export function TopicCard({ topic }: { topic: Topic }) {
  const Icon = icons[topic.icon]
  return (
    <Link
      to={`/topics/${topic.slug}`}
      className="group relative flex flex-col gap-4 rounded-lg border border-surface bg-white p-5 transition hover:border-forest/50 hover:shadow-sm sm:flex-row sm:items-center sm:gap-4 sm:pr-12"
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg ${topic.tile}`}
      >
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block font-semibold text-headers">{topic.name}</span>
        <span className="mt-1 block text-sm text-muted">
          {topic.subTopicCount} sub-topics · {topic.resourceCount} resources
        </span>
      </span>
      <ChevronRight
        className="absolute right-4 top-5 h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:text-forest sm:top-1/2 sm:-translate-y-1/2"
        aria-hidden="true"
      />
    </Link>
  )
}

/** The shared topics grid — used on Home and on the Topics browser. */
export function TopicGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {topics.map((topic) => (
        <TopicCard key={topic.slug} topic={topic} />
      ))}
    </div>
  )
}
