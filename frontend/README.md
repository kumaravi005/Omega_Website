# Omega Education Centre — Frontend

The website itself: a React + TypeScript single-page app. For the project as a
whole (scope, offline-only model, roadmap) see the [root README](../README.md).

## Tech stack

| Concern    | Choice                                                        |
| ---------- | ------------------------------------------------------------- |
| Framework  | React 19 + TypeScript                                         |
| Tooling    | Vite 8                                                        |
| Routing    | React Router (`react-router`), data router in `src/app/router.tsx` |
| Styling    | Plain CSS with design tokens (CSS variables) + CSS Modules    |
| Linting    | oxlint                                                        |

React Router is the only dependency added beyond the official Vite React +
TypeScript template this project started from.

## Getting started

Requires Node.js 20.19+ or 22.12+ (developed on Node 24). Run these from
**this folder** (`frontend/`), not the repository root.

```bash
npm install
npm run dev        # start the dev server at http://localhost:5173
npm run typecheck  # TypeScript check
npm run lint       # oxlint
npm run build      # typecheck + production build into dist/
npm run preview    # serve the production build locally
```

## Project structure

```text
public/                  Static files served as-is (favicon)
src/
  main.tsx               App entry: mounts the router, loads global styles
  app/router.tsx          Route table
  config/
    routes.ts            Route path constants
    site.ts               Site name / description
    brand.ts               Shared provisional logo mark geometry
  layouts/RootLayout.tsx  Shell shared by all pages (header, main, footer)
  pages/                  One folder per route (about/, courses/, faculty/ ...)
  sections/home/          Homepage sections, one component each
  components/
    layout/               Global Header and Footer
    ui/                    Design-system components (see "UI components")
    common/                Logo, PageMeta, ProgrammeCard, EnquiryOptions, page/section placeholders
  data/                   Static content (programmes, academics, faculty, results, news ...)
  types/                  TypeScript models for the content and UI
  hooks/                  Reusable React hooks
  utils/                  Pure helpers (class names, tel/WhatsApp links, list formatting)
  assets/                 Images and icons (see src/assets/README.md)
  styles/                 Design tokens, global CSS, layout and patterns
```

### Conventions

- **Content is data, not markup.** Repeated content (programmes, faculty,
  results, testimonials, news, branches, contact) lives in `src/data` and is
  typed by `src/types/content.ts`. Components read from it and render an
  empty state when it is empty. Import via `@/data`.
- **Never invent facts.** Names, results, addresses, phone numbers,
  statistics and programme details must trace back to the institute or the
  official prospectus. The data files are intentionally empty, or hold only
  confirmed facts, until real content is supplied.
- **Path alias:** `@/` maps to `src/`.
- **Links:** use the constants in `src/config/routes.ts`, not string literals.
- **Adding a page:** create it under `src/pages/<name>/`, add a constant in
  `config/routes.ts`, add one entry to `app/router.tsx`, and add it to
  `data/navigation.ts` if it should appear in the menus.
- **Page titles:** render `<PageMeta title="…" />` in each page.
- **Styling rules:** use semantic tokens (`var(--color-primary)`), never raw
  palette steps or hex values; use `.container` / `.section` / `.grid` / `.stack`
  / `.cluster` / `.split` for layout; media queries only at 640 / 768 / 1024 / 1280px.

### Design system

The whole visual system lives in `src/styles/` and is driven by
**`tokens.css`**. Nothing else may hardcode a colour, font size, spacing value,
radius, shadow, width or transition timing.

| File             | Provides                                                                                     |
| ---------------- | -------------------------------------------------------------------------------------------- |
| `tokens.css`     | Palette + semantic colours, typography, spacing, radii, shadows, layout widths, motion       |
| `base.css`       | Reset, body defaults, link style, focus ring, skip link, `.visually-hidden`                  |
| `typography.css` | Display / H1–H4 / lead / small / label styles (`.text-display`, `.h1`…`.h4`, `.eyebrow`)     |
| `layout.css`     | `.container`, `.section`, `.stack`, `.cluster`, `.grid`, `.split`, `.on-dark`                |
| `buttons.css`    | `.btn` — `primary`, `accent`, `outline`, `ghost` × `sm`, `md`, `lg`; all states, incl. on-dark |
| `patterns.css`   | Section heading, CTA group, card, image frame, badge (incl. on-dark), breadcrumb             |

**Brand colours are provisional.** The palette (deep academic blue, warm amber,
teal) is a placeholder, not Omega's confirmed identity, and so is the "Ω"
logo mark in `components/common/Logo.tsx` and `public/favicon.svg`. To rebrand,
edit only the `PALETTE` block in `tokens.css` (and the `Logo` component); the
semantic roles that components use (`--color-primary`, `--color-accent`,
`--color-surface`, …) follow automatically.

- **Two-layer colours:** `--palette-*` (raw scales, edit to rebrand) →
  `--color-*` (roles: primary, primary-hover, secondary, accent, bg, surface,
  text, text-muted, border, success, warning, error). Components use roles only.
- **Accessibility:** all text/background pairs meet WCAG AA (4.5:1) and the
  focus ring meets 3:1, on both light and dark sections. Amber is never used
  for text on white; use `--color-accent-text`. Badges on a dark section use
  a transparent, outlined treatment (see `.on-dark .badge` in `patterns.css`)
  rather than their normal light pill, which would have near-invisible text.
  Re-check contrast after changing the palette.
- **Typography:** system font stack (no font download). Each role has a fluid
  `clamp()` size token: `--font-size-display`, `-h1`…`-h4`, `-lead`, `-body`,
  `-small`, `-label`, `-nav`, `-button`.
- **Layout widths:** container 1200px (`narrow` 800px, `wide` 1400px), fluid
  side gutter (16–32px), fluid section spacing (`--section-y`).
- **Breakpoints (mobile-first):** `sm` 640, `md` 768, `lg` 1024, `xl` 1280.
  CSS variables cannot be used inside `@media`, so these four literal values are
  the only ones permitted in media queries. Prefer fluid tokens and `auto-fit`
  grids; add a media query only when the layout truly changes.
- **Radii:** 4 / 8 / 12 / 16px and full. Buttons 8px, cards 12px.
- **Motion:** `--duration-fast` / `--duration-base`; automatically disabled by
  `prefers-reduced-motion`.
- **Dark bands:** add `.on-dark` (or `<Section tone="dark">`) and text, links,
  borders, badges and the focus ring re-colour themselves.

### UI components

`src/components/ui/`:

| Component        | Purpose                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| `Button`         | Action button (variant, size, disabled)                                       |
| `ButtonLink`     | Router link styled as a button                                                |
| `AnchorButton`   | Plain `<a>` (tel:, mailto:, wa.me, external) styled as a button                |
| `Container`      | Centred page width (`default`, `narrow`, `wide`)                              |
| `Section`        | Full-width band with spacing, tone (`default`, `muted`, `dark`) and `aria-labelledby` |
| `SectionHeading` | Eyebrow + title + description; sets the heading level and id                  |
| `CtaGroup`       | Row of call-to-action buttons (stacks full-width on phones)                   |
| `Card`           | Bordered surface; `interactive` and `flush` (edge-to-edge media) options      |
| `InfoGrid`       | Responsive grid of title + description cards (academic focus, assessment, …) |
| `ImageFrame`     | Fixed-ratio image with lazy loading, mandatory alt text and a labelled placeholder |
| `Badge`          | Small status / category pill                                                  |
| `Breadcrumb`     | Ancestor trail for nested pages                                               |

`src/components/layout/` holds the global `Header` and `Footer`;
`src/components/common/` holds `Logo`, `PageMeta`, `ProgrammeCard`,
`EnquiryOptions` and the placeholders.

### Header and footer

- **Header:** sticky; logo, primary navigation, and an "Admission" call to
  action. Below 1024px the navigation becomes a menu that closes on link click,
  route change (including browser back) and <kbd>Esc</kbd>. The active page is
  marked with `aria-current`, plus a visible marker.
- **Footer:** institute info, "Explore" links, course links (from
  `data/programmes.ts`), and a contact column (branches, phones, WhatsApp, email,
  hours) plus social links, all read from `src/data`. Until the institute
  supplies real details the contact column shows a "coming soon" note and the
  social row is hidden.
- Both are rendered once by `layouts/RootLayout.tsx`; pages never include them.

### Programmes (courses)

Omega's two classroom programmes — Pre-Foundation (Classes 5–10) and
Foundation (Classes 11–12) — are modelled by the `Programme` type in
`src/types/content.ts` and defined in `src/data/programmes.ts`, sourced from
the official prospectus. One page component,
`src/pages/courses/CourseDetailPage.tsx`, serves every `/courses/:slug` route
by looking the slug up in that data; a slug with no matching programme (e.g.
an old `/courses/jee` link) falls through to the 404 page.

The institute-wide academic system, assessment types, study material and
parent-communication copy (also prospectus-sourced) live in
`src/data/academics.ts` and are shared by every programme page via the
`InfoGrid` component. Programme-specific content (name, overview, focus
areas, and — for Pre-Foundation only — the school-level entrance exams it
prepares for) lives on each `Programme` record.

Omega is **not** presented as directly providing JEE/NEET coaching anywhere
on the site; the Foundation programme is described only as a foundation for
future competitive examinations, in line with the institute's positioning.

### Assets

Organised under `src/assets/` (`logo`, `hero`, `faculty`, `classroom`,
`students`, `courses`, `icons`). Naming, format and consent rules are in
[`src/assets/README.md`](src/assets/README.md). Only original or licensed
assets may be used; nothing may be copied from other institutes' websites.

### UX reference

<https://patnacenter.motion.ac.in/> was used only to understand how a coaching
institute website can be structured. No branding, text, images, testimonials or
faculty information may be reused from it. Omega keeps its own identity.
