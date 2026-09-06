/**
 * Mock data for the frontend redesign.
 *
 * Everything here is hardcoded until the Django REST API layer is built.
 * Shapes are deliberately close to what the future endpoints will return
 * so the swap is mostly mechanical.
 */

/* ---------------------------------- Topics --------------------------------- */

export type TopicIcon =
  | 'code'
  | 'server'
  | 'layers'
  | 'database'
  | 'cloud'
  | 'wrench'
  | 'git-branch'
  | 'book'
  | 'compass'

export interface Topic {
  slug: string
  name: string
  blurb: string
  subTopicCount: number
  resourceCount: number
  icon: TopicIcon
  /** Tailwind classes for the small colored icon tile (per the approved mockup) */
  tile: string
}

export const topics: Topic[] = [
  {
    slug: 'frontend-development',
    name: 'Frontend Development',
    blurb: 'HTML, CSS, JavaScript and modern frameworks for building interfaces.',
    subTopicCount: 12,
    resourceCount: 248,
    icon: 'code',
    tile: 'bg-blue-50 text-blue-600',
  },
  {
    slug: 'backend-development',
    name: 'Backend Development',
    blurb: 'APIs, databases and the server-side logic behind applications.',
    subTopicCount: 10,
    resourceCount: 193,
    icon: 'server',
    tile: 'bg-emerald-50 text-emerald-600',
  },
  {
    slug: 'web-frameworks',
    name: 'Web Frameworks',
    blurb: 'Django, React, Vue and friends — pick the right tool for the job.',
    subTopicCount: 9,
    resourceCount: 156,
    icon: 'layers',
    tile: 'bg-violet-50 text-violet-600',
  },
  {
    slug: 'database',
    name: 'Database',
    blurb: 'Relational and non-relational databases, modelling and queries.',
    subTopicCount: 7,
    resourceCount: 121,
    icon: 'database',
    tile: 'bg-orange-50 text-orange-600',
  },
  {
    slug: 'devops-cloud',
    name: 'DevOps & Cloud',
    blurb: 'Deployment, containers, CI/CD and running things in production.',
    subTopicCount: 6,
    resourceCount: 98,
    icon: 'cloud',
    tile: 'bg-sky-50 text-sky-600',
  },
  {
    slug: 'tools-productivity',
    name: 'Tools & Productivity',
    blurb: 'Editors, Git workflows and the small tools that add up.',
    subTopicCount: 5,
    resourceCount: 87,
    icon: 'wrench',
    tile: 'bg-slate-100 text-slate-600',
  },
  {
    slug: 'data-structures-algorithms',
    name: 'Data Structures & Algorithms',
    blurb: 'The fundamentals that make interviews and systems make sense.',
    subTopicCount: 9,
    resourceCount: 142,
    icon: 'git-branch',
    tile: 'bg-pink-50 text-pink-600',
  },
  {
    slug: 'computer-science',
    name: 'Computer Science',
    blurb: 'Theory, operating systems, networks and how computers really work.',
    subTopicCount: 6,
    resourceCount: 104,
    icon: 'book',
    tile: 'bg-indigo-50 text-indigo-600',
  },
  {
    slug: 'career-soft-skills',
    name: 'Career & Soft Skills',
    blurb: 'Resumes, interviews, communication and growing as a developer.',
    subTopicCount: 4,
    resourceCount: 63,
    icon: 'compass',
    tile: 'bg-amber-50 text-amber-600',
  },
]

export function findTopic(slug: string | undefined): Topic | undefined {
  return topics.find((t) => t.slug === slug)
}

/* --------------------------- Recently added resources ---------------------- */

export type ResourceThumbIcon = 'js' | 'react' | 'note' | 'python' | 'postgres'

export interface CommunityResource {
  id: number
  title: string
  kind: 'Video' | 'Article' | 'Note' | 'Resource'
  source: string
  addedDaysAgo: number
  tags: string[]
  upvotes: number
  thumb: ResourceThumbIcon
  /** Tailwind classes for the thumbnail tile */
  tile: string
}

export const recentlyAdded: CommunityResource[] = [
  {
    id: 1,
    title: 'JavaScript Full Course (Beginner to Advanced)',
    kind: 'Video',
    source: 'freeCodeCamp',
    addedDaysAgo: 2,
    tags: ['JavaScript', 'Frontend'],
    upvotes: 124,
    thumb: 'js',
    tile: 'bg-amber-200 text-ink',
  },
  {
    id: 2,
    title: 'React Performance Optimization — Complete Guide',
    kind: 'Article',
    source: 'LogRocket',
    addedDaysAgo: 2,
    tags: ['React', 'Performance'],
    upvotes: 98,
    thumb: 'react',
    tile: 'bg-sky-100 text-sky-600',
  },
  {
    id: 3,
    title: 'System Design Notes (Clean & Structured)',
    kind: 'Note',
    source: 'Community',
    addedDaysAgo: 3,
    tags: ['System Design', 'Architecture'],
    upvotes: 76,
    thumb: 'note',
    tile: 'bg-surface text-ink',
  },
  {
    id: 4,
    title: 'Python for Data Analysis – Cheat Sheet',
    kind: 'Resource',
    source: 'GitHub Gist',
    addedDaysAgo: 4,
    tags: ['Python', 'Data Analysis'],
    upvotes: 62,
    thumb: 'python',
    tile: 'bg-ink text-white',
  },
  {
    id: 5,
    title: 'PostgreSQL: Complete Tutorial',
    kind: 'Video',
    source: 'Fireship',
    addedDaysAgo: 4,
    tags: ['Database', 'Backend'],
    upvotes: 58,
    thumb: 'postgres',
    tile: 'bg-indigo-100 text-indigo-600',
  },
]

export function timeAgo(days: number): string {
  if (days === 1) return '1 day ago'
  return `${days} days ago`
}
