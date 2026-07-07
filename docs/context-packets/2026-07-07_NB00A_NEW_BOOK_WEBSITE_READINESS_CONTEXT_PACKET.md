# NB-00A New Book Website Readiness Context Packet

**Document Type:** PRI-Style Context Packet
**Generated:** 2026-07-07
**Author:** QCLAW
**Status:** Ready for Review

---

## 1. Project Goal

Prepare a safe local and GitHub-ready workspace for adding a new book to the existing Climatebook / ClimateOS book series.

This is a **readiness-only** stage. No manuscript import, no production deployment, no backend involvement.

---

## 2. Current Stage

**Stage ID:** NB-00A
**Stage Name:** New Book Website Local Workspace & Repository Readiness
**Status:** Complete

### Stage Scope

- ✅ Verify correct repository
- ✅ Verify local workspace (D drive)
- ✅ Create readiness branch
- ✅ Create intake folder structure
- ✅ Create placeholder metadata
- ✅ Create context packet
- ✅ Commit and push

### Out of Scope

- ❌ Import manuscript
- ❌ Convert full book
- ❌ Create public book pages
- ❌ Modify production routes
- ❌ Deploy to production
- ❌ Involve Backend

---

## 3. User Intent

The user (舒民 / Simon Shu Min) intends to add a new book to the Climatebook / ClimateOS book series. The manuscript will be provided after this readiness check passes.

---

## 4. Role Division

| Role | Agent/System | Responsibility |
|------|--------------|----------------|
| **User** | 舒民 | Provides manuscript, approves stages |
| **Supervisor** | ChatGPT | Plans stages, creates task packets, reviews readiness |
| **Executor** | QCLAW | Executes engineering tasks, prepares workspace, reports evidence |
| **Visual Advisor** | Design01 | Design system, typography, layout consultation |
| **Backend** | Not involved | Explicitly excluded from this stage |
| **Codex** | Optional | Support only if needed |

---

## 5. Repository Information

| Field | Value |
|-------|-------|
| **Repository** | climateos-book |
| **Local Path** | `D:\QClawProjects\climateos-book` |
| **Remote URL** | `https://github.com/simon947161/climateos-book.git` |
| **Branch** | `chatgpt/nb-00a-new-book-readiness` |
| **Production URL** | https://climateos-book.vercel.app/ |

### Repository Context

- This is the official ClimateOS Living Book repository
- Existing book: `torch-and-horizon` (远方与火炬)
- Supports multilingual (zh/en) publication
- Built with Next.js, deployed on Vercel

---

## 6. Files Created

| Path | Purpose |
|------|---------|
| `books/_incoming/new-book/README.md` | Placeholder metadata and rules |
| `books/_incoming/new-book/raw/` | For original manuscript files |
| `books/_incoming/new-book/converted/` | For converted Markdown/MDX drafts |
| `books/_incoming/new-book/review/` | For chapter maps and intake reports |
| `books/_incoming/new-book/assets/` | For images and diagrams |
| `books/_incoming/new-book/notes/` | For conversion notes |
| `docs/context-packets/2026-07-07_NB00A_NEW_BOOK_WEBSITE_READINESS_CONTEXT_PACKET.md` | This context packet |

---

## 7. Constraints

### Must Not

- Import full manuscript
- Convert full book
- Create public book pages
- Modify production routes
- Change existing book content (`torch-and-horizon`)
- Deploy to production
- Involve Backend
- Create new repository
- Commit large raw files without approval
- Delete or move existing files

### Must

- Use D drive workspace
- Create readiness branch
- Commit only readiness files
- Report evidence

---

## 8. Verification Checklist

- [x] Correct repository verified: `climateos-book`
- [x] D drive workspace used: `D:\QClawProjects\climateos-book`
- [x] Readiness branch created: `chatgpt/nb-00a-new-book-readiness`
- [x] Intake folder exists: `books/_incoming/new-book/`
- [x] Context packet exists: `docs/context-packets/2026-07-07_...`
- [x] No manuscript imported
- [x] No production pages changed
- [x] No Backend participation

---

## 9. Next Steps

After NB-00A passes review:

```text
1. User provides manuscript
2. ChatGPT performs NB-00 Book Intake / Readiness Check
3. ChatGPT creates NB-01 QCLAW Task Packet
4. QCLAW begins controlled implementation
```

---

## 10. Evidence Report

| Field | Value |
|-------|-------|
| Repository | climateos-book |
| Local path | `D:\QClawProjects\climateos-book` |
| Remote URL | `https://github.com/simon947161/climateos-book.git` |
| Branch | `chatgpt/nb-00a-new-book-readiness` |
| Files created | 7 (1 README + 5 folders + 1 context packet) |
| Files modified | 0 |
| Commit hash | Pending |
| Push status | Pending |
| Build run | Not required |
| Production deployment | Not performed |
| Manuscript imported | No |
| Backend involved | No |
| Next recommended step | Wait for manuscript and ChatGPT NB-00 Intake Report |

---

## 11. Success Criteria

NB-00A is successful if:

- [x] Correct repository is verified
- [x] D drive workspace is used
- [x] Readiness branch is created
- [x] Intake folder exists
- [x] Context packet exists
- [x] No manuscript has been imported
- [x] No production pages are changed
- [x] No Backend participation occurs
- [ ] Commit and push succeed
- [ ] QCLAW provides evidence report

---

*End of Context Packet*
