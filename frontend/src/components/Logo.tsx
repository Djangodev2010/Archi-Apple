/**
 * ArchiApple logo — line-style apple with a mountain trail inside.
 * Matches the approved mark: outline apple, leaf, forest-colored mountain path.
 */
export function Logo({
  className = 'h-9 w-9',
  variant = 'dark',
}: {
  className?: string
  variant?: 'dark' | 'light'
}) {
  const ink = variant === 'dark' ? '#0F172A' : '#FFFFFF'
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
      {/* apple body */}
      <path
        d="M24 13c-3-3.5-9-3.5-12 1-3.5 5.5-1.5 14 3.5 19 2.5 2.6 5 3.6 8.5 3.6s6-1 8.5-3.6c5-5 7-13.5 3.5-19-3-4.5-9-4.5-12-1Z"
        stroke={ink}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* leaf */}
      <path
        d="M24 12c-.5-4.5 2.5-8 7.5-8.5-.2 4.5-3 7.8-7.5 8.5Z"
        stroke={ink}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      {/* mountain trail */}
      <path
        d="M14 30l7-9 5 6 4-5 6 8"
        stroke="#10B981"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
