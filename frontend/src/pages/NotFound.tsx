import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6">
      <p className="text-sm font-semibold tracking-[0.2em] text-muted">404</p>
      <h1 className="mt-3 text-3xl font-bold tracking-tight text-headers">
        This trail doesn’t exist yet.
      </h1>
      <p className="mt-3 text-muted">
        The page you were looking for isn’t on the map. Head back and pick a new path.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-lg bg-forest px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-forest/90"
      >
        Back to Home
      </Link>
    </div>
  )
}
