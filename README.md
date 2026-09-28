# Aldercrest University

A single-page mock university website — a fictional school used as a
design sample. Built with React, TypeScript, and Vite, and deployed as a
static site on GitHub Pages.

It's meant to show the pieces a real university homepage needs: primary
navigation with a mobile menu, an admissions funnel, an at-a-glance stats
strip, a program index, and a news feed — built as small, independent
components so any one section (a new school, a new deadline, a new story)
can change without touching the rest of the page.

## Stack

- **React 18 + TypeScript** — component-based structure, one file per section
- **Vite** — dev server and production build
- **Plain CSS** with design tokens (custom properties) — no framework
  dependency, easy to re-theme
- **GitHub Actions** — builds and deploys to GitHub Pages automatically on
  push to `main`

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview # serve the production build locally
```

## Deploying to GitHub Pages

This repo includes `.github/workflows/deploy.yml`, which builds the site
and publishes `dist/` to GitHub Pages on every push to `main`.

1. Push this repo to GitHub.
2. In the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Confirm `base` in `vite.config.ts` matches your repo name exactly:
   ```ts
   base: '/your-repo-name/',
   ```
   (If you deploy to a custom domain or a `username.github.io` root repo,
   set `base: '/'` instead.)
4. Push to `main` — the Actions tab will show the build and deploy run.

## Accessibility notes

- Semantic landmarks (`header`, `nav`, `main`, `footer`) throughout
- A "Skip to main content" link for keyboard users
- Visible focus states on every interactive element (`:focus-visible`)
- `prefers-reduced-motion` respected — the one page-load animation is
  disabled for users who ask for reduced motion
- Color palette checked for contrast against both light and dark section
  backgrounds

## Project structure

```
src/
  components/
    Navbar.tsx      Sticky nav + mobile menu
    Hero.tsx         Headline, lede, CTAs, SVG illustration
    FactsBar.tsx      Enrollment / ratio / admit-rate strip
    Academics.tsx    Index of the five schools
    CampusLife.tsx   Housing, athletics, orgs, dining mosaic
    Admissions.tsx   Deadlines + apply CTA
    News.tsx        Recent campus stories
    Footer.tsx
    Crest.tsx        Shared shield mark used in nav/footer/admissions
  App.tsx
  App.css
  index.css          Design tokens + global reset
```
