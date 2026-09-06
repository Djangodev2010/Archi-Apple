import { PlaceholderScreen } from './PlaceholderScreen'

/** Help Wanted — placeholder until its mockup is approved and built. */
export default function HelpWanted() {
  return (
    <PlaceholderScreen
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Help Wanted' }]}
      title="Help Wanted"
      description="Ways the community needs help right now: reviews, new sub-topics, curation."
      note="This screen is built after Home is approved."
    />
  )
}
