# Omega Education Centre — Website

The official website of **Omega Education Centre**, an offline coaching institute.

## Repository structure

```text
frontend/   The website (React + TypeScript). See frontend/README.md.
backend/    Admission enquiry API (Express + TypeScript). See backend/README.md.
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
| `/`                         | Homepage                                        | **Built** |
| `/about`                    | About the institute                             | **Built** |
| `/courses`                  | All programmes overview                        | **Built** |
| `/courses/pre-foundation`   | Pre-Foundation programme (Classes 5–10)         | **Built** |
| `/courses/foundation`       | Foundation programme (Classes 11–12)            | **Built** |
| `/results`                  | Student results and achievements                | Structured empty state |
| `/faculty`                  | Faculty profiles                                | Structured empty state |
| `/scholarship`              | Scholarship / O-SAT                             | Structured empty state |
| `/admission`                | Admission enquiry (call, WhatsApp, form, visit)  | **Built** |
| `/news`                     | Notices, news and events                        | Structured empty state |
| `/contact`                  | Contact details, location and enquiry           | **Built** |

"Structured empty state" means the page is fully designed and will render real
data automatically the moment it is added to the matching file in
`frontend/src/data/` — nothing else needs to change.

Unknown URLs, including old `/courses/jee` and `/courses/neet` links, show a
404 page.

## Planned homepage sections

In display order (`frontend/src/sections/home/`):

1. Header / navigation *(built)*
2. Hero *(built)*
3. Institute introduction *(built)*
4. Programmes *(built)*
5. Why choose Omega *(built)*
6. Faculty — links to `/faculty`
7. Results / achievements — links to `/results`
8. Student / parent testimonials
9. Scholarship / O-SAT — links to `/scholarship`
10. Offline classroom / institute experience
11. News / notices — links to `/news`
12. Contact / admission call to action *(built)*
13. Footer *(built)*

Sections 6–11 (other than their own dedicated pages) are labelled shells with
no real content, since no testimonial, classroom-gallery or faculty/results
data has been confirmed yet.

## Development roadmap

| Set | Scope                                                                                       | Status      |
| --- | ------------------------------------------------------------------------------------------- | ----------- |
| 1   | Foundation: architecture, routes, data model, asset structure, tokens, README               | **Done**    |
| 2   | Brand identity and global design system: tokens, layout, shared UI, header, footer          | **Done**    |
| 3   | Homepage hero and institute introduction                                                    | **Done**    |
| 4   | Programme architecture (frontend/backend split), prospectus-based programme content and pages | **Done**    |
| 5   | Contact/location data, enquiry options, Contact/Admission/About pages, Why Choose Omega, SEO and accessibility polish | **Done**    |
| 6   | UI refinement and page completion: richer About/Courses/Admission/Contact, structured empty states for Results/Faculty/Scholarship/News, completed homepage CTA | **Done** |
| 7   | Real admission enquiry system: working enquiry form, Express backend API, server-side validation, rate limiting | **Done** |
| 8   | Real content: faculty, results, testimonials, scholarship details, news, classroom gallery — pending institute-supplied facts and assets | Not started |
| 9   | Polish and launch: performance, deployment, and a decision on permanent storage / email notification for enquiries | Not started |

The grouping of sets 7–8 is a proposal and can change.

## Current project status

**Sets 1–7 are complete.** The app builds and runs, every route resolves, and
the global shell (header, footer, mobile menu, design system and shared UI
components) is production-quality. The homepage, About, Courses overview, both
programme detail pages (`/courses/pre-foundation`, `/courses/foundation`),
Contact and Admission are fully designed and built from the official
prospectus and confirmed institute facts. Contact details (phone, WhatsApp,
email, centre location) are confirmed and live in `frontend/src/data/contact.ts`
and `frontend/src/data/branches.ts`.

`/results`, `/faculty`, `/scholarship` and `/news` are not placeholders in the
old sense — each is a fully designed page with real rendering logic for actual
data (result cards, faculty cards, scholarship slabs, a news list) and a
polished "not published yet" empty state for now, since their data files
(`frontend/src/data/{results,faculty,scholarship,news}.ts`) are still empty.
Adding real, confirmed content to those files is enough to make the pages show
it — no further code changes are needed.

The admission enquiry form (`/admission`) now submits to a real backend API
(`backend/`) with full server-side validation and rate limiting — see
[backend/README.md](backend/README.md). It does **not** yet have permanent
storage, email notification, or CAPTCHA; a successful submission is
validated and logged server-side, not durably saved or forwarded to anyone.
Call, WhatsApp and Visit Centre continue to work exactly as before (no
server involved).

Open decisions:

- Final logo and brand colours (currently provisional).
- Whether static hosting of a client-rendered site is acceptable for search
  visibility, or pages should be pre-rendered.
- Permanent storage for admission enquiries (a database needs to be chosen),
  email notification to the institute (a provider needs to be chosen), and
  whether CAPTCHA/abuse protection beyond per-IP rate limiting is needed —
  see [backend/README.md](backend/README.md).
- Real institute assets (logo, classroom/centre photographs, faculty
  photographs, verified results) — see `frontend/src/assets/README.md`. Every
  photo slot on the site currently shows a clearly labelled placeholder rather
  than a substitute image.
