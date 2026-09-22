# Omega Education Centre — Website

The official website of **Omega Education Centre**, an offline coaching institute.

## Repository structure

```text
frontend/   The website (React + TypeScript). See frontend/README.md.
backend/    Placeholder for a future backend service. See backend/README.md.
```

## Project purpose

Give the institute a professional public presence: what it teaches, who teaches
it, how students have performed, and how to get admitted or get in touch.

## Website scope

The site is an **institutional / admissions website** for an in-person coaching
institute. It covers:

- institute information and identity
- programme information (Pre-Foundation, Foundation)
- admissions and enquiries
- scholarship / O-SAT information
- results and achievements
- faculty profiles
- notices and news
- contact details and centre location

## Offline-only business model

Omega Education Centre teaches **in person, in classrooms**. This website is
**not** an online learning platform, and none of the following will be built:

- online or live classes, video courses, or course streaming
- a student LMS or learner dashboard
- online payments or course purchase
- login / sign-up for online learners

Omega is also **not** presented as directly providing JEE or NEET coaching.
Its Foundation programme (Classes 11–12) is described only as a foundation
for future competitive examinations — see
[frontend/README.md § Programmes](frontend/README.md#programmes-courses).

Any new feature should be checked against this list before it is added.

## Planned pages

| Route                      | Purpose                                        | Status  |
| --------------------------- | ----------------------------------------------- | ------- |
| `/`                         | Homepage                                        | Sections stubbed |
| `/about`                    | About the institute                             | Placeholder |
| `/courses`                  | All programmes overview                        | **Built** |
| `/courses/pre-foundation`   | Pre-Foundation programme (Classes 5–10)         | **Built** |
| `/courses/foundation`       | Foundation programme (Classes 11–12)            | **Built** |
| `/results`                  | Student results and achievements                | Placeholder |
| `/faculty`                  | Faculty profiles                                | Placeholder |
| `/scholarship`              | Scholarship / O-SAT                             | Placeholder |
| `/admission`                | Admission process and enquiry                   | Placeholder |
| `/news`                     | Notices, news and events                        | Placeholder |
| `/contact`                  | Contact details, location and map               | Placeholder |

Unknown URLs, including old `/courses/jee` and `/courses/neet` links, show a
404 page.

## Planned homepage sections

In display order (`frontend/src/sections/home/`):

1. Header / navigation *(built)*
2. Hero *(built)*
3. Institute introduction *(built)*
4. Programmes *(built)*
5. Why choose Omega
6. Faculty
7. Results / achievements
8. Student / parent testimonials
9. Scholarship / O-SAT
10. Offline classroom / institute experience
11. News / notices
12. Contact / admission call to action
13. Footer *(built)*

Sections 5–12 are still labelled shells with no real content.

## Development roadmap

| Set | Scope                                                                                       | Status      |
| --- | ------------------------------------------------------------------------------------------- | ----------- |
| 1   | Foundation: architecture, routes, data model, asset structure, tokens, README               | **Done**    |
| 2   | Brand identity and global design system: tokens, layout, shared UI, header, footer          | **Done**    |
| 3   | Homepage hero and institute introduction                                                    | **Done**    |
| 4   | Programme architecture (frontend/backend split), prospectus-based programme content and pages | **Done**    |
| 5   | Remaining homepage sections: why Omega, faculty, results, testimonials, scholarship, classroom, news, closing CTA | Not started |
| 6   | Inner pages: about, results, faculty                                                        | Not started |
| 7   | Inner pages: scholarship, admission enquiry, news, contact                                  | Not started |
| 8   | Polish and launch: SEO, accessibility audit, performance, deployment                         | Not started |

The grouping of sets 5–8 is a proposal and can change.

## Current project status

**Sets 1–4 are complete.** The app builds and runs, every route resolves, and
the global shell (header, footer, mobile menu, design system and shared UI
components) is production-quality. The homepage hero, introduction and
programmes section are built, and both programme detail pages
(`/courses/pre-foundation`, `/courses/foundation`) are fully built from the
official prospectus. The remaining homepage sections are labelled shells and
the other inner pages are "coming soon" placeholders. The institute-fact data
files that still need real content (faculty, results, testimonials, news,
branches, scholarship, full contact details) are empty by design.

Open decisions:

- Final logo and brand colours (currently provisional).
- Whether static hosting of a client-rendered site is acceptable for search
  visibility, or pages should be pre-rendered.
- How admission enquiries should be received — the UI supports an enquiry
  form, phone call, WhatsApp and an in-person visit, but there is no backend
  yet, and the phone number, email and full postal address found in the
  prospectus have not been published pending the institute's confirmation
  (see `frontend/src/data/contact.ts` and `frontend/src/data/location.ts`).
