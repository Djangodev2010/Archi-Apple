import { TopicGrid } from '../components/TopicCard'
import { PlaceholderScreen } from './PlaceholderScreen'

/** Topics browser — placeholder until its mockup is approved and built. */
export default function Topics() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <PlaceholderScreen
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Topics' }]}
          title="Topics"
          description="The full topic browser with search and filters will live here."
          note="This screen is built after Home is approved."
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <TopicGrid />
      </div>
    </>
  )
}
