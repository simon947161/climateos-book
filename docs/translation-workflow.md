# Translation Workflow v0.3

## Purpose

This document defines the ClimateOS Living Book translation pipeline for `Torch and Horizon / 远方与火炬`.

The current source of truth is the Chinese original:

```text
books/torch-and-horizon/zh/
```

Target languages:

- `en` - English
- `es` - Español
- `fr` - Français
- `de` - Deutsch
- `ar` - العربية, RTL

## Translation Direction

All translation work follows this direction:

```text
zh -> en/es/fr/de/ar
```

Do not translate from another machine draft unless a human reviewer explicitly approves that workflow.

## Required Status Labels

Every generated translation must be marked:

```text
machine-draft
```

The label `human-reviewed` is not allowed unless there is separate review evidence from a qualified reviewer or project owner.

Allowed translation statuses:

- `original` - Chinese source text.
- `pending` - no translation content is available yet.
- `machine-draft` - generated translation that has not been human reviewed.
- `reviewed` - approved after human review.

## Files and Paths

Source chapters:

```text
books/torch-and-horizon/zh/*.md
```

Target chapter folders:

```text
books/torch-and-horizon/en/
books/torch-and-horizon/es/
books/torch-and-horizon/fr/
books/torch-and-horizon/de/
books/torch-and-horizon/ar/
```

Translation status registry:

```text
books/torch-and-horizon/translation-status.json
```

Glossary:

```text
books/torch-and-horizon/glossary/translation-glossary.csv
```

## Pipeline Steps

1. Count source characters:

```bash
node scripts/count-translation-characters.mjs
```

2. Review glossary terms before generation.

3. Run the translation scaffold in dry-run mode:

```bash
node scripts/translate-book-google.mjs en
```

4. Only after explicit user authorization, run an execute-mode translation job.

5. Write generated files to the matching target locale folder.

6. Preserve Markdown filenames.

7. Mark generated files and registry entries as `machine-draft`.

8. Build the site and verify language routes.

9. Human review must happen before any status is upgraded to `reviewed`.

## Safety Rules

- Do not commit API keys or secrets.
- Do not call Google Translate or any translation API without explicit user authorization.
- Do not generate fake translated text.
- Do not mark machine output as human-reviewed.
- Do not delete or rewrite the Chinese original.
- Do not change Vercel deployment settings as part of translation generation.

## Current v0.3 State

The repository has translation architecture and workflow scaffolding only.

No real translation API has been run in v0.3.

No translated chapter text has been generated in v0.3.
