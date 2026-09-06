import { useParams } from 'react-router-dom'
import { findTopic } from '../data/mock'
import { PlaceholderScreen } from './PlaceholderScreen'


/**
 * Topic → Sub-Topic → Resources drill-down.
 * Matches /topics/:topicSlug and /topics/:topicSlug/:subTopicSlug.
 * Placeholder until its mockup is approved — breadcrumbs already follow the
 * approved hierarchy.
 */
export default function TopicPath() {
  const { topicSlug, subTopicSlug } = useParams()
  const topic = findTopic(topicSlug)

  const crumbs = [
    { label: 'Home', to: '/' },
    { label: 'Topics', to: '/topics' },
    { label: topic?.name ?? topicSlug ?? 'Topic', to: subTopicSlug ? `/topics/${topicSlug}` : undefined },
    ...(subTopicSlug
      ? [{ label: subTopicSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) }]
      : []),
  ]

  const title = subTopicSlug
    ? 'Resources'
    : topic?.name ?? 'Topic'

  return (
    <PlaceholderScreen
      crumbs={crumbs}
      title={title}
      description={
        subTopicSlug
          ? `Curated resources for “${subTopicSlug.replace(/-/g, ' ')}” will be listed here.`
          : `Sub-topics and resources for ${topic?.name ?? 'this topic'} will live here.`
      }
      note="This screen is built after Home is approved."
    />
  )
}
