# BOOKSHELF-CN

A React + Vite host for the supplied **Working Volumes — Seven Tools for Making** interactive bookshelf.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Implementation

- The complete authored page is served from `public/landing-pages/complete-shelf-v2.html`.
- `CompleteShelfLandingPage` hosts that same-project document in a full-viewport iframe.
- The HTML document retains its own Three.js r165 import map, DOM, CSS, renderer, book content, navigation and interactions.
- The HTML was taken from the source text supplied for this project. It did not match the SHA-256 revision stated in the supplied manifest, so this repository does not claim byte identity with that manifest revision.

## ThreeUI package note

The public `@designcodeio/threeui` Community npm package does not publish the Pro `CompleteShelfLandingPage` renderer. The local iframe host is used here so the supplied full-page HTML can run without pretending that export exists in the Community package.
