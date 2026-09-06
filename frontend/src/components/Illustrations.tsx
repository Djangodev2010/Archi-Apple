/**
 * Line-style ("field guide") illustrations, drawn as inline SVG so no binary
 * assets are needed and the stroke colors stay tied to the design tokens.
 */

export function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 340"
      fill="none"
      role="img"
      aria-label="Line illustration of a winding trail through mountains toward a summit flag"
      className={className}
    >
      <g stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* sun */}
        <circle cx="398" cy="62" r="17" />
        <path d="M398 34v-8M426 62h8M398 90v-4" strokeWidth="2" />

        {/* back mountain with snow cap and summit flag */}
        <path d="M128 300 280 66l152 234Z" fill="#FFFFFF" />
        <path d="M254 106 280 66l26 40-12-8-14 12-14-12Z" fill="#FFFFFF" strokeWidth="2" />
        <path d="M280 66V44" />
        <path d="M280 44l16 6-16 6" fill="#10B981" stroke="#10B981" strokeWidth="2" />

        {/* mid ridge */}
        <path d="M18 300l140-152 122 152Z" fill="#FFFFFF" />

        {/* ground line */}
        <path d="M0 300h480" />

        {/* dotted learning trail */}
        <path
          d="M56 300c46-20 62-32 92-52 34-23 24-40 46-58 20-16 30-22 44-38 8-9 12-16 18-26"
          stroke="#10B981"
          strokeWidth="2.5"
          strokeDasharray="1 10"
        />

        {/* hiker with backpack on the back mountain slope */}
        <circle cx="352" cy="128" r="8" />
        <path d="M352 136v20" />
        <path d="M352 142l-11 8M352 142l12 6" />
        <path d="M352 156l-9 21M352 156l10 21" />
        <path d="M342 138h-9v14h9" />

        {/* pine trees */}
        <path d="M330 300l14-34 14 34Z" fill="#FFFFFF" />
        <path d="M334 282l10-24 10 24Z" fill="#FFFFFF" strokeWidth="2" />
        <path d="M344 300v-8" />
        <path d="M392 300l11-26 11 26Z" fill="#FFFFFF" />
        <path d="M403 300v-6" />
        <path d="M430 300l9-20 9 20Z" fill="#FFFFFF" />
        <path d="M439 300v-5" />
      </g>
    </svg>
  )
}

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
