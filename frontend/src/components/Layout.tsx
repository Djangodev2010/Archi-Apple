import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { MobileNav } from './MobileNav'

/** Shared page shell: header on top, footer at the bottom, mobile tab bar fixed. */
export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      {/* Spacer so the fixed mobile tab bar never covers footer content */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      <MobileNav />
    </div>
  )
}

