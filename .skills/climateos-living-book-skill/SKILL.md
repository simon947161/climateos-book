# ClimateOS Living Book Skill

## Purpose

Use this skill to plan, build, review, or maintain Living Book repositories for ClimateOS-family publications.

A Living Book is a human-readable and AI-readable publication artifact that may include multilingual chapters, PDFs, public websites, source Markdown, metadata, navigation, feedback paths, and future interactive knowledge features.

The skill protects the integrity of original long-form text while making the publication structure accessible, navigable, deployable, and reusable across future ClimateOS repositories.

## Trigger Conditions

Use this skill when the user asks to:

- Build or review a ClimateOS Living Book website.
- Organize book source files, chapters, translations, PDFs, images, or metadata.
- Create a homepage, book landing page, chapter pages, table of contents, or navigation.
- Prepare public reading pages for Vercel, Cloudflare Pages, static hosting, or similar deployment.
- Add placeholders for multilingual publication workflows.
- Link a publication to feedback, GitHub Issues, project docs, or future AI reading assistance.
- Validate whether book source content is complete enough before implementation.

## Workflow

1. Confirm publication scope.
   - Identify the book title, languages, canonical source directory, expected PDF path, target URLs, and deployment target.
   - Read the task brief and existing README or publication notes before designing anything.

2. Inventory source assets.
   - Check chapter Markdown, PDFs, images, metadata, and language folders.
   - Separate canonical book text from placeholders, drafts, exports, generated files, and duplicate folders.
   - Confirm whether expected files exist before wiring them into routes.

3. Protect original text.
   - Do not rewrite, summarize, translate, reorder, or editorialize book chapters unless the user explicitly asks.
   - Preserve chapter titles, body text, language, and publication intent.
   - Treat transformations as formatting/rendering changes, not content authorship.

4. Design the publication structure.
   - Prefer quiet, readable, serious layouts for thought books.
   - Provide clear navigation: homepage, book landing page, language landing page, table of contents, previous/next chapter links, PDF link, feedback page, and about/context page when requested.
   - Keep multilingual placeholders explicit without pretending untranslated content exists.

5. Implement only after source readiness is clear.
   - If source content is missing, recommend a content normalization pass before building routes.
   - If source content is present, implement the smallest durable site architecture that supports future languages and interactive features.

6. Verify locally.
   - Confirm the site runs locally when implementation is requested.
   - Check that all available chapters render, navigation works, PDF links resolve, and README run/deploy instructions match the actual stack.

## Safety Rules

- Do not install third-party packages unless the user explicitly approves package installation.
- Do not invent missing chapters, translations, PDFs, or citations.
- Do not silently merge duplicate book directories.
- Do not rewrite original book text without explicit permission.
- Do not introduce AI reading, search, comments, or interactive systems into v0.1 unless requested.
- Do not make remote deployment or GitHub publication changes unless explicitly requested.
- Keep public-facing content serious, readable, and aligned with ClimateOS governance and evidence values.

## Output Format

For inspection or planning tasks:

```markdown
## Living Book Scope

- Book:
- Languages:
- Canonical source path:
- Expected public routes:

## Source Inventory

- Chapters:
- PDF:
- Images:
- Metadata:
- Placeholders:
- Duplicates or conflicts:

## Readiness Assessment

- Ready:
- Blocked by:
- Assumptions:

## Recommended Next Step

1. ...
```

For implementation tasks:

```markdown
## Completed

- ...

## Files Created

- `path`

## Files Modified

- `path`

## Verification

- Command:
- Result:

## Remaining Risks

- ...
```

Always distinguish source-content gaps from website-code gaps.
