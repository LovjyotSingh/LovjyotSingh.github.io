# Lovjyot Singh — Portfolio

Personal site for Lovjyot Singh, a full-stack engineer. Built with React, Vite, and Framer Motion, with Lenis for smooth scrolling.

## Run it

```bash
cd site
npm install
npm run dev
```

Open the local URL that Vite prints.

## Publish

```bash
cd site
npm run build
```

`npm run build` bundles the site and copies the result (`index.html`, `assets/`, favicon, `.nojekyll`) to the repository root. GitHub Pages serves the repository root, so commit the generated files.

## What's on the page

- Hero with a live OfferForge AI preview card and quick facts
- Skills marquee
- Selected work: OfferForge AI and SyncFlow, each with live and source links
- Journey timeline that fills as you scroll
- Skills grouped by area
- Contact with resume download, email, and copy-to-clipboard
- Dark (default) and light themes with a nav toggle; the choice is saved in the browser
- Scroll progress bar, active-section nav, magnetic buttons, and card spotlight hover
- Reduced-motion and keyboard support

Content lives in `site/src/content.js`.
