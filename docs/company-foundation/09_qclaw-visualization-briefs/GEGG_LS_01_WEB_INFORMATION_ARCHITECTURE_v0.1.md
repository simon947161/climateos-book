# GEGG-LS-01 Web Information Architecture v0.1

**Project:** GEGG Company Foundation Living Site v0.1  
**Status:** Founder Review Draft  
**Depends on:** GEGG-LS-00 Readiness Check / Scope Lock  
**Purpose:** Define the website structure, page hierarchy, navigation, page purpose, claim status, and content responsibilities before QClaw execution.

---

## 1. Site Architecture Principle

The site should be structured as a controlled public narrative system.

It should not simply present information.

It should guide the reader through a disciplined sequence:

```text
Identity
↓
Mission
↓
Theory
↓
Ethics
↓
Claim Boundary
↓
Project Geography
↓
Trust Architecture
```

The core logic is:

```text
GEGG is not claiming maturity first.
GEGG is showing how it intends to become trustworthy.
```

This is the safest and strongest narrative position.

---

## 2. Primary Sitemap

```text
/gegg
├── /identity
├── /mission
├── /theory
├── /ethics
├── /claim-boundary
├── /project-portfolio
│   ├── /projects/china-kunlun
│   ├── /projects/australia-regional
│   └── /projects/dryland-governance
└── /trust-architecture
```

---

## 3. Navigation Model

### 3.1 Recommended Header Navigation

```text
Home
Identity
Mission
Theory
Projects
Trust
Boundary
```

Reasoning:

```text
Boundary must be visible, not hidden.
Ethics can remain secondary because it is connected to Mission and Trust.
Projects must sit after Theory, not before it.
Trust must appear before or near Boundary because it explains how claims are controlled.
```

### 3.2 Footer Navigation

```text
Ethics
Claim Boundary
Founder Review Draft
Not Investment Advice
Not Legal / Financial Advice
No Institutional Endorsement Claimed
```

### 3.3 Internal Navigation Pattern

Each page should include:

```text
Previous concept
Current concept
Next concept
Related pages
```

Example:

```text
Identity → Mission → Theory
Theory → Ethics → Claim Boundary
Project Portfolio → Trust Architecture → Claim Boundary
```

---

## 4. Page Responsibility Table

| Route | Page | Claim Status | Purpose | Must Not Imply |
|---|---|---:|---|---|
| `/gegg` | Home | Review-required | Introduce the whole GEGG foundation draft | Formal company maturity, investment readiness |
| `/gegg/identity` | Identity | Review-required | Explain what GEGG is and is not | Incorporated legal entity unless confirmed |
| `/gegg/mission` | Mission / Vision / Values | Public-ready | Present low-risk values and commitments | Guaranteed impact |
| `/gegg/theory` | Theory Map | Review-required | Connect EcoChain, ESG++, CCZPS, Trust Architecture | Fully implemented system |
| `/gegg/ethics` | Ethics | Public-ready | Explain ethical commitments | Legal compliance guarantee |
| `/gegg/claim-boundary` | Claim Boundary | Public-ready | Define public/review/internal/do-not-publish tiers | That review-required claims are already public facts |
| `/gegg/project-portfolio` | Project Portfolio | Review-required | Introduce three geographic narrative lines | Confirmed projects or partnerships |
| `/gegg/projects/china-kunlun` | China / Kunlun Line | Review-required | Present Kunlun / Hongliuquan as archive/reference line | Government approval, financing, formal endorsement |
| `/gegg/projects/australia-regional` | Australia Regional Line | Review-required | Present Tumut / Batlow as observations and local relevance | Formal AKD/Tumut/Batlow project ownership |
| `/gegg/projects/dryland-governance` | Dryland Governance Line | Review-required | Present dryland / Saudi-Sahara-adjacent concepts | Confirmed Middle East or Iraq project delivery |
| `/gegg/trust-architecture` | Trust Architecture | Public-ready | Explain evidence, verification, human review | Verified impact without evidence |

---

## 5. Page-Level Information Architecture

## 5.1 `/gegg` — Home

### Page Role

The home page should provide a calm entry into GEGG as a founder-led ecological governance and project intelligence initiative under development.

### Recommended Sections

```text
Hero
Founder Review Draft label
One-sentence identity statement
Three core pillars
Project geography preview
Trust architecture preview
Claim boundary reminder
Navigation to major pages
```

### Suggested Core Message

```text
GEGG is a founder-led ecological governance and project intelligence initiative under development, designed to connect environmental action, transparent evidence, and human-reviewed AI assistance.
```

### Claim Status

```text
Review-required
```

---

## 5.2 `/gegg/identity` — Identity

### Page Role

Explain who GEGG is, why it exists, and what it is not.

### Recommended Sections

```text
What GEGG is
Why GEGG exists
What GEGG is developing
What GEGG is not
Current stage
Review-required identity notes
```

### Must Include

```text
founder-led initiative
under development
ecological governance
project intelligence
evidence-based public benefit
```

### Must Avoid

```text
incorporated company
multinational group
formal corporate entity
investment platform
asset finance platform
```

### Claim Status

```text
Review-required
```

---

## 5.3 `/gegg/mission` — Mission / Vision / Values

### Page Role

Present the safest public-facing foundation of GEGG.

### Recommended Sections

```text
Mission
Vision
Values
How values affect claims
Human review commitment
```

### Recommended Values

```text
Ecological responsibility
Evidence before claims
Transparency
Community benefit
Long-term stewardship
Human review
Cross-border respect
Anti-greenwashing
```

### Claim Status

```text
Public-ready
```

This page should be one of the cleanest and safest pages.

---

## 5.4 `/gegg/theory` — Theory Map

### Page Role

Show how GEGG’s conceptual frameworks relate to each other.

### Recommended Sections

```text
Theory map overview
EcoChain
ESG++
CCZPS
Trust Architecture
How these are designed to integrate
What remains under review
```

### Safe Integration Language

```text
These frameworks are designed to form a developing theory map for evidence-based ecological governance.
```

### Must Avoid

```text
already complete
fully verified
operational platform
market-ready product
```

### Claim Status

```text
Review-required
```

---

## 5.5 `/gegg/ethics` — Ethics Principles

### Page Role

Explain the ethical posture behind GEGG.

### Recommended Sections

```text
Why ethics comes before automation
Anti-greenwashing
Community benefit
Human accountability
Transparency with privacy
Cross-border respect
```

### Claim Status

```text
Public-ready
```

This page may be written more confidently because it expresses commitments, not external claims.

---

## 5.6 `/gegg/claim-boundary` — Claim Boundary

### Page Role

This is a central safety page.

It should clearly state what GEGG can say, what requires review, what stays internal, and what must not be published.

### Recommended Sections

```text
Why claim boundaries matter
Public-ready claims
Review-required claims
Internal-only material
Do-not-publish claims
How future claims are reviewed
```

### Required Four Tiers

```text
Public-ready
Review-required
Internal-only
Do-not-publish
```

### Claim Status

```text
Public-ready
```

This page should be visible from header navigation.

---

## 5.7 `/gegg/project-portfolio` — Project Portfolio

### Page Role

Introduce the three geographic narrative lines without implying confirmed project delivery.

### Recommended Sections

```text
Project geography overview
China / Kunlun reference line
Australia regional observation line
Dryland governance conceptual line
Evidence status disclaimer
Links to three project pages
```

### Safe Framing

```text
These lines are presented as review-required project geography references, not as confirmed public project claims.
```

### Claim Status

```text
Review-required
```

---

## 5.8 `/gegg/projects/china-kunlun` — China / Kunlun Line

### Page Role

Present Kunlun / Hongliuquan as strategic narrative and archive-based ecological governance references.

### Recommended Sections

```text
Reference line overview
Kunlun ecological governance context
Hongliuquan archive reference
Ecological value concepts
Evidence status
What is not claimed
```

### Must Not Claim

```text
government approval
confirmed financing
formal institutional endorsement
guaranteed ecological value
```

### Claim Status

```text
Review-required
```

---

## 5.9 `/gegg/projects/australia-regional` — Australia Regional Line

### Page Role

Present Tumut / Batlow / regional sustainability as observations and possible evidence pathways.

### Recommended Sections

```text
Regional observation overview
Tumut local context
Batlow community sustainability relevance
Project intelligence opportunity
Evidence under review
What is not claimed
```

### Must Not Claim

```text
formal AKD relationship
confirmed Tumut project
confirmed Batlow project
commercial engagement
project ownership
verified outcome
```

### Claim Status

```text
Review-required
```

---

## 5.10 `/gegg/projects/dryland-governance` — Dryland Governance Line

### Page Role

Present dryland governance as a conceptual line connected to ecological adaptation, desert-edge governance, and Saudi / Sahara-adjacent thinking.

### Recommended Sections

```text
Dryland governance overview
Saudi / Sahara-adjacent conceptual line
Dunhuang reference
Hongliuquan bridge reference
Evidence status
What is not claimed
```

### Must Not Claim

```text
Iraq project
Middle East project delivery
confirmed Saudi partnership
formal regional project
```

### Claim Status

```text
Review-required
```

---

## 5.11 `/gegg/trust-architecture` — Trust Architecture

### Page Role

Explain how GEGG intends to move from claims to evidence, from evidence to review, and from review to responsible action.

### Recommended Sections

```text
Why trust architecture matters
Evidence before claims
Verification pathway
Human review
Audit trail
Anti-greenwashing
How trust architecture applies to project intelligence
```

### Claim Status

```text
Public-ready
```

This page can be confident about principles, but not about verified external outcomes.

---

## 6. Global Page Components

Each page should include:

```text
Founder Review Draft banner
Claim status badge
Page title
Short subtitle
Main content sections
Related page links
Footer safety notice
No investment / legal / financial advice notice
No institutional endorsement notice
```

---

## 7. Claim Status Badge System

Use four visible claim labels:

```text
Public-ready
Review-required
Internal-only
Do-not-publish
```

For website pages, only the first two should appear as page-level status.

Do not create public pages for Internal-only or Do-not-publish materials.

---

## 8. Content Length Guidance

### Home

```text
Short, navigational, calm.
```

### Identity

```text
Medium length, explanatory.
```

### Mission / Ethics / Trust

```text
Clear and public-safe.
```

### Theory / Project Pages

```text
Cautious, labelled, evidence-aware.
```

### Claim Boundary

```text
Precise, structured, non-negotiable.
```

---

## 9. Visual Hierarchy

Recommended visual rhythm:

```text
Hero statement
↓
Status label
↓
Short explanatory block
↓
Card grid
↓
Evidence / caution note
↓
Related links
↓
Footer disclaimer
```

Do not use aggressive call-to-action buttons.

Use softer links:

```text
Explore the theory map
Review the claim boundary
See the trust architecture
Open the project geography
```

Avoid:

```text
Invest now
Partner with us
Join the platform
Launch token
See returns
Book a deal
```

---

## 10. Release Readiness Logic

This information architecture supports:

```text
Level 0 — Local Founder Review
```

It may later support:

```text
Level 1 — Private GitHub Repo Backup
Level 2 — Vercel Preview with noindex
```

It does not yet support:

```text
Level 3 — Public Website / Public Announcement
```

until founder review, entity status review, and claim boundary review are complete.

---

## 11. Acceptance Criteria for GEGG-LS-01

This information architecture is accepted when:

```text
- all 11 required routes are defined
- each page has a clear role
- each page has a claim status
- the project pages remain review-required
- claim boundary is visible in navigation
- public-ready pages do not contain risky external claims
- no investor, RWA, token, finance, or endorsement path is included
- QClaw can use this as the basis for controlled static prototype work
```

---

## 12. Next Step

The correct next document is:

```text
GEGG-LS-02 Page Copy Brief v0.1
```

This should provide short, conservative draft copy for each page before any further QClaw implementation or deployment decision.
