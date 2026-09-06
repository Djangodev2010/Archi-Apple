import { useParams } from 'react-router-dom'
import { PlaceholderScreen } from './PlaceholderScreen'

/** Contributor Profile — placeholder until its mockup is approved and built. */
export default function Profile() {
  const { username } = useParams()

  return (
    <PlaceholderScreen
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Contributor Profile' }]}
      title={username ? `@${username}` : 'Contributor Profile'}
      description="Contributions, upvotes earned and resources curated by this learner."
      note="This screen is built after Home is approved."
    />
  )
}
