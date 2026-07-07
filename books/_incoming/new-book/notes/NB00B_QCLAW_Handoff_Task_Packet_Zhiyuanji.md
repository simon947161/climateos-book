# NB-00B QCLAW Task Packet  
**Task:** Manuscript Handoff and Local Conversion Staging  
**Book:** 《智元纪战略总纲：全球生态智能体与绿色治理系统构建计划》  
**Source:** `智元纪战略总纲.pdf`  
**Target repository:** `climateos-book`  
**Local path:** `D:\QClawProjects\climateos-book`  
**Branch:** `chatgpt/nb-00a-new-book-readiness` or a new child branch from it  
**Executor:** QCLAW  
**Supervisor:** ChatGPT  
**Backend:** Not involved  
**Production deployment:** Prohibited  

---

## 1. Purpose

Stage the new manuscript safely inside the local `climateos-book` workspace and prepare it for controlled review.

This task is **not** a website build task.

This task is **not** a public release task.

This task is **not** a full chapter import task.

---

## 2. Input Package

The user / ChatGPT handoff package contains:

```text
raw/智元纪战略总纲.pdf
converted/ZH_YUAN_JI_Strategic_Outline_extracted_draft.md
review/NB00_Book_Intake_Report_Zhiyuanji.md
notes/NB00B_QCLAW_Handoff_Task_Packet_Zhiyuanji.md
manifest.json
```

Expected source PDF SHA-256:

```text
fd0d20f1bc249193e99a27c4306b91096203289152a65b82907a667e35df3c84
```

Expected PDF size:

```text
4476079 bytes
```

Expected page count:

```text
27
```

---

## 3. Target Local Folder

Place files under:

```text
D:\QClawProjects\climateos-book\books\_incoming\new-book\
```

Recommended placement:

```text
books/_incoming/new-book/raw/智元纪战略总纲.pdf
books/_incoming/new-book/converted/ZH_YUAN_JI_Strategic_Outline_extracted_draft.md
books/_incoming/new-book/review/NB00_Book_Intake_Report_Zhiyuanji.md
books/_incoming/new-book/notes/NB00B_QCLAW_Handoff_Task_Packet_Zhiyuanji.md
books/_incoming/new-book/notes/manifest.json
```

---

## 4. Required Checks

QCLAW must verify:

```bash
git status
git branch --show-current
git remote -v
```

Then verify file presence and checksum:

```bash
certutil -hashfile books\_incoming\new-book\raw\智元纪战略总纲.pdf SHA256
```

The checksum must match:

```text
fd0d20f1bc249193e99a27c4306b91096203289152a65b82907a667e35df3c84
```

---

## 5. Git Safety Rule

Do **not** push the full manuscript to GitHub unless the user explicitly approves.

Reason:

- The repository may be public.
- The manuscript is not approved for public release.
- The document contains strategic, geopolitical, financial, RWA, and personal-data-governance content.

Recommended action for this task:

- Keep `raw/智元纪战略总纲.pdf` local only.
- Keep `converted/ZH_YUAN_JI_Strategic_Outline_extracted_draft.md` local only unless ChatGPT explicitly approves commit.
- It is acceptable to commit a small status note that says the manuscript was staged locally, without committing full content.

If QCLAW must commit something, commit only:

```text
books/_incoming/new-book/review/NB00_Book_Intake_Report_Zhiyuanji.md
books/_incoming/new-book/notes/NB00B_QCLAW_Handoff_Task_Packet_Zhiyuanji.md
```

Do not commit `raw/` or `converted/` unless approved.

---

## 6. Prohibited Actions

QCLAW must not:

- publish the book;
- create public routes;
- create visible website navigation;
- deploy to production;
- push raw PDF to public GitHub;
- push extracted full manuscript without approval;
- rewrite the book;
- summarize away the manuscript;
- involve Backend;
- modify previous books;
- modify `climate-leadership`;
- create a new repository.

---

## 7. Required Evidence Report

After staging, QCLAW must report:

```text
Repository:
Local path:
Remote URL:
Branch:
Files received:
PDF checksum:
Checksum match: yes/no
Files staged locally:
Files committed:
Commit hash, if any:
Push status:
Manuscript pushed to GitHub: yes/no
Production deployment: no
Backend involved: no
Next recommended step:
```

---

## 8. Success Criteria

NB-00B is successful only if:

- the manuscript package is placed in the local intake folder;
- PDF checksum matches;
- converted draft and intake report are present;
- no public site routes are created;
- no production deployment occurs;
- no Backend participation occurs;
- full manuscript is not pushed to public GitHub without approval;
- QCLAW returns an evidence report.

---

## 9. Next Step After NB-00B

After NB-00B passes:

```text
ChatGPT prepares NB-01 Task Packet
→ QCLAW creates private draft book metadata and route structure
→ still no public release
```
