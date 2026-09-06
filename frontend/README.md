# ArchiApple Frontend

React redesign of ArchiApple, built additively inside this repo while the Django
app stays untouched. Scaffolded with Vite + TypeScript + Tailwind CSS v4 and
React Router.

## Getting started

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173
npm run build    # type-checks and produces dist/
```

## Status

- **Home** — built to match the approved mockup (mock data only, no API calls).
- Topics browser, Topic → Sub-Topic → Resources, Add Resource, Help Wanted and
  Contributor Profile — placeholder routes pending mockup approval.
- Django REST API layer comes after all screens are approved.

## Design tokens

Defined once in `src/index.css` under Tailwind v4's `@theme` — used as utility
classes everywhere (e.g. `text-headers`, `bg-forest`, `text-muted`):

| Token   | Hex       | Usage                | Class              |
| ------- | --------- | -------------------- | ------------------ |
| Ink     | `#0F172A` | primary / text       | `text-ink`         |
| Forest  | `#10B981` | accent / CTAs        | `bg-forest`        |
| Sky     | `#3B82F6` | links                | `text-sky`         |
| Surface | `#E5E7EB` | backgrounds/borders  | `border-surface`   |
| Muted   | `#64748B` | secondary text       | `text-muted`       |
| Headers | `#111827` | headings             | `text-headers`     |

- Typeface: **Inter** (headings and body) — loaded in `index.html`, set as
  `--font-sans` in `@theme`. No other font.
- Visual language: calm, text-first "field guide" feel — line-style SVG
  illustrations (`src/components/Illustrations.tsx`), breadcrumbs, no rounded
  SaaS card grid, no gradients, no ALL-CAPS labels.

## Structure

```
src/
  components/   Layout, Header, Hero, TopicCard, RecentlyAdded, Footer, …
  data/mock.ts  hardcoded topics + recently-added resources (swap for API later)
  pages/        Home + placeholder screens
```
