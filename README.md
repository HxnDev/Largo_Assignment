# Largo Dashboard Assignment

A responsive implementation of the supplied Largo celebrity analytics dashboard, populated with dummy data. It includes the requested original layout and a separately loaded enhanced version.

## Run locally

```bash
npm ci
npm run dev
```

Run the focused data tests with `npm test`.

## Technology

- React
- Vite
- Recharts
- Plain CSS

## Versions

- `?version=original` displays the supplied mock implementation with minimal behavior.
- `?version=enhanced` displays the refined design with working filters, interactive charts, expanded chart dialogs, one-click PDF export, and a downloadable celebrity one-sheet.

The enhanced bundle is lazy-loaded so the original implementation remains a small, clear review target. Stable cards, charts, icons, and data structures are shared between both versions.

The celebrity one-sheet is a pre-generated static PDF in `public/documents`. Clicking the enhanced download button serves that existing file; the app does not generate PDFs at runtime.

## GitHub Pages

The repository includes a GitHub Actions deployment workflow. In repository settings, select **Pages → Build and deployment → GitHub Actions**. The Vite base path is configured for `/Largo_Assignment/`.
