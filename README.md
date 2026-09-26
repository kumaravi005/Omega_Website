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
| `/about`                    | About the institute                             | **Built** |
| `/courses`                  | All programmes overview                        | **Built** |
| `/courses/pre-foundation`   | Pre-Foundation programme (Classes 5–10)         | **Built** |
| `/courses/foundation`       | Foundation programme (Classes 11–12)            | **Built** |
| `/results`                  | Student results and achievements                | Placeholder |
| `/faculty`                  | Faculty profiles                                | Placeholder |
| `/scholarship`              | Scholarship / O-SAT                             | Placeholder |
| `/admission`                | Admission enquiry (call, WhatsApp, form, visit)  | **Built** |
| `/news`                     | Notices, news and events                        | Placeholder |
| `/contact`                  | Contact details, location and enquiry           | **Built** |

Unknown URLs, including old `/courses/jee` and `/courses/neet` links, show a
404 page.

## Planned homepage sections

In display order (`frontend/src/sections/home/`):

1. Header / navigation *(built)*
2. Hero *(built)*
3. Institute introduction *(built)*
4. Programmes *(built)*
5. Why choose Omega *(built)*
6. Faculty
7. Results / achievements
8. Student / parent testimonials
9. Scholarship / O-SAT
10. Offline classroom / institute experience
11. News / notices
12. Contact / admission call to action
13. Footer *(built)*

Sections 6–12 are still labelled shells with no real content.

## Development roadmap

| Set | Scope                                                                                       | Status      |
| --- | ------------------------------------------------------------------------------------------- | ----------- |
| 1   | Foundation: architecture, routes, data model, asset structure, tokens, README               | **Done**    |
| 2   | Brand identity and global design system: tokens, layout, shared UI, header, footer          | **Done**    |
| 3   | Homepage hero and institute introduction                                                    | **Done**    |
| 4   | Programme architecture (frontend/backend split), prospectus-based programme content and pages | **Done**    |
| 5   | Contact/location data, enquiry options, Contact/Admission/About pages, Why Choose Omega, SEO and accessibility polish | **Done**    |
| 6   | Remaining homepage sections: faculty, results, testimonials, scholarship, classroom, news, closing CTA | Not started |
| 7   | Inner pages: results, faculty, scholarship, news                                            | Not started |
| 8   | Polish and launch: performance, deployment, real backend for the enquiry form               | Not started |

The grouping of sets 6–8 is a proposal and can change.

## Current project status

**Sets 1–5 are complete.** The app builds and runs, every route resolves, and
the global shell (header, footer, mobile menu, design system and shared UI
components) is production-quality. The homepage hero, introduction, programmes
and "Why choose Omega" sections are built; both programme detail pages
(`/courses/pre-foundation`, `/courses/foundation`), the About page and the
Contact/Admission pages are fully built from the official prospectus and
confirmed institute facts. Contact details (phone, WhatsApp, email, centre
location) are confirmed and live in `frontend/src/data/contact.ts` and
`frontend/src/data/branches.ts`. The remaining homepage sections are labelled
shells and the other inner pages (`/results`, `/faculty`, `/scholarship`,
`/news`) are "coming soon" placeholders — their data files are empty by design,
awaiting real content.

Open decisions:

- Final logo and brand colours (currently provisional).
- Whether static hosting of a client-rendered site is acceptable for search
  visibility, or pages should be pre-rendered.
- A real backend for the admission enquiry form — it currently routes to a
  page offering call, WhatsApp, visit-centre and a placeholder form link, with
  no server behind any of them yet.
