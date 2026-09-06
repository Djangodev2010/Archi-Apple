import { Hero } from '../components/Hero'
import { TopicsSection } from '../components/TopicsSection'
import { StartHereBanner } from '../components/StartHereBanner'
import { RecentlyAdded } from '../components/RecentlyAdded'

/** Home — the approved mockup, screen one. */
export default function Home() {
  return (
    <>
      <Hero />
      <div className="border-t border-surface bg-surface/20">
        <TopicsSection />
        <StartHereBanner />
      </div>
      <div className="border-t border-surface">
        <RecentlyAdded />
      </div>
    </>
  )
}
