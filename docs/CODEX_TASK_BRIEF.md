# Torch and Horizon Living Book Website v0.1 - Codex Task Brief

## Goal

Build a public Living Book website for **Torch and Horizon / 远方与火炬**, based on this repository.

## Required v0.1 Features

1. Create a clean homepage for ClimateOS Living Books.
2. Create a book landing page for `Torch and Horizon / 远方与火炬`.
3. Render all Chinese Markdown chapters from `books/torch-and-horizon/zh/` as readable web pages.
4. Create a table of contents with previous/next chapter navigation.
5. Add a PDF download link pointing to `books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf`.
6. Create placeholder structure for English and future multilingual versions.
7. Create a simple feedback page linking to GitHub Issues.
8. Keep the design quiet, readable, serious and suitable for a thought book.
9. Do not rewrite or summarize the original book text unless specifically requested.
10. Make the site deployable to Vercel or Cloudflare Pages.

## Preferred Technology

Use one of the following:

- Next.js + MDX + TypeScript, preferred for future interaction; or
- Astro + Markdown, acceptable if simpler.

## Suggested URL Structure

```text
/
/books/torch-and-horizon
/books/torch-and-horizon/zh/01-abstract
/books/torch-and-horizon/zh/02-first-step
...
/feedback
/about-climateos
```

## Future v0.2+ Features

- English translation pages
- Search
- Comment or feedback system
- AI reading assistant
- Multilingual publication workflow
- Interactive ClimateOS concept map

## Definition of Done

- The site runs locally.
- All Chinese chapters are visible as pages.
- Navigation works.
- PDF download works.
- README explains how to run and deploy.
