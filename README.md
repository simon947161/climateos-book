# ClimateOS Living Books

This repository hosts the official Living Books of ClimateOS.

Production URL:

- https://climateos-book.vercel.app/

Current publication:

- **Torch and Horizon / 远方与火炬**

Purpose:

- Make ClimateOS knowledge readable by humans and AI systems.
- Support multilingual public reading.
- Provide a future foundation for ClimateOS documentation, white papers, and interactive knowledge portals.

Author: Simon Shu Min

## Website

This repository contains the ClimateOS Living Book website as a root-level Next.js app.

Primary routes:

- `/`
- `/books/torch-and-horizon`
- `/books/torch-and-horizon/[locale]`
- `/books/torch-and-horizon/[locale]/[slug]`
- `/about-climateos`
- `/feedback`
- `/contribute`

## Multilingual Structure

Supported locales:

- `zh` - 中文 - original - complete
- `en` - English - Publication Edition v1.0 - available
- `es` - Español - pending
- `fr` - Français - pending
- `de` - Deutsch - pending
- `ar` - العربية - pending - RTL

Source and translation paths:

- Chinese original: `books/torch-and-horizon/zh/`
- English publication edition: `books/torch-and-horizon/en/`
- English canonical source: `books/torch-and-horizon/en/source/The_Torch_and_the_Horizon_Publication_Edition_v1.0.md`
- Spanish placeholder: `books/torch-and-horizon/es/`
- French placeholder: `books/torch-and-horizon/fr/`
- German placeholder: `books/torch-and-horizon/de/`
- Arabic placeholder: `books/torch-and-horizon/ar/`
- Translation registry: `books/torch-and-horizon/translation-status.json`
- PDF source: `books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf`

The website reads Markdown chapters from the source folders. It does not rewrite or summarize the original book text or the English publication manuscript. Pending language pages are clearly marked as translation-in-progress placeholders and should not be treated as completed translations.

## English Publication Edition

The English edition is generated from the canonical manuscript:

- `books/torch-and-horizon/en/source/The_Torch_and_the_Horizon_Publication_Edition_v1.0.md`

The website presents the manuscript as chapter-by-chapter Markdown reading pages, with table of contents navigation, previous/next chapter navigation, publication images, and MathJax rendering for formulas.

Publication images are stored under:

- `public/assets/torch-and-horizon/en/`

## Reader Contribution

Reader interaction uses GitHub Issues:

- General feedback: `/feedback`
- Translation and collaboration entry: `/contribute`
- Issue templates: `.github/ISSUE_TEMPLATE/`

Readers can submit translation suggestions, chapter feedback, ClimateOS ideas, collaboration requests, typo reports, layout issues, and terminology notes.

## Translation Utilities

Character counting:

```bash
node scripts/count-translation-characters.mjs
```

Optional translation scaffold:

```bash
node scripts/translate-book-google.mjs en
```

The translation scaffold is dry-run by default, reads any API key from environment variables only, and must not be used to commit secrets. No real translation API is called by default.

## Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Vercel Deployment

Current deployment target:

- Production URL: https://climateos-book.vercel.app/
- Status: deployed from GitHub `main`

Vercel settings:

```text
Root Directory: .
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
```

Do not set the Vercel Root Directory to `website` for the current site. The deployment entry is the repository root.
