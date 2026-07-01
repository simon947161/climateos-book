# ClimateOS PR Review Skill

## Purpose

Use this skill to review pull requests, local diffs, commits, or proposed changes in ClimateOS-family repositories.

The skill emphasizes governance, validation, source-of-truth alignment, architectural continuity, evidence integrity, and practical merge readiness.

It is suitable for code, documentation, schemas, release packaging, Living Book publication work, roadmap updates, and validation-framework changes.

## Trigger Conditions

Use this skill when the user asks to:

- Review a PR, branch, commit, diff, or set of changed files.
- Check whether changes are ready to merge, commit, publish, or hand off.
- Validate documentation-only, release, roadmap, schema, website, or runtime-preparation work.
- Compare implementation against a task brief, issue, roadmap, architecture decision, or definition of done.
- Identify bugs, regressions, missing tests, governance risks, or weak assumptions.
- Prepare GitHub-ready review feedback or a review summary.

## Workflow

1. Establish the review target.
   - Identify the repo root, branch, base branch, changed files, and task brief or intended outcome.
   - Confirm whether the review should be read-only.
   - If reviewing a local diff, inspect `git status --short` and relevant diffs.

2. Read source-of-truth documents.
   - Inspect user-named briefs, README files, roadmap docs, schemas, tests, release docs, or architecture records before judging the change.
   - Treat local source files as the primary evidence.

3. Review by risk category.
   - Correctness: does the change do what the task requires?
   - Architecture: does it preserve intended boundaries and avoid hidden redesign?
   - Governance: does it maintain review gates, evidence traceability, human oversight, and publication boundaries?
   - Validation: are tests, checks, examples, schemas, links, and generated outputs current?
   - Documentation: does the public explanation match the implementation?
   - Operations: are run, deploy, release, or migration instructions complete and accurate?

4. Verify where feasible.
   - Run existing lightweight tests or checks when appropriate and allowed.
   - For documentation-only work, verify links, file presence, indexes, and generated-output drift.
   - For website work, verify local run/build behavior when dependencies already exist or installation has been approved.

5. Report findings first.
   - Lead with actionable findings ordered by severity.
   - Include file paths and line references when possible.
   - Separate confirmed issues from assumptions, open questions, and recommendations.

## Safety Rules

- Do not modify files during a review unless the user explicitly asks to fix issues.
- Do not push, publish, merge, approve, or request changes on GitHub unless explicitly requested.
- Do not run third-party package installation unless explicitly approved.
- Do not treat passing tests as proof of architectural or governance correctness.
- Do not treat documentation claims as true without checking the referenced files where feasible.
- Do not mark work complete if the local repo state, tests, source content, or definition of done contradicts the claim.
- Preserve the difference between documentation-only changes, runtime implementation, release packaging, and remote publication.

## Output Format

Use code-review style when reporting a review:

```markdown
## Findings

- [P1] Title
  - Evidence: `path:line`
  - Why it matters:
  - Suggested fix:

- [P2] Title
  - Evidence: `path:line`
  - Why it matters:
  - Suggested fix:

## Open Questions

- ...

## Validation Performed

- Command or check:
- Result:

## Residual Risks

- ...

## Summary

- ...
```

Severity guide:

- `P0`: blocks use, corrupts data, breaks publication, or violates a hard safety/governance boundary.
- `P1`: likely user-visible failure, merge blocker, invalid validation, or major architecture mismatch.
- `P2`: important correctness, maintainability, traceability, or documentation issue.
- `P3`: minor improvement, clarity issue, or low-risk cleanup.

If there are no findings, say so directly and still list validation performed and residual risks.
