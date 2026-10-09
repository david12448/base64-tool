# Shared project rules (snapshot)

Source of truth: david12448/project-common-rules / COMMON_RULES.md (v1.0, 2026-10-09). This is a public-safe copy; private details belong only in private systems.

## Asset protection
- Separate public normalized output from private collectors, source registry, raw snapshots, parser rules, credentials, and internal mappings.
- Limit bulk exposure with server-side controls, pagination and proportionate rate limiting; do not treat URL hiding or JavaScript obfuscation as security.
- Preserve lawful attribution, source links, and access requirements. Public information cannot be made impossible to copy.

## Learning log
- Record new problems and verified fixes in docs/TROUBLESHOOTING.md, including reproduction, cause, verification and prevention.
- Do not invent past incidents; cross-project lessons should be generalized without secrets.

## Change safety
- Keep existing files and project-specific rules intact. Prefer reviewable PRs, verify tests, do not auto-merge.
- Do not enable recurring progress notifications by default.

Central updates are proposed via PR; this snapshot is not automatically refreshed until a sync workflow is explicitly installed and tested.
