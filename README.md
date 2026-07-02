# ClimateOS Living Books

Open-source climate knowledge for designers, planners, and thinkers.

## About

ClimateOS Living Books is an open-source initiative to build and share climate-responsive design knowledge. This repository contains:

- **Book Content:** Markdown source files for Living Books
- **Website:** Next.js application for online reading (in `website/` directory)
- **PDFs:** Downloadable versions of published books

## Books

### Torch and Horizon / 远方与火炬 (v1.0)

A foundational exploration of climate-responsive design thinking. Bridging traditional wisdom and modern systems, this book offers a framework for understanding and designing with climate.

- **Chinese (中文):** Available now
- **English:** Translation in progress
- **PDF:** See `books/torch-and-horizon/pdf/`

## Website

The online reading platform is built with Next.js + TypeScript.

**Local Development:**
```bash
cd website
npm install
npm run dev
```

**Build:**
```bash
cd website
npm run build
```

For full details, see `website/README.md`.

## Project Structure

```
.
├── books/                          # Book content (canonical source)
│   └── torch-and-horizon/
│       ├── zh/                    # Chinese chapters (Markdown)
│       ├── en/                    # English chapters (placeholder)
│       ├── images/                # Figures and diagrams
│       └── pdf/                   # Downloadable PDFs
├── website/                        # Next.js website
│   ├── app/                      # Pages and routes
│   ├── components/               # Reusable components
│   ├── lib/                      # Utility functions
│   └── README.md                # Website documentation
├── docs/                          # Planning documents
└── README.md                     # This file
```

## Contributing

We welcome contributions! Here's how you can help:

### Report Issues
Found a typo, error, or have a suggestion?  
Open an issue: [github.com/simon947161/climateos-book/issues](https://github.com/simon947161/climateos-book/issues)

### Contribute Content
- Propose new chapters or sections
- Suggest improvements to existing content
- Help with translations

### Develop
- Improve the website
- Add new features
- Fix bugs

## Philosophy

ClimateOS Living Books are:

- **Open Access** - All content is freely accessible online
- **Open Source** - Content and code are open for contribution
- **Iterative** - Books improve over time through feedback and updates
- **Multilingual** - Knowledge should be accessible in multiple languages
- **Practical** - Theory connects to actionable design strategies

## Future Plans

- [ ] Complete English translation
- [ ] Add search functionality
- [ ] Interactive concept maps
- [ ] AI reading assistant
- [ ] Additional Living Books on specialized topics
- [ ] Community forum

## License

[Add your license here]

## Contact

- **GitHub Issues:** [simon947161/climateos-book/issues](https://github.com/simon947161/climateos-book/issues)
- **Email:** [your-email@example.com]

---

**Building climate-responsive design knowledge, together.**
