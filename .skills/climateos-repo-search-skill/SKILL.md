# ClimateOS Repo Search Skill

## Purpose

Use this skill to inspect, map, and summarize a ClimateOS-family repository before making recommendations or edits.

The skill supports long-term projects such as ClimateOS, EcoEngine, EcoChain, CCZPS, CarbonOS, ESG++ Agent, and related evidence, validation, governance, and publication repositories.

It prioritizes traceable source inspection over assumptions, and produces a reusable repository understanding that can guide implementation, documentation, review, or planning work.

## Trigger Conditions

Use this skill when the user asks to:

- Inspect a repository, folder, module, branch, or project structure.
- Find source-of-truth files, task briefs, roadmap documents, schemas, tests, or publication assets.
- Confirm repository purpose, current structure, readiness, or gaps.
- Prepare for website, documentation, validation, governance, or release work.
- Compare local repo state with a claimed architecture, report, review, or external summary.
- Continue work in a ClimateOS-family repo where prior context may affect the next step.

## Workflow

1. Establish scope.
   - Confirm the working directory and repository identity.
   - Check whether the user requested read-only inspection, additive edits, implementation, commit, or publication.
   - Treat remote actions as out of scope unless explicitly requested.

2. Inspect primary orientation files first.
   - Read files such as `README.md`, `AGENTS.md`, `.agents/`, `.codex/`, task briefs, project indexes, roadmap docs, and docs indexes when present.
   - Prefer the user-named files before broad exploration.

3. Map repository structure.
   - Use fast file listing and search tools such as `rg --files` where available.
   - Identify major folders, generated outputs, content sources, tests, schemas, docs, website/app code, and deployment files.
   - Note missing expected files separately from files that merely have different names.

4. Identify source-of-truth candidates.
   - Distinguish canonical inputs from derived outputs, drafts, archives, duplicated folders, generated files, and placeholders.
   - When two sources conflict, report the conflict and recommend a validation step before implementation.

5. Check local state when relevant.
   - Use `git status --short` for repo cleanliness.
   - Do not stage, commit, push, restore, or delete unless the user explicitly requests that action.

6. Produce a structured repo summary.
   - Separate observations, assumptions, interpretations, risks, validation requirements, and recommended next steps.
   - Include file paths for claims that depend on specific repo evidence.

## Safety Rules

- Do not modify files during read-only inspection.
- Do not accept external reports as current truth without checking local source files when feasible.
- Do not redesign repository architecture unless the task explicitly asks for architecture work or a real contradiction is found.
- Do not move, delete, or normalize content during inspection.
- Do not treat placeholders as complete content.
- Do not run package installation commands as part of search.
- Do not push to GitHub or perform other remote publication steps unless the user explicitly requests publication.
- Preserve user-provided boundaries such as "do not modify," "report only," "documentation only," or "no runtime implementation."

## Output Format

Use this structure unless the user requests a different format:

```markdown
## Repository Purpose

### Observations
- ...

### Interpretation
- ...

## Current Structure

- `path/` - role or status

## Source-of-Truth Notes

- Canonical inputs:
- Derived or generated outputs:
- Placeholders or missing assets:
- Conflicts or duplicates:

## Risks and Uncertainties

- ...

## Validation Requirements

- ...

## Recommended Next Step

1. ...
```

Keep the output concise enough to act on, but include enough traceability that another agent can continue from it.
