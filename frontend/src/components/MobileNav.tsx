import { NavLink } from 'react-router-dom'
import { Home, LayoutGrid, UserRound, Users } from 'lucide-react'

const items = [
  { label: 'Home', to: '/', icon: Home, end: true },
  { label: 'Topics', to: '/topics', icon: LayoutGrid, end: false },
  { label: 'Community', to: '/help-wanted', icon: Users, end: false },
  { label: 'Profile', to: '/profile', icon: UserRound, end: false },
]

/** Bottom tab bar — primary navigation on small screens (per the approved mobile mockup). */
export function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-surface bg-white md:hidden"
      aria-label="Mobile"
    >
      <div className="mx-auto grid max-w-md grid-cols-4">
        {items.map(({ label, to, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex flex-col items-center gap-0.5 py-2.5 text-xs font-medium transition ${
                isActive ? 'text-forest' : 'text-muted hover:text-headers'
              }`
            }
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
