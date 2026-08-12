# Orionix — React + Framer Motion Rebuild

A hand-built React recreation of the [Orionix](https://orionix.framer.website/) marketing site — same layout, type,
color system, copy, and motion — implemented as plain React components with
[Framer Motion](https://motion.dev/) instead of the original Framer site engine.

The original logo mark (icon + wordmark) is carried over untouched. Framer's
"Made in Framer" badge, the Framer template-marketplace promo widget, and the
site's copyright/attribution footer line have been removed.

## Stack

- **React 19 + Vite** — app shell and dev/build tooling
- **Tailwind CSS v4** — utility styling, theme tokens in `src/index.css`
- **Framer Motion** — scroll reveals, hover/tap micro-interactions, marquees, accordion, tab-like sticky services list
- **lucide-react** — line icons (pricing plan bullets, service icons, FAQ, etc.)

## Project structure

```
src/
├─ assets/
│  ├─ logo/        # Original Orionix logo (icon + full lockup), unmodified
│  ├─ projects/     # Featured work grid imagery
│  ├─ clients/       # Client-logo marquee SVGs
│  ├─ blog/          # Insights/blog card imagery
│  ├─ icons/          # Process step icons
│  └─ misc/            # Showreel poster + decorative portrait imagery
├─ components/
│  ├─ layout/        # Header (nav + mobile menu) and Footer
│  ├─ sections/       # One file per page section (Hero, Projects, Pricing, ...)
│  └─ ui/               # Small shared primitives (Button, Pill, Reveal, Marquee)
├─ data/
│  └─ content.js       # All page copy, structured as plain data
├─ App.jsx               # Assembles sections in page order
├─ main.jsx               # React root
└─ index.css               # Tailwind import + design tokens (color/font/animation)
```

Content lives in `src/data/content.js` so copy can be edited without touching
component markup.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build      # production build to dist/
npm run preview     # preview the production build
```

## Design tokens

Defined as CSS custom properties in `src/index.css` under `@theme`, which
Tailwind v4 turns directly into utility classes (`bg-paper`, `text-ink`,
`text-accent`, `font-serif`, etc.):

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#f9f8f6` | Page background |
| `--color-ink` | `#141414` | Primary text |
| `--color-night` | `#131313` | Dark section backgrounds |
| `--color-accent` | `#ff0000` | Dot markers, active states |
| `--font-serif` | Fraunces | Display headings |
| `--font-sans` | Inter | Body copy, nav |
| `--font-mono` | Geist Mono | Eyebrow/label text |
