import { PlaceholderScreen } from './PlaceholderScreen'

/** Add Resource — placeholder until its mockup is approved and built. */
export default function AddResource() {
  return (
    <PlaceholderScreen
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Add Resource' }]}
      title="Add a Resource"
      description="Share a video, article, note or course with the community."
      note="The submission form is built after Home is approved."
    />
  )
}
