import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { TopicGrid } from './TopicCard'

/** "Browse Topics" section on the Home screen. */
export function TopicsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6" aria-labelledby="browse-topics">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h2 id="browse-topics" className="text-2xl font-bold tracking-tight text-headers sm:text-3xl">
            Browse Topics
          </h2>
          <p className="mt-2 text-muted">
            Explore by topic, drill down into sub-topics, and find the best learning resources.
          </p>
        </div>
        <Link
          to="/topics"
          className="hidden shrink-0 items-center gap-1 text-sm font-medium text-sky hover:underline sm:inline-flex"
        >
          View all topics
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8">
        <TopicGrid />
      </div>

      <Link to="/topics" className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-sky sm:hidden">
        View all topics
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </section>
  )
}
