import { Link } from 'react-router-dom'
import { Logo } from './Logo'

const columns = [
  {
    heading: 'Explore',
    links: [
      { label: 'Topics', to: '/topics' },
      { label: 'Help Wanted', to: '/help-wanted' },
      { label: 'Recently Added', to: '/' },
    ],
  },
  {
    heading: 'Contribute',
    links: [
      { label: 'Add a Resource', to: '/add-resource' },
      { label: 'Contributor Profiles', to: '/profile' },
      { label: 'Learning Paths', to: '/topics' },
    ],
  },
]

/** Calm, text-first footer. Column headings are regular case — no ALL-CAPS labels. */
export function Footer() {
  return (
    <footer id="footer" className="border-t border-surface bg-surface/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              <Logo className="h-8 w-8" />
              <span className="text-lg font-semibold tracking-tight text-headers">ArchiApple</span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              A community-driven learning-resource hub for developers and CS students.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.heading}>
                <h3 className="text-sm font-semibold text-headers">{column.heading}</h3>
                <ul className="mt-3 space-y-2 text-sm">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link to={link.to} className="text-muted transition hover:text-sky">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="text-sm font-semibold text-headers">Project</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com/Djangodev2010/Archi-Apple"
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition hover:text-sky"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-surface pt-6 text-sm text-muted">
          © 2026 ArchiApple · Learn · Share · Build
        </div>
      </div>
    </footer>
  )
}
