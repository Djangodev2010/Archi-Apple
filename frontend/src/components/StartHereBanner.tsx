import { Link } from 'react-router-dom'
import { ArrowRight, Map } from 'lucide-react'
import { MapIllustration } from './Illustrations'

/** "Not sure where to start?" banner — quiet forest-tinted panel with map illustration. */
export function StartHereBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 sm:px-6" aria-labelledby="start-here">
      <div className="flex flex-col items-start gap-6 rounded-xl border border-forest/25 bg-forest/5 p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-start gap-4">
          <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-forest/10 text-forest sm:flex">
            <Map className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 id="start-here" className="text-xl font-bold tracking-tight text-headers">
              Not sure where to start?
            </h2>
            <p className="mt-1.5 max-w-md text-muted">
              Check out our beginner-friendly learning paths and curated roadmaps.
            </p>
            <Link
              to="/topics"
              className="mt-4 inline-flex items-center gap-1.5 rounded-lg border border-forest px-4 py-2 text-sm font-semibold text-forest transition hover:bg-forest hover:text-white"
            >
              Explore Learning Paths
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <MapIllustration className="h-28 w-auto shrink-0 self-center lg:self-auto" />
      </div>
    </section>
  )
}
