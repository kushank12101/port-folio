# Ankush Chopadekar — FP&A Portfolio

A production-ready personal portfolio site built for a Senior FP&A Consultant.
Light "ledger" base with a dark terminal-style impact section, a restrained
brass/ink/ledger-green palette, and a single deliberate 3D moment in the hero
(a forecast-vs-actual bar visualization built with React Three Fiber).

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** for styling, with a custom design-token theme
- **Framer Motion** for scroll reveals and UI transitions
- **React Three Fiber / Three.js** for the hero's 3D forecast ribbon
- **Lucide Icons**

All content lives in `src/lib/data.ts` — a single typed source of truth
pulled directly from the resume. Edit that file to update copy; the
components render from it automatically.

## Getting started locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Deploying

This project works out of the box on any platform that supports Next.js 15:

### Vercel (recommended)
1. Push this repo to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. No environment variables are required. Click **Deploy**.

### Netlify
1. Push this repo to GitHub.
2. New site from Git → select the repo.
3. Build command: `npm run build`, Publish directory: `.next`
   (Netlify's Next.js runtime handles the rest automatically.)

### Self-hosted / Node server
```bash
npm install
npm run build
npm start
```

## Project structure

```
src/
  app/
    layout.tsx        — fonts, metadata, root HTML shell
    page.tsx           — assembles all sections
    globals.css         — base styles, selection, scrollbar, grain texture
  components/
    Header.tsx          — sticky nav
    Hero.tsx             — hero copy, animated stats, 3D ribbon
    ForecastRibbon.tsx    — React Three Fiber 3D visualization
    AnimatedCounter.tsx    — count-up number animation
    Profile.tsx              — summary + core competencies
    Experience.tsx            — ledger-style work history (expandable)
    Impact.tsx                  — dark terminal section, key achievements
    Credentials.tsx              — certifications, software, education
    Contact.tsx                   — contact details + footer
  lib/
    data.ts             — ALL resume content (single source of truth)
    utils.ts             — small className helper
```

## Customizing

- **Update content:** edit `src/lib/data.ts` only — no need to touch components.
- **Update colors/fonts:** edit `tailwind.config.js` (`colors`, `fontFamily`)
  and the font imports in `src/app/layout.tsx`.
- **Replace metadata/domain:** edit `metadataBase` and Open Graph fields in
  `src/app/layout.tsx`, and the sitemap URL in `public/robots.txt`.
- **3D visualization:** tweak bar heights/colors in
  `src/components/ForecastRibbon.tsx`.

## Accessibility & performance notes

- Respects `prefers-reduced-motion` (animations are disabled site-wide).
- All interactive elements have visible focus states.
- The 3D canvas is loaded client-side only (`next/dynamic`, `ssr: false`)
  and is marked `aria-hidden` since it's decorative, not informational.
- Color contrast follows WCAG AA on both the light and dark sections.

## Troubleshooting deploys

**"Application error: a client-side exception has occurred" / console shows
`Cannot read properties of undefined (reading 'ReactCurrentBatchConfig')`:**
this means two different copies of React ended up in the build, almost
always because `package-lock.json` was missing or out of date relative to
`package.json` (commonly happens after manually moving files between
folders). The fix is already built into this project: `netlify.toml` runs
`npm ci` instead of `npm install`, which installs **exactly** what's in
`package-lock.json` and fails the build loudly if the two files disagree,
rather than silently re-resolving versions. If you see this error, the most
likely cause is that `package-lock.json` wasn't committed to your repo —
check that it exists in your GitHub repo alongside `package.json` before
redeploying.

**`npm error... no such file or directory, open '.../package.json'`:**
your repo has an extra nested folder. `package.json` needs to sit at the
repository root, not inside a subfolder. Re-check by browsing your repo on
GitHub directly.

