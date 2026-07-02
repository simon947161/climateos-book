# ClimateOS Living Books Website

A Next.js + TypeScript website for publishing and reading ClimateOS Living Books online.

## Features (v0.1)

- ✅ Online reading of Markdown-based books
- ✅ Table of contents with chapter navigation
- ✅ Previous/Next chapter navigation
- ✅ PDF download link
- ✅ Multilingual support (placeholder for English)
- ✅ Feedback page (links to GitHub Issues)
- ✅ About ClimateOS page
- ✅ Responsive design (desktop + mobile)
- ✅ Clean, readable typography

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Markdown Processing:** remark + remark-html
- **Frontmatter:** gray-matter

## Project Structure

```
website/
├── app/                          # Next.js app router
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Global styles
│   ├── books/torch-and-horizon/
│   │   ├── page.tsx              # Book landing page
│   │   ├── [lang]/page.tsx      # Language selection / TOC
│   │   └── [lang]/[chapter]/page.tsx  # Chapter reader
│   ├── feedback/page.tsx         # Feedback page
│   └── about-climateos/page.tsx # About page
├── components/                   # Reusable components
│   ├── Layout.tsx               # Site layout (header, footer)
│   ├── TableOfContents.tsx      # Chapter list
│   ├── ChapterNavigation.tsx    # Prev/Next navigation
│   └── LanguageSwitcher.tsx     # Language selection
├── lib/                         # Utility functions
│   └── chapters.ts              # Markdown loading/parsing
├── books/                       # Book content (canonical source)
│   └── torch-and-horizon/
│       ├── zh/                  # Chinese chapters (Markdown)
│       ├── en/                  # English chapters (placeholder)
│       ├── images/              # Figures and diagrams
│       └── pdf/                 # Downloadable PDFs
└── public/                      # Static assets
```

## Local Setup

### Prerequisites

- Node.js 18.x or later
- npm (or yarn/pnpm)

### Installation

```bash
cd website
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Production Start

```bash
npm run start
```

## Adding Book Content

### Chinese Chapters

Place Markdown files in `books/torch-and-horizon/zh/`.

**Naming Convention:** Use numeric prefix for ordering:
```
01-序言.md
02-气候系统基础.md
03-微气候设计.md
...
```

The table of contents and navigation will be automatically generated based on filename order.

### Chapter Metadata

Chapter metadata is extracted automatically from the Markdown files:

- **Title:** First `# Heading` in the file
- **Order:** Numeric prefix in filename (01, 02, etc.)
- **Slug:** Filename without `.md` extension

### PDF Download

Place the PDF file at:
```
books/torch-and-horizon/pdf/torch-and-horizon-v1.pdf
```

The download link on the book landing page will automatically work.

**Note:** For deployment platforms:
- Vercel: Max 100MB per file
- Cloudflare Pages: Max 25MB per file

If the PDF exceeds these limits, consider:
- Hosting the PDF externally (e.g., GitHub Releases)
- Splitting into smaller files
- Using a CDN

## Deployment

### Vercel

1. Push the repository to GitHub
2. Import the project in Vercel
3. Set the root directory to `website`
4. Deploy

**Build Command:** `npm run build`  
**Output Directory:** `.next`

### Cloudflare Pages

1. Push the repository to GitHub
2. Create a new Cloudflare Pages project
3. Set build directory to `website`
4. Build command: `npm run build`
5. Output directory: `.next`

**Note:** Cloudflare Pages has a 25MB file size limit. Ensure the PDF (if included) is under this limit.

## Environment Variables

No environment variables are required for v0.1.

Future versions may include:
- `NEXT_PUBLIC_GITHUB_REPO` - GitHub repository for feedback
- `NEXT_PUBLIC_PDF_URL` - External PDF hosting URL

## Future Extensions (v0.2+)

- [ ] Search across books and chapters
- [ ] English translation pages
- [ ] Comments/feedback backend
- [ ] AI reading assistant
- [ ] Interactive concept maps
- [ ] Additional ClimateOS Living Books
- [ ] Multilingual publication workflow

## Contributing

This is an open-source project. Contributions are welcome via:

1. **GitHub Issues:** Report bugs, suggest improvements
2. **Pull Requests:** Submit content, fixes, or features
3. **Discussions:** Share ideas and feedback

GitHub Repository: [simon947161/climateos-book](https://github.com/simon947161/climateos-book)

## License

[Add your license here]

## Contact

For questions or assistance:
- Open a GitHub Issue
- Email: [your-email@example.com]

---

**Built with care for the climate design community.**
