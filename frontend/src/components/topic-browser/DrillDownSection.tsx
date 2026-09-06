import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  BadgeCheck,
  Bell,
  Box,
  ChevronRight,
  ChevronsUpDown,
  FileCode2,
  FileText,
  Filter,
  Gauge,
  Hexagon,
  Play,
  Search,
  ShieldCheck,
  StickyNote,
  ThumbsUp,
  Zap,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Logo } from '../Logo'
import { MountainTrail } from '../../assets/illustrations/MountainTrail'
import { topicIcons } from '../TopicCard'
import type { DrillResource, SubTopic } from '../../data/mock'
import { browseTopics } from '../../data/mock'

type KindFilter = 'all' | 'Video' | 'Article' | 'Notes'

const subTopicVisuals: Record<SubTopic['icon'], { icon?: LucideIcon; letters?: string }> = {
  html: { icon: FileCode2 },
  js: { letters: 'JS' },
  react: { icon: Atom },
  next: { letters: 'N' },
  node: { icon: Hexagon },
  box: { icon: Box },
  test: { icon: ShieldCheck },
  gauge: { icon: Gauge },
}

const resourceThumbs: Record<DrillResource['thumb'], LucideIcon> = {
  play: Play,
  doc: FileText,
  note: StickyNote,
}

const kindPillClass: Record<DrillResource['kind'], string> = {
  Video: 'bg-sky-100 text-sky-700',
  Article: 'bg-violet-100 text-violet-700',
  Notes: 'bg-emerald-100 text-emerald-700',
}

function SubTopicThumb({ sub }: { sub: SubTopic }) {
  const visual = subTopicVisuals[sub.icon]
  const Icon = visual.icon
  return (
    <span
      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-[11px] font-bold ${sub.tile}`}
      aria-hidden="true"
    >
      {Icon ? <Icon className="h-4 w-4" /> : visual.letters}
    </span>
  )
}

/** Small dark browser chrome so each panel reads as an app state snapshot. */
function MiniBrowser({ children }: { children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-surface bg-white shadow-sm">
      <div className="flex items-center gap-2 bg-ink px-3 py-2">
        <Logo variant="light" className="h-4 w-4" />
        <span className="text-[11px] font-semibold text-white">ArchiApple</span>
        <div className="ml-2 flex h-5 min-w-0 flex-1 items-center gap-1.5 rounded-full bg-white/10 px-2">
          <Search className="h-2.5 w-2.5 shrink-0 text-white/50" aria-hidden="true" />
        </div>
        <Bell className="h-3.5 w-3.5 shrink-0 text-white/70" aria-hidden="true" />
        <span className="h-4 w-4 shrink-0 rounded-full bg-sky-300" aria-hidden="true" />
      </div>
      <div className="p-3">{children}</div>
    </div>
  )
}

function PanelCrumb({ items }: { items: string[] }) {
  return (
    <nav aria-label="Panel breadcrumb" className="flex flex-wrap items-center gap-1 text-[11px]">
      {items.map((item, index) => (
        <span key={`${item}-${index}`} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="h-2.5 w-2.5 text-muted" aria-hidden="true" />}
          {index === items.length - 1 ? (
            <span className="font-semibold text-headers">{item}</span>
          ) : (
            <span className="text-muted">{item}</span>
          )}
        </span>
      ))}
    </nav>
  )
}

function TopicHero({
  tile,
  icon,
  name,
  count,
  description,
}: {
  tile: string
  icon: React.ReactNode
  name: string
  count: number
  description: string
}) {
  return (
    <div className="relative mt-2 overflow-hidden rounded-lg border border-surface bg-white p-3">
      <MountainTrail className="pointer-events-none absolute -right-8 -top-8 h-24 w-auto opacity-50" />
      <div className="relative flex items-start gap-3">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${tile}`}>
          {icon}
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <p className="text-sm font-bold text-headers">{name}</p>
            <span className="rounded-full bg-forest/10 px-2 py-0.5 text-[11px] font-semibold text-forest">
              {count} resources
            </span>
          </div>
          <p className="mt-1 text-xs leading-relaxed text-muted">{description}</p>
        </div>
      </div>
    </div>
  )
}

function BackLink({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sky hover:underline"
    >
      <ArrowLeft className="h-3 w-3" aria-hidden="true" />
      Back to {label}
    </button>
  )
}

function KindPills({
  sub,
  value,
  onChange,
}: {
  sub: SubTopic
  value: KindFilter
  onChange: (kind: KindFilter) => void
}) {
  const options: { key: KindFilter; label: string; count: number }[] = [
    { key: 'all', label: 'All', count: sub.resourceCount },
    { key: 'Video', label: 'Videos', count: sub.kindCounts?.video ?? 0 },
    { key: 'Article', label: 'Articles', count: sub.kindCounts?.article ?? 0 },
    { key: 'Notes', label: 'Notes', count: sub.kindCounts?.notes ?? 0 },
  ]
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {options.map((option) => (
        <button
          key={option.key}
          type="button"
          onClick={() => onChange(option.key)}
          aria-pressed={value === option.key}
          className={`rounded-full px-2.5 py-1 text-[11px] font-medium transition ${
            value === option.key
              ? 'bg-ink text-white'
              : 'border border-surface text-muted hover:border-muted/60 hover:text-headers'
          }`}
        >
          {option.label} ({option.count})
        </button>
      ))}
    </div>
  )
}

function SortButton() {
  return (
    <span className="hidden shrink-0 items-center gap-1 rounded-full border border-surface px-2.5 py-1 text-[11px] font-medium text-muted sm:inline-flex">
      Most Helpful
      <ChevronsUpDown className="h-3 w-3" aria-hidden="true" />
    </span>
  )
}

function ResourceRow({ resource }: { resource: DrillResource }) {
  const Thumb = resourceThumbs[resource.thumb]
  return (
    <li className="flex items-start gap-2.5 px-1 py-2.5">
      <span
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-md ${resource.tile}`}
        aria-hidden="true"
      >
        <Thumb className="h-4 w-4" />
      </span>
      <div className="min-w-0 flex-1">
        {resource.officialPick && (
          <span className="mb-0.5 inline-flex items-center gap-1 rounded-full bg-forest/10 px-1.5 py-px text-[10px] font-semibold text-forest">
            <BadgeCheck className="h-2.5 w-2.5" aria-hidden="true" />
            Official Pick
          </span>
        )}
        <p className="truncate text-xs font-semibold text-headers">{resource.title}</p>
        <p className="truncate text-[11px] text-muted">{resource.source}</p>
        <div className="mt-1 flex flex-wrap gap-1">
          <span
            className={`rounded-full px-1.5 py-px text-[10px] font-medium ${kindPillClass[resource.kind]}`}
          >
            {resource.kind}
          </span>
          <span className="rounded-full bg-surface/70 px-1.5 py-px text-[10px] text-muted">
            {resource.level}
          </span>
        </div>
      </div>
      <span className="flex shrink-0 items-center gap-1 pt-0.5 text-[11px] font-medium text-muted">
        <ThumbsUp className="h-3 w-3" aria-hidden="true" />
        {resource.upvotes}
      </span>
    </li>
  )
}

function ResourceList({ items }: { items: DrillResource[] }) {
  if (items.length === 0) {
    return (
      <p className="py-6 text-center text-[11px] text-muted">
        No mock resources for this filter yet — the full set arrives with the API.
      </p>
    )
  }
  return (
    <ul className="mt-1 divide-y divide-surface/70">
      {items.map((resource) => (
        <ResourceRow key={resource.id} resource={resource} />
      ))}
    </ul>
  )
}

function PanelPlaceholder({ message }: { message: string }) {
  return (
    <div className="mt-2 rounded-lg border border-dashed border-muted/40 bg-surface/40 p-6 text-center text-xs text-muted">
      {message}
    </div>
  )
}

function PanelHeading({
  step,
  title,
  description,
}: {
  step: string
  title: string
  description: string
}) {
  return (
    <div className="mb-4">
      <h3 className="text-base font-bold tracking-tight text-headers sm:text-lg">
        {step}. {title}
      </h3>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </div>
  )
}

function filterKind(items: DrillResource[] | undefined, kind: KindFilter): DrillResource[] {
  if (!items) return []
  if (kind === 'all') return items
  return items.filter((resource) => resource.kind === kind)
}

interface DrillDownSectionProps {
  topicSlug: string
  onSelectTopic: (slug: string) => void
}

/**
 * The three linked drill-down panels from the approved mockup:
 * 1. Topic selected (Web Development) → sub-topic list
 * 2. Sub-topic selected (React) → resources
 * 3. Nested sub-topic selected (State Management) → resources
 *
 * Selections update the panels in place — the React equivalent of the
 * HTMX-style partial updates the real integration will use.
 */
export function DrillDownSection({ topicSlug, onSelectTopic }: DrillDownSectionProps) {
  const [subSlug, setSubSlug] = useState<string | null>('react')
  const [childSlug, setChildSlug] = useState<string | null>('state-management')
  const [kind2, setKind2] = useState<KindFilter>('all')
  const [kind3, setKind3] = useState<KindFilter>('all')

  const topic = browseTopics.find((t) => t.slug === topicSlug)
  const sub = topic?.subTopics && subSlug ? topic.subTopics.find((s) => s.slug === subSlug) : undefined
  const child =
    sub?.children && childSlug ? sub.children.find((c) => c.slug === childSlug) : undefined

  function selectSub(next: SubTopic) {
    setSubSlug(next.slug)
    setChildSlug(next.children?.[0]?.slug ?? null)
    setKind2('all')
    setKind3('all')
  }

  const TopicGlyph = topic ? topicIcons[topic.icon] : null

  return (
    <div>
      <div className="flex flex-col gap-10 xl:flex-row xl:items-start xl:gap-5">
        {/* Panel 1 — Topic selected */}
        <div className="min-w-0 flex-1">
          <PanelHeading
            step="1"
            title={`Topic → ${topic?.name ?? '—'}`}
            description="User selects a topic. Sub-topics load instantly (partial update)."
          />
          <MiniBrowser>
            {topic ? (
              <>
                <PanelCrumb items={['Home', 'Topics', topic.name]} />
                <TopicHero
                  tile={topic.tile}
                  icon={TopicGlyph ? <TopicGlyph className="h-5 w-5" /> : null}
                  name={topic.name}
                  count={topic.resourceCount}
                  description={topic.description}
                />
                <BackLink label="Topics" onClick={() => onSelectTopic(topic.slug)} />
                <div className="mt-4 flex items-center justify-between gap-2">
                  <div>
                    <h4 className="text-sm font-bold text-headers">Sub-Topics</h4>
                    <p className="text-[11px] text-muted">{topic.subTopicCount} sub-topics</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full border border-surface px-2.5 py-1 text-[11px] font-medium text-muted">
                    <Filter className="h-3 w-3" aria-hidden="true" />
                    Filter
                  </span>
                </div>
                {topic.subTopics?.length ? (
                  <ul className="mt-2 divide-y divide-surface/70 rounded-lg border border-surface">
                    {topic.subTopics.map((s) => (
                      <li key={s.slug}>
                        <button
                          type="button"
                          onClick={() => selectSub(s)}
                          aria-pressed={s.slug === sub?.slug}
                          className={`flex w-full items-center gap-2.5 rounded-md px-2 py-2.5 text-left transition ${
                            s.slug === sub?.slug ? 'bg-forest/5' : 'hover:bg-surface/40'
                          }`}
                        >
                          <SubTopicThumb sub={s} />
                          <span className="min-w-0 flex-1">
                            <span
                              className={`block truncate text-xs font-semibold ${
                                s.slug === sub?.slug ? 'text-forest' : 'text-headers'
                              }`}
                            >
                              {s.name}
                            </span>
                            <span className="block text-[11px] text-muted">
                              {s.resourceCount} resources
                            </span>
                          </span>
                          <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted" aria-hidden="true" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <PanelPlaceholder message="Sub-topics for this topic arrive with the API — Web Development shows the full drill-down demo." />
                )}
              </>
            ) : (
              <PanelPlaceholder message="Select a topic above to start the drill-down." />
            )}
          </MiniBrowser>
        </div>

        <div
          className="hidden h-8 w-8 shrink-0 self-center items-center justify-center rounded-full bg-forest/10 text-forest xl:flex"
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4" />
        </div>

        {/* Panel 2 — Sub-topic selected */}
        <div className="min-w-0 flex-1">
          <PanelHeading
            step="2"
            title={`Sub-Topic → ${sub?.name ?? '—'}`}
            description={`User selects “${sub?.name ?? 'a sub-topic'}”. Resources load instantly.`}
          />
          <MiniBrowser>
            {topic && sub ? (
              <>
                <PanelCrumb items={['Home', 'Topics', topic.name, sub.name]} />
                <TopicHero
                  tile={sub.tile}
                  icon={<SubTopicThumb sub={sub} />}
                  name={sub.name}
                  count={sub.resourceCount}
                  description={sub.description}
                />
                <BackLink
                  label={topic.name}
                  onClick={() => {
                    setSubSlug(null)
                    setChildSlug(null)
                    setKind2('all')
                  }}
                />
                <div className="mt-3 flex items-center justify-between gap-2">
                  <KindPills sub={sub} value={kind2} onChange={setKind2} />
                  <SortButton />
                </div>
                {sub.children && sub.children.length > 0 && (
                  <div className="mt-2 flex flex-wrap items-center gap-1.5">
                    <span className="text-[11px] font-medium text-muted">Drill deeper:</span>
                    {sub.children.map((c) => (
                      <button
                        key={c.slug}
                        type="button"
                        onClick={() => {
                          setChildSlug(c.slug)
                          setKind3('all')
                        }}
                        aria-pressed={c.slug === child?.slug}
                        className={`rounded-full px-2 py-0.5 text-[11px] font-medium transition ${
                          c.slug === child?.slug
                            ? 'bg-forest/10 text-forest ring-1 ring-forest/40'
                            : 'border border-surface text-muted hover:border-forest/40 hover:text-forest'
                        }`}
                      >
                        {c.name} ({c.resourceCount})
                      </button>
                    ))}
                  </div>
                )}
                <ResourceList items={filterKind(sub.resources, kind2)} />
              </>
            ) : (
              <PanelPlaceholder message="Select a sub-topic in the first panel to load its resources here." />
            )}
          </MiniBrowser>
        </div>

        <div
          className="hidden h-8 w-8 shrink-0 self-center items-center justify-center rounded-full bg-forest/10 text-forest xl:flex"
          aria-hidden="true"
        >
          <ArrowRight className="h-4 w-4" />
        </div>

        {/* Panel 3 — Nested sub-topic selected */}
        <div className="min-w-0 flex-1">
          <PanelHeading
            step="3"
            title={`Sub-Topic → ${child?.name ?? '—'}`}
            description={`User selects “${child?.name ?? 'a nested sub-topic'}”. Resources update again (partial update).`}
          />
          <MiniBrowser>
            {topic && sub && child ? (
              <>
                <PanelCrumb items={['Home', 'Topics', topic.name, sub.name, child.name]} />
                <TopicHero
                  tile={child.tile}
                  icon={<SubTopicThumb sub={child} />}
                  name={child.name}
                  count={child.resourceCount}
                  description={child.description}
                />
                <BackLink
                  label={sub.name}
                  onClick={() => {
                    setChildSlug(null)
                    setKind3('all')
                  }}
                />
                <div className="mt-3 flex items-center justify-between gap-2">
                  <KindPills sub={child} value={kind3} onChange={setKind3} />
                  <SortButton />
                </div>
                <ResourceList items={filterKind(child.resources, kind3)} />
              </>
            ) : (
              <PanelPlaceholder message="Pick a nested sub-topic (“Drill deeper” in the middle panel) to see third-level resources." />
            )}
          </MiniBrowser>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-1.5 text-center">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-headers">
          <Zap className="h-4 w-4 text-forest" aria-hidden="true" />
          HTMX-style partial updates
        </p>
        <p className="max-w-md text-sm text-muted">
          Each selection updates only the relevant content area — no full page reload, just a
          smoother, faster experience.
        </p>
      </div>
    </div>
  )
}
