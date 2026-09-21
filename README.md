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
    layout/              Header, Footer
    ui/                  Generic primitives: Button, ButtonLink, Container, Section
    common/              Shared building blocks: PageMeta, placeholders
  data/                  Static content (courses, faculty, results, news ...)
  types/                 TypeScript models for the content and UI
  hooks/                 Reusable React hooks
  utils/                 Pure helper functions
  assets/                Images and icons (see src/assets/README.md)
  styles/                Design tokens and global styles
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

### Design system foundation

Defined in `src/styles/`. Use the tokens; do not hardcode values.

| File            | Provides                                                                         |
| --------------- | -------------------------------------------------------------------------------- |
| `tokens.css`    | Colours, type scale, spacing, radii, shadows, container widths, z-index          |
| `base.css`      | Reset, body defaults, focus ring, skip link, `.visually-hidden`                  |
| `typography.css`| Heading / paragraph styles, `.eyebrow`, `.lead`, `.text-muted`                   |
| `layout.css`    | `.container`, `.section` (default / muted / dark)                                |
| `buttons.css`   | `.btn` with `primary`, `accent`, `outline`, `ghost` variants and `sm/md/lg` sizes |

- **Breakpoints (mobile-first):** `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px.
  Desktop navigation starts at `lg`.
- **Container:** 1200px max width (800px narrow variant) with a fluid gutter.
- **Radii:** 4 / 8 / 12 / 16px and full. Buttons use 8px, cards 12px.
- **Colours:** *provisional* deep-blue primary and warm-amber accent. To be
  replaced once the official logo and brand colours are confirmed.
- **Fonts:** system font stack for now; a web font can be chosen later.

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

| Set | Scope                                                                                  | Status      |
| --- | -------------------------------------------------------------------------------------- | ----------- |
| 1   | Foundation: architecture, routes, data model, asset structure, design tokens, README   | **Done**    |
| 2   | Homepage build: hero, intro, courses, why Omega, results, CTA (with real content)      | Not started |
| 3   | Remaining homepage sections: faculty, testimonials, scholarship, classroom, news       | Not started |
| 4   | Inner pages: about, courses, course details, results, faculty                          | Not started |
| 5   | Inner pages: scholarship, admission enquiry, news, contact                             | Not started |
| 6   | Polish and launch: SEO, accessibility audit, performance, deployment                   | Not started |

The exact grouping of sets 2–6 is a proposal and can change.

## Current project status

**Set 1 (foundation) is complete.** The app builds and runs, every route
resolves, and the header, footer and mobile menu work. The homepage is a
stack of labelled section shells and the inner pages are "coming soon"
placeholders. All content data files are empty by design, awaiting real
institute content.

Open decisions before the SEO/launch stage:

- Final logo and brand colours.
- Whether static hosting of a client-rendered site is acceptable for search
  visibility, or pages should be pre-rendered.
- How admission enquiries should be received (this site has no backend).
