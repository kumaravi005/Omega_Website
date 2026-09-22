# Assets

Images and icons bundled with the site. Every file here must be **original to
Omega Education Centre or properly licensed**. Never copy assets from other
institutes' websites.

| Folder       | Contents                                                          |
| ------------ | ----------------------------------------------------------------- |
| `logo/`      | Official logo files (SVG preferred), light/dark variants, mark    |
| `hero/`      | Homepage and page-banner images                                   |
| `faculty/`   | Faculty portraits                                                 |
| `classroom/` | Photos of the offline classrooms, campus and events               |
| `students/`  | Result / achiever photos (only with consent)                      |
| `courses/`   | One image per programme (Pre-Foundation, Foundation)              |
| `icons/`     | Small UI and feature icons (SVG)                                  |

The `favicon` lives in `public/`, not here.

## Conventions

- **File names:** lowercase kebab-case, describing the subject, e.g.
  `faculty/first-last.webp`, `classroom/physics-lab.webp`.
- **Formats:** SVG for logos and icons; WebP (or JPEG) for photos.
- **Size:** export photos at the largest size they are displayed (at most about
  1600px wide for hero images, 800px for cards, 400px for portraits) and keep
  each file under about 300 KB.
- **Consent:** photos of students and faculty need written permission to publish.
- **Alt text:** every image needs meaningful alt text in the data entry that
  references it (`ImageRef.alt`).

## Using assets

Import the file so Vite fingerprints and optimises it, then reference it from a
data file:

```ts
import photo from '@/assets/faculty/first-last.webp'

export const faculty: FacultyMember[] = [
  { id: 'first-last', name: '…', subject: '…', photo: { src: photo, alt: '…' } },
]
```

**Hero and intro photos:** save to `hero/` (or `classroom/`) and reference them from
`homeHero.image` / `homeIntro.image` in `src/data/home.ts`. Until a real photo
exists the site shows a labelled placeholder — never substitute stock or
generated imagery and present it as Omega's own classrooms.

**Programme photos:** save to `courses/` and set the `image` field on the
matching entry in `src/data/programmes.ts`. Same placeholder rule applies.

Empty folders are kept in Git with a `.gitkeep`; delete it once a folder has a
real file.
