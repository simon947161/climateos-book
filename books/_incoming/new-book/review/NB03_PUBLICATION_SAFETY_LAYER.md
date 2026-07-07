# NB-03 Publication Safety Layer

**Book:** 智元纪战略总纲 / Epoch of Intelligence
**Slug:** zhiyuanji
**Created:** 2026-07-07
**Task:** NB-03 QCLAW Task Packet

---

## Purpose

This document establishes the publication safety layer for 《智元纪战略总纲》 before any chapter body text is imported into the repository.

The safety layer ensures that:
1. All stakeholders understand the draft status
2. Content risks are clearly identified
3. No unauthorized publication occurs
4. Appropriate reviews are completed before content release

---

## Current Draft Status

| Field | Value |
|-------|-------|
| Publication Status | Private Draft |
| Review Status | Author Review Needed |
| Public Access | Not Available |
| Robots | noindex, nofollow |
| Manuscript Location | Local staging only, not committed |
| Chapter Body Text | Not committed |
| Public Navigation | Not linked |

---

## Why Safety Layer Is Required

The manuscript contains content that requires careful review before any publication:

### High-Risk Content

| Chapter | Risk Type | Specific Content |
|---------|-----------|------------------|
| 4 | Financial | RWA tokenization, stablecoin design, carbon credits, CBAM |
| 5 | Geopolitical | Energy sovereignty, governance reconstruction, post-national structures |
| 7 | Multi-domain | Multipolar analysis, DAO, NFT, stablecoin, China-EU-US relations |

### Medium-Risk Content

| Chapter | Risk Type | Specific Content |
|---------|-----------|------------------|
| 3 | Privacy | Personal data collection, wearable devices, behavior monitoring |
| 6 | International | NEOM (Saudi Arabia), Batlow (Australia), international lab references |

### Low-Risk Content

| Chapter | Content Type |
|---------|--------------|
| 0 | Outline only |
| 1 | Environmental analysis, ecological crisis discussion |
| 2 | AI system architecture, technical design |
| 8 | Philosophical reflection, civilizational discourse |

---

## Content Release Rule

**No chapter body text may be committed until the author confirms the release level.**

### Release Level Framework

| Level | Scope | Status | Required Approvals |
|-------|-------|--------|-------------------|
| **Level 0** | Metadata only, no chapter body text | ✅ Current | None required |
| **Level 1** | Low-risk chapters (0, 1, 2, 8) | ⏳ Pending | Author approval |
| **Level 2** | Medium-risk chapters (3, 6) | ⏳ Pending | Author approval + Privacy review + Partner consent verification |
| **Level 3** | High-risk chapters (4, 5, 7) | ⏳ Pending | Author approval + Legal review + Geopolitical review + Financial/regulatory review |

### Decision Gate

Before any Level 1+ content import:

> **Author must explicitly confirm the approved release level.**

This confirmation should be documented in the next task packet.

---

## GitHub vs Private Publication

### Important Clarification

**Committing to GitHub ≠ Private Publication**

Even if the repository is public or becomes public:

1. `robots: noindex` prevents search engine indexing
2. No public navigation links prevents casual discovery
3. Draft warnings on every page inform visitors of draft status
4. No chapter body text means no sensitive content is exposed

However, committed content on a public repository is technically accessible to anyone with the URL.

### Safety Assumptions

- Repository may be public or become public
- Committed content may be accessed by third parties
- `robots: noindex` is a request, not a guarantee
- Technical users can find content even without navigation links

### Mitigation

For maximum safety:
- Keep high-risk content local-only until expert reviews complete
- Consider repository access controls for sensitive draft content
- Consult with legal counsel before committing financial/regulatory content

---

## Draft Protections Implemented

### Technical Protections

| Protection | Location | Status |
|------------|----------|--------|
| robots: noindex, nofollow | page.tsx metadata | ✅ Active |
| Draft warning banner | page.tsx UI | ✅ Active |
| Publication safety notice | page.tsx UI | ✅ Active |
| Content risk disclosure | page.tsx UI | ✅ Active |
| README.md warnings | books/zhiyuanji/README.md | ✅ Active |
| Release level framework | This document | ✅ Defined |

### Process Protections

| Protection | Status |
|------------|--------|
| No public navigation links | ✅ Verified |
| No homepage references | ✅ Verified |
| No sitemap entries | ✅ Verified |
| No chapter body text committed | ✅ Verified |
| Raw PDF not committed | ✅ Verified |
| Converted manuscript not committed | ✅ Verified |
| Local chapter files not committed | ✅ Verified |

---

## Content Review Requirements

### Level 1 (Low-Risk Chapters)

| Review | Required | Scope |
|--------|----------|-------|
| Author review | Yes | Content accuracy, tone, readiness |
| Technical review | Optional | Code references, AI architecture |
| Legal review | No | N/A |

### Level 2 (Medium-Risk Chapters)

| Review | Required | Scope |
|--------|----------|-------|
| Author review | Yes | Content accuracy, tone, readiness |
| Privacy review | Yes (Chapter 3) | Personal data implications |
| Partner consent | Yes (Chapter 6) | NEOM, Batlow references |
| Legal review | Recommended | International references |

### Level 3 (High-Risk Chapters)

| Review | Required | Scope |
|--------|----------|-------|
| Author review | Yes | Content accuracy, tone, readiness |
| Legal review | Yes | Financial instruments, securities implications |
| Geopolitical review | Yes | Sovereignty, international relations |
| Financial/regulatory review | Yes | RWA, stablecoin, CBAM, DAO, NFT |
| Compliance review | Recommended | Cross-border implications |

---

## Next Decision Gate

**Before NB-04 or any chapter body text import:**

The author must confirm:

1. **Which release level is approved?** (Level 1, 2, 3, or remain at Level 0)
2. **Which specific chapters may be imported?**
3. **What review status should be applied?** (private-draft, author-review-needed, etc.)
4. **Should any content be modified before import?**

---

## Prohibited Actions

Do not:

- Import chapter body text without author approval
- Commit raw PDF
- Commit converted full manuscript
- Commit local chapter files
- Add public navigation links
- Add to homepage
- Add to sitemap
- Remove `robots: noindex`
- Remove draft warnings
- Create financial product claims
- Create investment language
- Create public-offering language
- Deploy to production

---

## Version History

| Date | Task | Change |
|------|------|--------|
| 2026-07-07 | NB-01 | Created private draft shell |
| 2026-07-07 | NB-02 | Chapter segmentation, risk identification |
| 2026-07-07 | NB-03 | Publication safety layer, release framework |

---

**Document Status:** Active
**Next Review:** Before any Level 1+ content import
**Owner:** Author (ChatGPT/QCLAW executor)
