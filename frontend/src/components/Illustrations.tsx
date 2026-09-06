/**
 * Line-style ("field guide") illustrations, drawn as inline SVG so no binary
 * assets are needed and the stroke colors stay tied to the design tokens.
 *
 * The hero illustration lives in `src/assets/illustrations/MountainTrail.tsx`
 * (final approved artwork).
 */

export function MapIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 130"
      fill="none"
      role="img"
      aria-label="Line illustration of a folded map with a dotted trail and a location pin"
      className={className}
    >
      <g stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* folded map */}
        <path d="M28 34 78 22l64 12 50-12v74l-50 12-64-12-50 12Z" fill="#FFFFFF" />
        <path d="M78 22v74M142 34v74" strokeWidth="2" />

        {/* dotted trail */}
        <path
          d="M52 78c14-14 26 8 44-8 12-11 10-20 24-26"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeDasharray="1 8"
        />

        {/* destination pin */}
        <path d="M172 34a10 10 0 0 1 10 10c0 7-10 17-10 17s-10-10-10-17a10 10 0 0 1 10-10Z" fill="#FFFFFF" />
        <circle cx="172" cy="44" r="3.5" />

        {/* small trees */}
        <path d="M40 96l8-18 8 18ZM60 98l6-14 6 14Z" fill="#FFFFFF" strokeWidth="2" />
      </g>
    </svg>
  )
}
