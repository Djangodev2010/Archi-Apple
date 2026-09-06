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
  | 'brain'
  | 'smartphone'
  | 'network'
  | 'blocks'
  | 'lock'
  | 'ellipsis'
  | 'user'

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

/**
 * Topic renames across approved mockups. The Home mockup called the biggest
 * web topic "Frontend Development" (12 sub-topics · 248 resources); the
 * topic-browser mockup shows the same topic as "Web Development". The alias
 * keeps old links working and the data consistent across screens.
 */
const topicAliases: Record<string, string> = {
  'frontend-development': 'web-development',
}

export function findTopic(slug: string | undefined): Topic | undefined {
  if (!slug) return undefined
  const aliased = topicAliases[slug] ?? slug
  return browseTopics.find((t) => t.slug === aliased) ?? topics.find((t) => t.slug === slug)
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

/* ------------------------------ Topic browser ------------------------------ */
/*
 * Catalog for the "Explore Learning Topics" screen. Names and counts stay
 * consistent with the Home page data above wherever the two mockups overlap
 * (DevOps & Cloud 98, Tools & Productivity 87, Career & Soft Skills 63,
 * Web Development 248 = Home's "Frontend Development"). Database uses Home's
 * 121 resources rather than the browser mockup's 87 for the same reason.
 */

export type BrowseCategory =
  | 'development'
  | 'computer-science'
  | 'tools-productivity'
  | 'career-skills'
  | 'other'

export type SubTopicIcon =
  | 'html'
  | 'js'
  | 'react'
  | 'next'
  | 'node'
  | 'box'
  | 'test'
  | 'gauge'

export interface DrillResource {
  id: number
  title: string
  source: string
  kind: 'Video' | 'Article' | 'Notes'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  upvotes: number
  officialPick?: boolean
  thumb: 'play' | 'doc' | 'note'
  tile: string
}

export interface SubTopic {
  slug: string
  name: string
  resourceCount: number
  icon: SubTopicIcon
  tile: string
  description: string
  children?: SubTopic[]
  resources?: DrillResource[]
  /** Totals from the mockup pills — the full per-kind sets arrive with the API */
  kindCounts?: { video: number; article: number; notes: number }
}

export interface BrowseTopic extends Topic {
  category: BrowseCategory
  description: string
  subTopics?: SubTopic[]
}

const reactResources: DrillResource[] = [
  {
    id: 101,
    title: 'React Crash Course (2024)',
    source: 'YouTube · freeCodeCamp',
    kind: 'Video',
    level: 'Beginner',
    upvotes: 642,
    officialPick: true,
    thumb: 'play',
    tile: 'bg-sky-100 text-sky-600',
  },
  {
    id: 102,
    title: 'React Documentation',
    source: 'react.dev',
    kind: 'Article',
    level: 'Intermediate',
    upvotes: 621,
    thumb: 'doc',
    tile: 'bg-violet-100 text-violet-600',
  },
  {
    id: 103,
    title: 'React Cheat Sheet',
    source: 'GitHub · community',
    kind: 'Notes',
    level: 'Beginner',
    upvotes: 412,
    thumb: 'note',
    tile: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 104,
    title: 'React in 100 Seconds',
    source: 'YouTube · Fireship',
    kind: 'Video',
    level: 'Beginner',
    upvotes: 398,
    thumb: 'play',
    tile: 'bg-sky-100 text-sky-600',
  },
  {
    id: 105,
    title: 'Building a Real App with React',
    source: 'Medium · @devblog',
    kind: 'Article',
    level: 'Advanced',
    upvotes: 298,
    thumb: 'doc',
    tile: 'bg-violet-100 text-violet-600',
  },
]

const stateManagementResources: DrillResource[] = [
  {
    id: 201,
    title: 'Redux Toolkit Crash Course',
    source: 'YouTube · Net Ninja',
    kind: 'Video',
    level: 'Intermediate',
    upvotes: 533,
    officialPick: true,
    thumb: 'play',
    tile: 'bg-sky-100 text-sky-600',
  },
  {
    id: 202,
    title: 'Context API vs Redux (When to Use What)',
    source: 'Blog · dev.to',
    kind: 'Article',
    level: 'Intermediate',
    upvotes: 421,
    thumb: 'doc',
    tile: 'bg-violet-100 text-violet-600',
  },
  {
    id: 203,
    title: 'Zustand vs Redux',
    source: 'YouTube · The Net Ninja',
    kind: 'Video',
    level: 'Advanced',
    upvotes: 387,
    thumb: 'play',
    tile: 'bg-sky-100 text-sky-600',
  },
  {
    id: 204,
    title: 'React Query + Zustand Example',
    source: 'GitHub · community',
    kind: 'Notes',
    level: 'Advanced',
    upvotes: 198,
    thumb: 'note',
    tile: 'bg-emerald-100 text-emerald-600',
  },
  {
    id: 205,
    title: 'State Management Patterns in React',
    source: 'Medium · @pateldev',
    kind: 'Article',
    level: 'Intermediate',
    upvotes: 154,
    thumb: 'doc',
    tile: 'bg-violet-100 text-violet-600',
  },
]

const stateManagement: SubTopic = {
  slug: 'state-management',
  name: 'State Management',
  resourceCount: 16,
  icon: 'box',
  tile: 'bg-violet-100 text-violet-600',
  description: 'Manage state in React using modern libraries and patterns.',
  kindCounts: { video: 7, article: 5, notes: 4 },
  resources: stateManagementResources,
}

const reactSubTopic: SubTopic = {
  slug: 'react',
  name: 'React',
  resourceCount: 42,
  icon: 'react',
  tile: 'bg-sky-100 text-sky-600',
  description: 'Learn React from basics to advanced patterns and ecosystem.',
  kindCounts: { video: 18, article: 15, notes: 9 },
  resources: reactResources,
  children: [
    stateManagement,
    {
      slug: 'hooks',
      name: 'Hooks',
      resourceCount: 14,
      icon: 'box',
      tile: 'bg-blue-50 text-blue-600',
      description: 'useState, useEffect, and writing your own custom hooks.',
    },
    {
      slug: 'performance',
      name: 'Performance',
      resourceCount: 12,
      icon: 'gauge',
      tile: 'bg-pink-50 text-pink-600',
      description: 'Memoization, code-splitting, and profiling React apps.',
    },
  ],
}

export const browseTopics: BrowseTopic[] = [
  {
    slug: 'web-development',
    name: 'Web Development',
    blurb: 'Frontend, backend, full-stack, and modern web technologies.',
    description: 'Frontend, backend, full-stack, and modern web technologies.',
    subTopicCount: 12,
    resourceCount: 248,
    icon: 'code',
    tile: 'bg-blue-50 text-blue-600',
    category: 'development',
    subTopics: [
      {
        slug: 'html-css',
        name: 'HTML & CSS',
        resourceCount: 32,
        icon: 'html',
        tile: 'bg-orange-50 text-orange-600',
        description: 'Structure and style the web with semantic HTML and modern CSS.',
      },
      {
        slug: 'javascript',
        name: 'JavaScript',
        resourceCount: 48,
        icon: 'js',
        tile: 'bg-amber-200 text-ink',
        description: 'The language of the web — fundamentals, the DOM, and modern features.',
      },
      reactSubTopic,
      {
        slug: 'nextjs',
        name: 'Next.js',
        resourceCount: 28,
        icon: 'next',
        tile: 'bg-ink text-white',
        description: 'Full-stack React framework with routing and rendering built in.',
      },
      {
        slug: 'nodejs',
        name: 'Node.js',
        resourceCount: 19,
        icon: 'node',
        tile: 'bg-emerald-50 text-emerald-600',
        description: 'JavaScript on the server — APIs, tooling, and CLIs.',
      },
      stateManagement,
      {
        slug: 'testing',
        name: 'Testing',
        resourceCount: 12,
        icon: 'test',
        tile: 'bg-teal-50 text-teal-600',
        description: 'Ship reliable code with unit, integration, and E2E tests.',
      },
      // Five more sub-topics (Routing, Forms, Styling, APIs, Deployment) arrive with the API.
    ],
  },
  {
    slug: 'programming-languages',
    name: 'Programming Languages',
    blurb: 'Learn and master popular programming languages.',
    description: 'Learn and master popular programming languages.',
    subTopicCount: 8,
    resourceCount: 192,
    icon: 'code',
    tile: 'bg-violet-50 text-violet-600',
    category: 'development',
  },
  {
    slug: 'data-science-ml',
    name: 'Data Science & Machine Learning',
    blurb: 'Data analysis, ML, and AI concepts and tools.',
    description: 'Data analysis, ML, and AI concepts and tools.',
    subTopicCount: 7,
    resourceCount: 156,
    icon: 'brain',
    tile: 'bg-teal-50 text-teal-600',
    category: 'computer-science',
  },
  {
    slug: 'mobile-development',
    name: 'Mobile Development',
    blurb: 'Build apps for iOS and Android platforms.',
    description: 'Build apps for iOS and Android platforms.',
    subTopicCount: 6,
    resourceCount: 124,
    icon: 'smartphone',
    tile: 'bg-orange-50 text-orange-600',
    category: 'development',
  },
  {
    slug: 'devops-cloud',
    name: 'DevOps & Cloud',
    blurb: 'CI/CD, containers, and cloud platforms.',
    description: 'CI/CD, containers, and cloud platforms.',
    subTopicCount: 6,
    resourceCount: 98,
    icon: 'cloud',
    tile: 'bg-sky-50 text-sky-600',
    category: 'development',
  },
  {
    slug: 'database',
    name: 'Database',
    blurb: 'SQL, NoSQL, and database design.',
    description: 'SQL, NoSQL, and database design.',
    subTopicCount: 7,
    resourceCount: 121,
    icon: 'database',
    tile: 'bg-violet-50 text-violet-600',
    category: 'development',
  },
  {
    slug: 'computer-networks',
    name: 'Computer Networks',
    blurb: 'Networking fundamentals and protocols.',
    description: 'Networking fundamentals and protocols.',
    subTopicCount: 5,
    resourceCount: 64,
    icon: 'network',
    tile: 'bg-pink-50 text-pink-600',
    category: 'computer-science',
  },
  {
    slug: 'system-design',
    name: 'System Design',
    blurb: 'Scalable systems and architecture.',
    description: 'Scalable systems and architecture.',
    subTopicCount: 5,
    resourceCount: 56,
    icon: 'blocks',
    tile: 'bg-emerald-50 text-emerald-600',
    category: 'computer-science',
  },
  {
    slug: 'tools-productivity',
    name: 'Tools & Productivity',
    blurb: 'Essential tools to boost your workflow.',
    description: 'Essential tools to boost your workflow.',
    subTopicCount: 5,
    resourceCount: 87,
    icon: 'wrench',
    tile: 'bg-amber-50 text-amber-600',
    category: 'tools-productivity',
  },
  {
    slug: 'career-soft-skills',
    name: 'Career & Soft Skills',
    blurb: 'Resume, interviews, and career growth.',
    description: 'Resume, interviews, and career growth.',
    subTopicCount: 4,
    resourceCount: 63,
    icon: 'user',
    tile: 'bg-pink-50 text-pink-600',
    category: 'career-skills',
  },
  {
    slug: 'security',
    name: 'Security',
    blurb: 'Web, application, and system security.',
    description: 'Web, application, and system security.',
    subTopicCount: 4,
    resourceCount: 37,
    icon: 'lock',
    tile: 'bg-slate-100 text-slate-700',
    category: 'development',
  },
  {
    slug: 'others',
    name: 'Others',
    blurb: 'Miscellaneous topics and niche areas.',
    description: 'Miscellaneous topics and niche areas.',
    subTopicCount: 3,
    resourceCount: 21,
    icon: 'ellipsis',
    tile: 'bg-slate-100 text-muted',
    category: 'other',
  },
]
