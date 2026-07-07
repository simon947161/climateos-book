# NB-05A Visual Design Record

**Book:** 智元纪战略总纲 / Epoch of Intelligence
**Slug:** zhiyuanji
**Created:** 2026-07-07
**Task:** NB-05A QCLAW Task Packet - Visual / Publication Design Pass
**Design Direction:** Design01 Visual Brief

---

## Design Direction Implemented

### Core Concept
```
东方留白 + 山河气韵 + 生态智能 + 文明系统
Eastern whitespace + Ecological civilization + Planetary intelligence
```

### Visual Keywords
- 宣纸 (Rice paper)
- 淡墨 (Pale ink)
- 山脉 (Mountain range)
- 河流 (River vein)
- 风场 (Wind field)
- 经脉 (Meridian)
- 星图 (Star map)
- 地球弧线 (Earth curve)
- 寺院般的安静 (Temple calmness)
- 绿色文明 (Green civilization)
- 未来书卷 (Future manuscript)

---

## Files Changed

### New Files Created

| File | Purpose | Size |
|------|---------|------|
| `styles/zhiyuanji.css` | Zhiyuanji visual system | 11,582 bytes |
| `books/_incoming/new-book/review/NB05A_VISUAL_DESIGN_RECORD.md` | This file | - |
| `books/_incoming/new-book/notes/NB05A_EVIDENCE_REPORT.md` | Evidence report | - |

### Files Modified

| File | Changes |
|------|---------|
| `app/books/zhiyuanji/[locale]/page.tsx` | Complete redesign with book entrance feel |
| `app/books/zhiyuanji/[locale]/[slug]/page.tsx` | Chapter page with publication layout |

---

## Typography Choices

### Chinese Font Stack
```css
font-family: "Noto Serif SC", "Songti SC", "SimSun", Georgia, "Times New Roman", serif;
```

- Song serif feeling for long-form Chinese text
- Publication quality
- Safe fallback to system fonts

### English Font Stack
```css
font-family: "Cormorant Garamond", "Georgia", serif;
```

- Elegant serif for English titles and subtitles
- Matches Chinese Song serif temperament
- Safe fallback

---

## Color Choices

### Zhiyuanji Color Palette

| Token | Value | Name | Usage |
|-------|-------|------|-------|
| `--zyj-bg` | `#f6f1e7` | Rice paper background | Main background |
| `--zyj-bg-soft` | `#fbf8f1` | Soft page surface | Cards, sections |
| `--zyj-ink` | `#1f2a25` | Ink green-black | Main text |
| `--zyj-muted` | `#66736c` | Muted text | Secondary text |
| `--zyj-line` | `#d8cdb8` | Paper line | Borders, dividers |
| `--zyj-jade` | `#2f6f5e` | Jade green | Ecological accent |
| `--zyj-deep-jade` | `#17483d` | Deep system green | Strong accent |
| `--zyj-gold` | `#b99555` | Civilizational gold | Status badge |
| `--zyj-mist` | `#e8eee8` | Ecological mist | Notice background |

### Color Philosophy
- Low saturation "paper-ink-jade" palette
- Warm rice-paper base
- Jade as ecological accent (restrained, not bright green)
- Gold as civilizational fire accent (sparingly)

---

## Layout Changes

### Book Homepage (`/books/zhiyuanji/[locale]/page.tsx`)

**Before:** Plain data page with simple list

**After:** Book entrance with:

1. **Hero Section**
   - Large title: 智元纪战略总纲
   - English title: Epoch of Intelligence
   - Bilingual subtitle
   - Status badge: "作者审校草稿"
   - Subtle mountain background motif (CSS gradient + SVG)

2. **Publication Status Grid**
   - Status: 作者审校草稿
   - Chapters: 全书导入 (0–8)
   - Release: 正式发布待定

3. **Publication Safety Notice**
   - Elegant card design
   - Bilingual safety statement
   - Non-financial/legal/investment advice disclaimer

4. **Chapter Constellation**
   - 9 chapter cards in responsive grid
   - Each card: chapter number + Chinese title + English subtitle
   - Hover effects with jade border

5. **Reading Guide**
   - Explanation of draft status

6. **Series Attribution**
   - "Climatebook / ClimateOS Book Series · 气候书系"

### Chapter Pages (`/books/zhiyuanji/[locale]/[slug]/page.tsx`)

**Before:** Simple page with content

**After:** Publication layout with:

1. **Chapter Header**
   - Large translucent chapter number watermark
   - Chapter label (序章/第一章/.../终章)
   - Chinese title (large)
   - English title (italic, muted)

2. **Draft Banner**
   - Elegant gradient (gold to jade)
   - Bilingual text
   - Non-financial/legal/investment advice reminder

3. **Article Body**
   - Max-width: 820px
   - Chinese line-height: 2.0
   - Paragraph spacing: 1.5rem
   - Section dividers with gradient line
   - English paragraphs styled as epigraphs (italic, muted, left border)

4. **Chapter Navigation**
   - Previous/next chapter links
   - Back to table of contents
   - Responsive layout for mobile

5. **Translation Notice** (for non-Chinese locales)
   - Clear notice that translation is not available
   - Chinese draft shown for reference
   - Bilingual message

---

## Visual Motifs

### Implemented Motifs

1. **Mountain Contour Line** (CSS + inline SVG)
   - Hero background
   - Subtle opacity (0.15)
   - Paper-line color

2. **Chapter Number Watermark**
   - Large translucent number
   - Behind chapter title
   - Elegant, not distracting

3. **Gradient Dividers**
   - Horizontal lines between sections
   - Fade in/out effect
   - Paper-line color

4. **Jade Accent Border**
   - Card hover effects
   - Chapter navigation links
   - Status badge border

5. **Paper Texture Feel**
   - Warm rice-paper background
   - Soft shadows
   - Layered surfaces

### Not Implemented (Future Optional)
- River vein separator (CSS/SVG)
- Earth arc gradient
- Ecological node network
- "智元纪" seal mark

---

## Multilingual Notice Handling

### Chinese Locale (`/books/zhiyuanji/zh`)
- Full content
- No translation notice

### Other Locales (`/books/zhiyuanji/{en,es,fr,de,ar}`)
- Display Chinese content (fallback)
- Show clear notice:
  ```
  本语言版本尚未完成翻译。当前显示中文作者审校草稿供参考。
  This translation is not yet available. The Chinese author-review draft is shown for reference.
  ```
- Styled as elegant notice box

---

## Mobile Considerations

### Responsive Design

1. **Typography**
   - Fluid font sizes with `clamp()`
   - Reduced line-height on small screens

2. **Layout**
   - Chapter grid: single column on mobile
   - Chapter navigation: stacked vertically
   - Tables: horizontal scroll on small screens

3. **Spacing**
   - Reduced padding on mobile
   - Touch-friendly card sizes

4. **Tables**
   - Overflow-x: auto for wide tables
   - Maintains readability of Chapter 7 tables

---

## Draft Status Treatment

### Homepage
- Status badge in hero
- Publication status grid
- Safety notice card
- Reading guide section

### Chapter Pages
- Draft banner (elegant, not alarming)
- Non-financial/legal/investment advice statement
- Integrated into design, not visually noisy

---

## Known Limitations

1. **Font Loading**
   - External fonts (Noto Serif SC, Cormorant Garamond) not loaded
   - Falls back to system fonts
   - Works without external font loading

2. **Image Assets**
   - No custom images added
   - Uses CSS/SVG for visual motifs
   - Image slots can be added later if needed

3. **Shared Components**
   - No changes to shared layout components
   - Only zhiyuanji-specific styles and pages

---

## Asset Needs (Optional Future)

If visual assets are desired:

1. **Homepage Hero Visual** (optional)
   - Mountain/landscape illustration
   - Low opacity background

2. **Chapter Header Images** (optional)
   - Thematic visual per chapter
   - Small, integrated into header

3. **Background Pattern** (optional)
   - Subtle texture
   - Paper-like feel

These are NOT required for NB-05A and can be added in future iterations.

---

## Compliance Verification

| Requirement | Status |
|-------------|--------|
| Visual quality improved | ✓ |
| Readability preserved | ✓ |
| Author-review notices visible | ✓ |
| Publication safety notices visible | ✓ |
| robots: noindex preserved | ✓ |
| No public navigation added | ✓ |
| No production deployment | ✓ |
| Content not rewritten | ✓ |
| Mobile-friendly | ✓ |
| Tables readable | ✓ |
| Bilingual paragraphs clear | ✓ |
| No shared books broken | ✓ |

---

## Files Not Committed

| File | Reason |
|------|--------|
| `books/_incoming/new-book/raw/` | Raw PDF - per task rules |
| `books/_incoming/new-book/converted/` | Full manuscript - per task rules |
| `package-lock.json` | Generated file |

---

**Last Updated:** 2026-07-07 (NB-05A)
