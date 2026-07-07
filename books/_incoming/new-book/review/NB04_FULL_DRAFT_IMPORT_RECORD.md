# NB-04 Full Draft Import Record

**Book:** 智元纪战略总纲 / Epoch of Intelligence
**Slug:** zhiyuanji
**Created:** 2026-07-07
**Task:** NB-04 QCLAW Task Packet - Full Author Draft Import
**Author Decision:** Full draft import approved by author

---

## Author Decision

The author explicitly decided that 《智元纪战略总纲》 should not be reduced to only low-risk chapters.

Author's position:
> This work is written to illuminate human futures.
> The author accepts responsibility for expressing the full civilizational and political meaning of the text.
> The manuscript should be treated as a serious public-facing strategic/civilizational writing project, not hidden because of risk labels.

Therefore, NB-04 is a **Full Author Draft Import** - importing all chapters 0–8 as author-review-needed draft pages.

---

## Import Scope

All 9 chapters imported:

| # | Slug | Title | Source File |
|---|------|-------|-------------|
| 0 | `00-outline` | 前置内容与大纲 | `00-frontmatter-and-outline.md` |
| 1 | `01-global-ecological-crisis` | 全球生态背景与人类危机的叙述 | `01-global-ecological-crisis.md` |
| 2 | `02-ai-system-architecture` | AI 系统构建与智能感知治理 | `02-ai-system-architecture.md` |
| 3 | `03-intelligent-sports-green-governance` | 智能体育与绿色社会政治的未来治理模式 | `03-intelligent-sports-green-governance.md` |
| 4 | `04-green-value-rwa-digital-system` | 绿色价值与 RWA 数字体系 | `04-green-value-rwa-digital-system.md` |
| 5 | `05-green-energy-ecological-sovereignty` | 绿色能源与生态权力重构 | `05-green-energy-ecological-sovereignty.md` |
| 6 | `06-rd-living-labs-knowledge-system` | 研发体系、试验场与知识产出系统 | `06-rd-living-labs-knowledge-system.md` |
| 7 | `07-strategic-mission-action-pathways` | 战略使命、政治经济判断与行动计划 | `07-strategic-mission-action-pathways.md` |
| 8 | `08-systemic-awakening-epilogue` | 总结章：系统觉醒与人类生态文明的再启动 | `08-systemic-awakening-epilogue.md` |

---

## Content Location

**Chapter files copied to:** `books/zhiyuanji/zh/`

- `books/zhiyuanji/zh/00-outline.md`
- `books/zhiyuanji/zh/01-global-ecological-crisis.md`
- `books/zhiyuanji/zh/02-ai-system-architecture.md`
- `books/zhiyuanji/zh/03-intelligent-sports-green-governance.md`
- `books/zhiyuanji/zh/04-green-value-rwa-digital-system.md`
- `books/zhiyuanji/zh/05-green-energy-ecological-sovereignty.md`
- `books/zhiyuanji/zh/06-rd-living-labs-knowledge-system.md`
- `books/zhiyuanji/zh/07-strategic-mission-action-pathways.md`
- `books/zhiyuanji/zh/08-systemic-awakening-epilogue.md`

**Note:** These are committed book content files, NOT the local source chapter files.

---

## Routes Created

### Book Index Page
- `/books/zhiyuanji` → redirects to `/books/zhiyuanji/zh`
- `/books/zhiyuanji/zh` → Chinese index with full TOC
- `/books/zhiyuanji/en` → English index (fallback to Chinese chapters)
- `/books/zhiyuanji/[locale]` → All 6 locales

### Chapter Pages
- `/books/zhiyuanji/zh/00-outline`
- `/books/zhiyuanji/zh/01-global-ecological-crisis`
- `/books/zhiyuanji/zh/02-ai-system-architecture`
- `/books/zhiyuanji/zh/03-intelligent-sports-green-governance`
- `/books/zhiyuanji/zh/04-green-value-rwa-digital-system`
- `/books/zhiyuanji/zh/05-green-energy-ecological-sovereignty`
- `/books/zhiyuanji/zh/06-rd-living-labs-knowledge-system`
- `/books/zhiyuanji/zh/07-strategic-mission-action-pathways`
- `/books/zhiyuanji/zh/08-systemic-awakening-epilogue`

**Total routes generated:** 58 static pages
- 6 locale index pages
- 54 chapter pages (9 chapters × 6 locales)

---

## Status

| Field | Value |
|-------|-------|
| Draft Status | author-review-needed |
| Formal Release | Pending |
| Public Navigation | Not added |
| Homepage Links | Not added |
| robots | noindex, nofollow |

---

## Publication Safety Notice

**Preserved on all pages:**

> ⚠️ 作者审校草稿 / Author Review Draft
>
> 本章属于《智元纪战略总纲》的作者审校草稿。本文是文明与战略思想文本，不构成金融、法律、投资、政策或公开募资建议。
>
> This chapter is part of the author-review draft of Epoch of Intelligence. It is a civilizational and strategic essay, not financial, legal, investment, policy, or public-offering advice.

---

## Content Handling

- ✅ Preserved all Chinese content
- ✅ Preserved English translations where present
- ✅ Preserved headings, bullet lists, tables
- ✅ No content deleted, softened, or censored
- ✅ No summarizing or shortening
- ✅ Author's argument preserved fully

---

## Architecture

**New files created:**
- `lib/zhiyuanji.ts` - Book data loader (following torch-and-horizon pattern)
- `app/books/zhiyuanji/[locale]/page.tsx` - Book index page with TOC
- `app/books/zhiyuanji/[locale]/[slug]/page.tsx` - Chapter pages

**Existing files modified:**
- `app/books/zhiyuanji/page.tsx` - Changed to redirect to `/books/zhiyuanji/zh`

---

## Release Levels

| Level | Scope | Status |
|-------|-------|--------|
| Level 0 | Metadata only | ❌ Superseded |
| Level 1 | Low-risk chapters only | ❌ Superseded |
| Level 2 | Medium-risk chapters after review | ❌ Superseded |
| **Full Import** | All chapters 0–8 | ✅ Current |

The author chose to skip the staged release levels and proceed directly to full draft import.

---

## Not Production Release

**NB-04 is NOT a production release.**

- No homepage link added
- No public navigation added
- `robots: noindex` preserved
- Draft notices visible on every page
- Formal public release pending NB-05 decision

---

## Next Step

**NB-05 (Future): Formal Public Release Preparation**

After author reviews the full draft site:
- Decide whether to remove `noindex`
- Decide whether to add homepage / series index navigation
- Decide whether to deploy production
- Create publication freeze record

---

## Files Committed

| File | Type |
|------|------|
| `lib/zhiyuanji.ts` | New |
| `app/books/zhiyuanji/page.tsx` | Modified |
| `app/books/zhiyuanji/[locale]/page.tsx` | New |
| `app/books/zhiyuanji/[locale]/[slug]/page.tsx` | New |
| `books/zhiyuanji/zh/00-outline.md` | New |
| `books/zhiyuanji/zh/01-global-ecological-crisis.md` | New |
| `books/zhiyuanji/zh/02-ai-system-architecture.md` | New |
| `books/zhiyuanji/zh/03-intelligent-sports-green-governance.md` | New |
| `books/zhiyuanji/zh/04-green-value-rwa-digital-system.md` | New |
| `books/zhiyuanji/zh/05-green-energy-ecological-sovereignty.md` | New |
| `books/zhiyuanji/zh/06-rd-living-labs-knowledge-system.md` | New |
| `books/zhiyuanji/zh/07-strategic-mission-action-pathways.md` | New |
| `books/zhiyuanji/zh/08-systemic-awakening-epilogue.md` | New |
| `books/_incoming/new-book/review/NB04_FULL_DRAFT_IMPORT_RECORD.md` | New |
| `books/_incoming/new-book/notes/NB04_EVIDENCE_REPORT.md` | New |

---

## Files NOT Committed

| File | Reason |
|------|--------|
| `books/_incoming/new-book/raw/智元纪战略总纲.pdf` | Raw PDF - per task rules |
| `books/_incoming/new-book/converted/ZH_YUAN_JI_Strategic_Outline_extracted_draft.md` | Full manuscript - per task rules |
| `books/_incoming/new-book/converted/chapters/*.md` | Local source chapter files - per task rules |

**Important:** The chapter content is committed as `books/zhiyuanji/zh/*.md` (book content files), NOT as `books/_incoming/new-book/converted/chapters/*.md` (source files).

---

**Last Updated:** 2026-07-07 (NB-04)
