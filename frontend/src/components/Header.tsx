import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Search, X } from 'lucide-react'
import { Logo } from './Logo'

/**
 * Site header — dark ink bar with logo, search, primary nav and auth action.
 * Collapses to a hamburger menu on small screens (bottom tab bar takes over
 * primary navigation on mobile).
 */
export function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = 'text-sm text-white/85 transition hover:text-forest'

  return (
    <header className="bg-ink text-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="ArchiApple home">
          <Logo variant="light" className="h-8 w-8" />
          <span className="text-lg font-semibold tracking-tight">ArchiApple</span>
        </Link>

        {/* Search — desktop */}
        <div className="relative ml-2 hidden min-w-0 flex-1 md:block lg:max-w-sm">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search topics, resources, or keywords…"
            className="h-9 w-full rounded-md border border-white/15 bg-white/10 pl-9 pr-3 text-sm text-white placeholder:text-white/50 focus:border-forest focus:outline-none"
          />
        </div>

        {/* Primary nav — desktop */}
        <nav className="ml-auto hidden items-center gap-6 md:flex" aria-label="Primary">
          <NavLink to="/topics" className={linkClass}>
            Topics
          </NavLink>
          <NavLink to="/help-wanted" className={linkClass}>
            Community
          </NavLink>
          <a href="#footer" className={linkClass}>
            About
          </a>
          <Link
            to="/profile"
            className="rounded-md border border-white/30 px-3.5 py-1.5 text-sm font-medium transition hover:border-forest hover:text-forest"
          >
            Sign in
          </Link>
        </nav>

        {/* Hamburger — mobile */}
        <button
          type="button"
          className="ml-auto rounded-md p-1.5 hover:bg-white/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
          <div className="relative mb-3">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50"
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search topics, resources, or keywords…"
              className="h-10 w-full rounded-md border border-white/15 bg-white/10 pl-9 pr-3 text-sm text-white placeholder:text-white/50 focus:border-forest focus:outline-none"
            />
          </div>
          <nav className="flex flex-col gap-1" aria-label="Primary mobile">
            <Link to="/topics" className="px-3 py-2 text-sm hover:bg-white/10 rounded-md">
              Topics
            </Link>
            <Link to="/help-wanted" className="px-3 py-2 text-sm hover:bg-white/10 rounded-md">
              Community
            </Link>
            <Link to="/add-resource" className="px-3 py-2 text-sm hover:bg-white/10 rounded-md">
              Add a Resource
            </Link>
            <a href="#footer" className="px-3 py-2 text-sm hover:bg-white/10 rounded-md">
              About
            </a>
            <Link
              to="/profile"
              className="mt-2 rounded-md border border-white/30 px-3 py-2 text-center text-sm font-medium hover:border-forest hover:text-forest"
            >
              Sign in
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
