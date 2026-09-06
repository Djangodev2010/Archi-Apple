import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Leaf, Search, ShieldCheck, Users } from 'lucide-react'
import { MountainTrail } from '../assets/illustrations/MountainTrail'


const trustPoints = [
  { icon: ShieldCheck, label: 'Vetted & ranked resources' },
  { icon: Users, label: 'Community contributions' },
  { icon: Leaf, label: 'For beginners & experienced devs' },
]

/** Hero — headline, community search and the trail illustration. */
export function Hero() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    // No API yet — search lands on the placeholder Topics screen.
    navigate(query.trim() ? `/topics?q=${encodeURIComponent(query.trim())}` : '/topics')
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-14 pt-12 sm:px-6 lg:pb-20 lg:pt-16">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.2em] text-muted">
            Your learning trail, together
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-headers sm:text-5xl">
            Better resources.
            <br />
            Smarter learning.
          </h1>
          <p className="mt-5 max-w-lg leading-relaxed text-muted">
            Browse Topics → Sub-Topics → Curated resources (videos, articles, notes) — all in one
            place. Built by a community, for learners.
          </p>

          <form className="mt-7 flex max-w-md gap-2" onSubmit={handleSubmit} role="search">
            <div className="relative flex-1">
              <Search
                className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
                aria-hidden="true"
              />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search for a topic (e.g. React, Python, System Design…)"
                aria-label="Search for a topic"
                className="h-12 w-full rounded-lg border border-surface bg-white pl-10 pr-3 text-sm text-ink placeholder:text-muted/70 focus:border-forest focus:outline-none focus:ring-2 focus:ring-forest/20"
              />
            </div>
            <button
              type="submit"
              className="h-12 shrink-0 rounded-lg bg-forest px-5 text-sm font-semibold text-white transition hover:bg-forest/90 focus:outline-none focus:ring-2 focus:ring-forest/40"
            >
              Search
            </button>
          </form>

          <ul className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            {trustPoints.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm">
                <Icon className="h-5 w-5 text-forest" aria-hidden="true" />
                <span className="font-medium text-headers">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <MountainTrail className="order-last mx-auto w-full max-w-sm lg:order-none lg:max-w-none" />

      </div>
    </section>
  )
}
