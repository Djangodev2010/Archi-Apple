/**
 * MountainTrail — approved hero artwork (line-style mountain range, winding
 * trail, pines and hiker).
 *
 * The drawing is kept exactly as supplied: identical paths, colors, group
 * structure and stroke values. Only JSX attribute casing is adapted
 * (strokeWidth / strokeLinecap / strokeLinejoin), which React renders back to
 * the DOM as stroke-width / stroke-linecap / stroke-linejoin — identical SVG
 * output. `className` is passed through for responsive sizing.
 */
export function MountainTrail({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 600"
      fill="none"
      className={className}
      role="img"
      aria-label="Line illustration of a winding trail through mountains, past pine trees and a hiker"
    >
      <g stroke="#0F172A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M30 500L155 355L225 425L350 245L470 395L555 315L770 500" />
        <path d="M155 355L188 395L225 425L350 245L385 310L420 355" />
        <path d="M350 245L385 310L410 275L470 395" />
        <path d="M555 315L595 360L630 330L770 500" />
        <path d="M60 500L155 410L205 455L270 375L350 500" />
        <path d="M430 500L555 370L610 430L675 365L770 500" />
        <path d="M275 500C315 455 350 430 390 405C425 382 460 360 500 345" />
        <path d="M500 345C530 325 555 302 580 275" />
        <path d="M225 425L250 410L270 425" />
        <path d="M350 245L335 275L350 268L365 280" />
        <path d="M555 315L540 340L557 333L574 346" />
      </g>
      <g stroke="#0F172A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M105 500L105 458L118 442L131 458L131 500" />
        <path d="M90 500L118 465L146 500" />
        <path d="M145 500L145 472L158 457L171 472L171 500" />
        <path d="M620 500L620 450L636 430L652 450L652 500" />
        <path d="M600 500L636 455L672 500" />
        <path d="M690 500L690 465L704 448L718 465L718 500" />
      </g>
      <g stroke="#111827" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="548" cy="300" r="13" />
        <path d="M548 313L535 350L548 388" />
        <path d="M538 332L518 353L507 375" />
        <path d="M541 333L563 348L577 369" />
        <path d="M548 388L528 427L515 468" />
        <path d="M548 388L570 420L588 455" />
        <path d="M515 468L503 480" />
        <path d="M588 455L600 466" />
      </g>
      <g stroke="#475569" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M527 347L565 347L574 382L537 390Z" />
        <path d="M527 347L536 339L567 341L565 347" />
        <path d="M577 369L590 385" />
      </g>
      <g stroke="#0F172A" strokeWidth="2" strokeLinecap="round">
        <path d="M70 525H735" />
        <path d="M115 525L95 540" />
        <path d="M150 525L135 545" />
        <path d="M205 525L190 542" />
        <path d="M665 525L680 542" />
        <path d="M700 525L718 545" />
      </g>
      <g stroke="#64748B" strokeWidth="2" strokeLinecap="round">
        <path d="M250 320L265 305L278 320" />
        <path d="M290 350L305 335L320 350" />
        <path d="M420 330L435 315L450 330" />
        <path d="M455 285L470 270L485 285" />
        <path d="M660 285L675 270L690 285" />
      </g>
    </svg>
  )
}
