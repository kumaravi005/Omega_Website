# Omega Education Centre — Website

The official website of **Omega Education Centre**, an offline coaching institute.

## Project purpose

Give the institute a professional public presence: what it teaches, who teaches
it, how students have performed, and how to get admitted or get in touch.

## Website scope

The site is an **institutional / admissions website** for an in-person coaching
institute. It covers:

- institute information and identity
- course information
- admissions and enquiries
- scholarship / O-SAT information
- results and achievements
- faculty profiles
- notices and news
- contact details and centre locations

## Offline-only business model

Omega Education Centre teaches **in person, in classrooms**. This website is
**not** an online learning platform, and none of the following will be built:

- online or live classes, video courses, or course streaming
- a student LMS or learner dashboard
- online payments or course purchase
- login / sign-up for online learners

Any new feature should be checked against this list before it is added.

## Planned pages

| Route                | Purpose                                              | Status  |
| -------------------- | ---------------------------------------------------- | ------- |
| `/`                  | Homepage                                             | Sections stubbed |
| `/about`             | About the institute                                  | Placeholder |
| `/courses`           | All courses overview                                 | Placeholder |
| `/courses/foundation`| Foundation course                                    | Placeholder |
| `/courses/jee`       | JEE course                                           | Placeholder |
| `/courses/neet`      | NEET course                                          | Placeholder |
| `/results`           | Student results and achievements                     | Placeholder |
| `/faculty`           | Faculty profiles                                     | Placeholder |
| `/scholarship`       | Scholarship / O-SAT                                  | Placeholder |
| `/admission`         | Admission process and enquiry                        | Placeholder |
| `/news`              | Notices, news and events                             | Placeholder |
| `/contact`           | Contact details, locations and map                   | Placeholder |

Unknown URLs, including unknown course slugs, show a 404 page.

## Planned homepage sections

In display order (`src/sections/home/`):

1. Header / navigation *(built, in `components/layout`)*
2. Hero
3. Institute introduction
4. Courses
5. Why choose Omega
6. Faculty
7. Results / achievements
8. Student / parent testimonials
9. Scholarship / O-SAT
10. Offline classroom / institute experience
11. News / notices
12. Contact / admission call to action
13. Footer *(built, in `components/layout`)*

Sections 2–12 are labelled shells with no real content yet.

## Tech stack

| Concern    | Choice                                                        |
| ---------- | ------------------------------------------------------------- |
| Framework  | React 19 + TypeScript                                         |
| Tooling    | Vite 8                                                        |
| Routing    | React Router (`react-router`), data router in `src/app/router.tsx` |
| Styling    | Plain CSS with design tokens (CSS variables) + CSS Modules    |
| Linting    | oxlint                                                        |

The repository was empty when work began, so this stack was chosen from the
official Vite React + TypeScript template. React Router is the only added
dependency.

## Getting started

Requires Node.js 20.19+ or 22.12+ (developed on Node 24).

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
  app/router.tsx         Route table
  config/
    routes.ts            Route path constants
    site.ts              Site name / description
  layouts/RootLayout.tsx Shell shared by all pages (header, main, footer)
  pages/                 One folder per route (about/, courses/, faculty/ ...)
  sections/home/         Homepage sections, one component each
  components/
    layout/              Global Header and Footer
    ui/                  Design-system components (see "UI components")
    common/              Logo, PageMeta, page/section placeholders
  data/                  Static content (courses, faculty, results, news ...)
  types/                 TypeScript models for the content and UI
  hooks/                 Reusable React hooks
  utils/                 Pure helpers (class names, tel/WhatsApp links)
  assets/                Images and icons (see src/assets/README.md)
  styles/                Design tokens, global CSS, layout and patterns
```

### Conventions

- **Content is data, not markup.** Repeated content (courses, faculty, results,
  testimonials, news, branches, contact) lives in `src/data` and is typed by
  `src/types/content.ts`. Components read from it and render an empty state
  when it is empty. Import via `@/data`.
- **Never invent facts.** Names, results, addresses, phone numbers and
  statistics must come from the institute. The data files are intentionally
  empty until real content is supplied.
- **Path alias:** `@/` maps to `src/`.
- **Links:** use the constants in `src/config/routes.ts`, not string literals.
- **Adding a page:** create it under `src/pages/<name>/`, add a constant in
  `config/routes.ts`, add one entry to `app/router.tsx`, and add it to
  `data/navigation.ts` if it should appear in the menus.
- **Page titles:** render `<PageMeta title="…" />` in each page.
- **Styling rules:** use semantic tokens (`var(--color-primary)`), never raw
  palette steps or hex values; use `.container` / `.section` / `.grid` / `.stack`
  / `.cluster` for layout; media queries only at 640 / 768 / 1024 / 1280px.

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
| `buttons.css`    | `.btn` — `primary`, `accent`, `outline`, `ghost` × `sm`, `md`, `lg`; all states              |
| `patterns.css`   | Section heading, CTA group, card, image frame, badge, breadcrumb                             |

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
  focus ring meets 3:1. Amber is never used for text on white; use
  `--color-accent-text`. Re-check contrast after changing the palette.
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
  borders and focus ring re-colour themselves.

### UI components

`src/components/ui/`:

| Component        | Purpose                                                                       |
| ---------------- | ----------------------------------------------------------------------------- |
| `Button`         | Action button (variant, size, disabled)                                       |
| `ButtonLink`     | Router link styled as a button                                                |
| `Container`      | Centred page width (`default`, `narrow`, `wide`)                              |
| `Section`        | Full-width band with spacing and tone (`default`, `muted`, `dark`)            |
| `SectionHeading` | Eyebrow + title + description; sets the heading level                         |
| `CtaGroup`       | Row of call-to-action buttons (stacks full-width on phones)                   |
| `Card`           | Bordered surface; `interactive` and `flush` (edge-to-edge media) options      |
| `ImageFrame`     | Fixed-ratio image with lazy loading, mandatory alt text and a placeholder     |
| `Badge`          | Small status / category pill                                                  |
| `Breadcrumb`     | Ancestor trail for nested pages                                               |

`src/components/layout/` holds the global `Header` and `Footer`;
`src/components/common/` holds `Logo`, `PageMeta` and the placeholders.

### Header and footer

- **Header:** sticky; logo, primary navigation, and an "Admission" call to
  action. Below 1024px the navigation becomes a menu that closes on link click,
  route change (including browser back) and <kbd>Esc</kbd>. The active page is
  marked with `aria-current`, plus a visible marker.
- **Footer:** institute info, "Explore" links, course links (from
  `data/courses.ts`), and a contact column (branches, phones, WhatsApp, email,
  hours) plus social links, all read from `src/data`. Until the institute
  supplies real details the contact column shows a "coming soon" note and the
  social row is hidden.
- Both are rendered once by `layouts/RootLayout.tsx`; pages never include them.

### Assets

Organised under `src/assets/` (`logo`, `hero`, `faculty`, `classroom`,
`students`, `courses`, `icons`). Naming, format and consent rules are in
[`src/assets/README.md`](src/assets/README.md). Only original or licensed
assets may be used; nothing may be copied from other institutes' websites.

### UX reference

<https://patnacenter.motion.ac.in/> was used only to understand how a coaching
institute website can be structured. No branding, text, images, testimonials or
faculty information may be reused from it. Omega keeps its own identity.

## Development roadmap

| Set | Scope                                                                                       | Status      |
| --- | ------------------------------------------------------------------------------------------- | ----------- |
| 1   | Foundation: architecture, routes, data model, asset structure, tokens, README               | **Done**    |
| 2   | Brand identity and global design system: tokens, layout, shared UI, header, footer          | **Done**    |
| 3   | Homepage build: hero, intro, courses, why Omega, results, CTA (with real content)           | Not started |
| 4   | Remaining homepage sections: faculty, testimonials, scholarship, classroom, news            | Not started |
| 5   | Inner pages: about, courses, course details, results, faculty                               | Not started |
| 6   | Inner pages: scholarship, admission enquiry, news, contact                                  | Not started |
| 7   | Polish and launch: SEO, accessibility audit, performance, deployment                        | Not started |

The grouping of sets 3–7 is a proposal and can change.

## Current project status

**Sets 1 and 2 are complete.** The app builds and runs, every route resolves,
and the global shell (header, footer, mobile menu, design system and shared UI
components) is production-quality. The homepage is still a stack of labelled
section shells and the inner pages are "coming soon" placeholders. All content
data files are empty by design, awaiting real institute content.

Open decisions:

- Final logo and brand colours (currently provisional).
- Whether static hosting of a client-rendered site is acceptable for search
  visibility, or pages should be pre-rendered.
- How admission enquiries should be received (this site has no backend).
