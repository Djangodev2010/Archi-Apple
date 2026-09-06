import { useMemo, useState } from 'react'
import { BookOpen, Code2, LayoutGrid, UserRound, Wrench } from 'lucide-react'
import { Breadcrumbs } from '../components/Breadcrumbs'
import { MountainTrail } from '../assets/illustrations/MountainTrail'
import { TopicCard } from '../components/TopicCard'
import { DrillDownSection } from '../components/topic-browser/DrillDownSection'
import { browseTopics } from '../data/mock'

const filters = [
  { key: 'all', label: 'All Topics', icon: LayoutGrid },
  { key: 'development', label: 'Development', icon: Code2 },
  { key: 'computer-science', label: 'Computer Science', icon: BookOpen },
  { key: 'tools-productivity', label: 'Tools & Productivity', icon: Wrench },
  { key: 'career-skills', label: 'Career & Skills', icon: UserRound },
] as const

type FilterKey = (typeof filters)[number]['key']

/** Topic browser — the approved mockup, screen two. */
export default function Topics() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [topicSlug, setTopicSlug] = useState('web-development')

  const visible = useMemo(
    () => (filter === 'all' ? browseTopics : browseTopics.filter((t) => t.category === filter)),
    [filter],
  )
  const totalResources = visible.reduce((sum, t) => sum + t.resourceCount, 0)
  const activeLabel = filters.find((f) => f.key === filter)!.label

  return (
    <>
      {/* Header band: breadcrumb, title, artwork, filter pills */}
      <div className="border-b border-surface bg-surface/30">
        <div className="mx-auto max-w-6xl px-4 pb-8 pt-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Home', to: '/' }, { label: 'Topics' }]} />
          <div className="mt-4 flex items-end justify-between gap-10">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-headers sm:text-4xl">
                Explore Learning Topics
              </h1>
              <p className="mt-2 max-w-md leading-relaxed text-muted">
                Browse through curated topics, dive into sub-topics, and find the best
                community-vetted resources — all in one place.
              </p>
            </div>
            <div className="relative hidden shrink-0 lg:block" aria-hidden="true">
              <span className="absolute -top-9 right-3 -rotate-3 text-sm italic text-muted">
                Better resources. Stronger developers.
              </span>
              <MountainTrail className="h-32 w-auto" />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label="Filter topics">
            {filters.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                aria-pressed={filter === key}
                className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${
                  filter === key
                    ? 'bg-forest text-white shadow-sm'
                    : 'border border-surface bg-white text-ink hover:border-muted/50'
                }`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Topic grid */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6" aria-labelledby="all-topics-title">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 id="all-topics-title" className="text-2xl font-bold tracking-tight text-headers">
            {activeLabel}
          </h2>
          <p className="text-sm text-muted">
            {visible.length} topics · {totalResources.toLocaleString()} resources
          </p>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((topic) => (
            <TopicCard
              key={topic.slug}
              topic={topic}
              meta="resources"
              selected={topic.slug === topicSlug}
              onSelect={() => setTopicSlug(topic.slug)}
            />
          ))}
        </div>
      </section>

      {/* Drill-down interaction states */}
      <div className="border-t border-surface bg-surface/20">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <DrillDownSection key={topicSlug} topicSlug={topicSlug} onSelectTopic={setTopicSlug} />
        </div>
      </div>
    </>
  )
}

