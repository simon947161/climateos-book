# ClimateOS Living Books

This repository hosts the official Living Books of ClimateOS.

Current publication:

- **Torch and Horizon / 远方与火炬**

Purpose:

- Make ClimateOS knowledge readable by humans and AI systems.
- Support multilingual public reading.
- Provide a future foundation for ClimateOS documentation, white papers, and interactive knowledge portals.

Author: Simon Shu Min

## Website

This repository now contains the v0.1 ClimateOS Living Book website as a root-level Next.js app.

Primary routes:

- `/`
- `/books/torch-and-horizon`
- `/books/torch-and-horizon/zh`
- `/books/torch-and-horizon/zh/[slug]`
- `/about-climateos`
- `/feedback`

## Source Content

- Chinese Markdown chapters: `books/torch-and-horizon/zh/`
- English translation placeholder: `books/torch-and-horizon/en/`
- PDF source: `books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf`

The website reads Chinese Markdown chapters from the source folder at build/runtime. It does not rewrite or summarize the original book text. English translation is a placeholder until translated content is added.

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

## Vercel Settings

```text
Root Directory: .
Framework Preset: Next.js
Build Command: npm run build
Output Directory: .next
```

Do not set the Vercel Root Directory to `website` for the current v0.1 site. The deployment entry is the repository root.
