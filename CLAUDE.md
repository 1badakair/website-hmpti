@AGENTS.md

# website-hmpti

Marketing/informational website for HMPTI UKSW (Informatics Engineering Student Association). Next.js 16 App Router, React 19, Tailwind v4, TypeScript. Content is entirely static — copy lives in `data/*.ts`, no CMS, no database, no i18n framework (site copy is English; the "translate ID→EN" commits were one-time content rewrites, not a locale system).

## Commands

```bash
npm run dev     # dev server on localhost:3000
npm run build   # production build
npm start       # serve production build
npm run lint    # eslint (flat config, eslint.config.mjs)
```

## Structure

- `app/` — routes (App Router). Pages: `/`, `/about`, `/profile`, `/program`, `/program/[slug]`, `/academic`, `/academic/[category]`, `/academic/asisten-dosen`, `/aspiration`. `layout.tsx` sets fonts (Work Sans, Goldman, Inter via `next/font/google`) and metadata; `globals.css` holds Tailwind + custom CSS.
- `components/layout/` — Navbar, Footer, BetaNotice (shell).
- `components/sections/<page>/` — page-scoped section components. A page composes these (see `app/page.tsx`).
- `components/ui/` — shared primitives: Container, MotionCard, MotionSection, SectionTitle.
- `data/*.ts` — all page content as typed exported constants. Edit copy/items here, not in components.
- `types/index.ts` — shared domain types (Program, AcademicPost, ProfileDepartment, GalleryItem, etc.).
- `lib/utils.ts` — only `cn()` classname joiner.
- `public/figma/` — exported design assets (svg/png) referenced by data files.

## Conventions

- `@/*` path alias maps to repo root (tsconfig).
- Add `"use client"` only to components needing interactivity/animation (e.g. HeroSection); pages and data are server components by default.
- Animation via `motion` package; carousels via `embla-carousel-react`; icons via `lucide-react`.
- Content changes → edit `data/*.ts`. New page section → add component under `components/sections/<page>/` and wire into the route's `page.tsx`.
- Match existing Tailwind-utility styling; brand color `#032d5c` (dark blue) with white text.

## Branch workflow

Remote (`origin`, github.com/1badakair/website-hmpti) uses one branch per page feature; `main` is the integration branch (default/HEAD). Push a page's work to its named branch, then merge into `main`.

| Branch | Feature |
|---|---|
| `main` | integration / default |
| `about` | About page |
| `academic` | Academic page |
| `aspiration` | Aspiration page |
| `profile` | Profile page |
| `program` | Program page |

`git checkout <branch>` auto-tracks the matching `origin/<branch>`.

## Note

`AGENTS.md` warns this Next.js version has breaking changes vs. training data — read `node_modules/next/dist/docs/` before writing framework code.
