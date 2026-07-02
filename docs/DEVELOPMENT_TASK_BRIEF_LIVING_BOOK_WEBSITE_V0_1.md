# Development Task Brief: Living Book Website v0.1

## Objective

Implement the first public Living Book website for ClimateOS, centered on **Torch and Horizon / 远方与火炬**.

The v0.1 website should make the book readable online, preserve the original Chinese Markdown text, provide clear navigation, expose the downloadable PDF, and establish a reusable publication foundation for future ClimateOS Living Books and multilingual editions.

## Scope

### In Scope

- Create a clean ClimateOS Living Books homepage.
- Create a book landing page for `Torch and Horizon / 远方与火炬`.
- Render all available Chinese Markdown chapters from `books/torch-and-horizon/zh/` as readable web pages.
- Create a table of contents ordered by chapter filename.
- Add previous and next navigation between chapter pages.
- Add a PDF download link for `books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf`.
- Add placeholder structure and navigation affordances for English and future multilingual versions.
- Add a simple feedback page that links to GitHub Issues for this repository.
- Add an `about-climateos` page with concise project context.
- Update the root `README.md` with local run and deployment instructions.
- Make the site deployable to Vercel or Cloudflare Pages.

### Out of Scope

- Rewriting, summarizing, translating, or editorializing the original book text.
- Implementing search.
- Implementing comments or a feedback backend.
- Implementing an AI reading assistant.
- Implementing an interactive ClimateOS concept map.
- Creating new book content, translations, diagrams, or citations.
- Publishing or deploying the site remotely unless separately approved.

## Repository Paths

### Source Content

- `books/torch-and-horizon/zh/`
  - Canonical Chinese Markdown chapter source.
- `books/torch-and-horizon/en/`
  - Placeholder for future English translation.
- `books/torch-and-horizon/images/`
  - Placeholder for future figures and diagrams.
- `books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf`
  - Expected downloadable PDF asset.
- `climateos-book-upload-package.zip`
  - Current upload artifact that appears to contain the full chapter and PDF assets. QCloud should inspect and extract only as needed, preserving canonical paths.

### Existing Planning Documents

- `README.md`
  - Repository-level purpose and future run/deploy instructions.
- `docs/CODEX_TASK_BRIEF.md`
  - Original v0.1 task brief.
- `docs/DEVELOPMENT_TASK_BRIEF_LIVING_BOOK_WEBSITE_V0_1.md`
  - This QCloud implementation brief.

### Website Implementation

QCloud should choose one clear implementation root and document it:

- Preferred: repository root Next.js app using `app/`, `components/`, `lib/`, and `public/`.
- Acceptable alternative: `website/` as the web app root, if the run/deploy instructions clearly use that folder.

Do not leave two competing website implementations.

## Required Outputs

- A working web application using Next.js + TypeScript, unless QCloud provides a clear reason to use Astro + Markdown instead.
- A homepage at `/`.
- A book landing page at `/books/torch-and-horizon`.
- Chinese chapter pages at `/books/torch-and-horizon/zh/[chapter-slug]`.
- A feedback page at `/feedback`.
- An about page at `/about-climateos`.
- A table of contents generated from available Chinese chapter Markdown files.
- Previous and next chapter navigation.
- A PDF download link that resolves correctly in the running site.
- Minimal multilingual placeholder structure for English and future languages.
- Quiet, readable, serious visual design suitable for a thought book.
- Updated `README.md` with:
  - technology stack,
  - local setup,
  - local development command,
  - build command,
  - deployment notes for Vercel or Cloudflare Pages,
  - source content paths.

## Acceptance Criteria

- `npm install` or the documented package-manager equivalent succeeds.
- The documented local development command starts the site.
- The documented build command succeeds.
- `/` loads and identifies ClimateOS Living Books.
- `/books/torch-and-horizon` loads and links to the Chinese reading experience.
- Every Chinese Markdown chapter present under `books/torch-and-horizon/zh/` is reachable as a page.
- Chapter pages render Markdown body content without rewriting or summarizing the source text.
- The table of contents lists chapters in filename order.
- Previous and next chapter navigation works across the full Chinese chapter sequence.
- The PDF download link points to the expected PDF and works locally.
- `/feedback` links to GitHub Issues for `simon947161/climateos-book`.
- `/about-climateos` provides concise ClimateOS context without becoming a white paper.
- English and future multilingual placeholders are visible but do not imply completed translations.
- The design is readable on desktop and mobile.
- No third-party service integration is required for v0.1.
- The final implementation does not introduce unrelated architecture, runtime, API, AI assistant, or data-system behavior.

## Constraints

- Preserve original book text exactly unless the repository owner explicitly approves editorial changes.
- Do not invent missing chapters, translations, PDFs, images, or citations.
- Do not silently merge or delete duplicate-looking folders.
- If extracting from `climateos-book-upload-package.zip`, report exactly what was extracted and where.
- Keep v0.1 focused on publication, navigation, readability, and deployability.
- Keep the implementation maintainable for future ClimateOS repositories.
- Avoid unnecessary design complexity.
- Avoid adding packages that are not needed for Markdown rendering, routing, styling, or deployment.
- Do not perform remote deployment or GitHub publication actions unless separately requested.

## QCloud Implementation Notes

Before coding, QCloud should confirm:

- Whether `climateos-book-upload-package.zip` contains the canonical source assets to extract.
- Whether draft files such as `25-*draft.md` and `26-*draft.md` should appear in the public table of contents.
- Whether `torch-and-horizon/zh/` at the repository root is legacy placeholder content or should remain ignored by the website.

Recommended architecture:

- Use file-system-backed Markdown loading from `books/torch-and-horizon/zh/`.
- Keep chapter metadata derived from filenames and Markdown headings where practical.
- Keep route generation deterministic and build-time friendly.
- Keep UI components simple: layout, header, footer, table of contents, chapter navigation, chapter renderer.
- Copy or expose the PDF in a way that works with the chosen framework's static asset model, while preserving the canonical source PDF path.

## Future Extension Notes

v0.1 should leave room for:

- English translation pages.
- Additional ClimateOS Living Books.
- Search across books and chapters.
- Comment or feedback workflows.
- AI reading assistant integration.
- Multilingual publication workflow.
- Interactive ClimateOS concept map.
- Shared ClimateOS documentation, white papers, and public knowledge portals.

These future capabilities should not be implemented in v0.1. The v0.1 architecture should make them possible without turning the initial release into a broader platform build.
