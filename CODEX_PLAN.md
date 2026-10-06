# SnapVault web integration plan

## Current assessment

- `main` is clean and matches `origin/main`.
- The site links to the SnapVault app repository and links back to `naj-dev.com`.
- A local build in the prior audit was blocked by permission to open the ignored `.next/trace` artifact; do not treat that local artifact as source code or commit it.

## Work items

1. Validate the production build from a clean, writable workspace.
   - Run the package-manager install command specified by the lockfile, then lint, test (if present), and build.
   - If `.next` ownership/permissions prevent a local build, remove only the generated `.next` directory after confirming it is ignored; never modify application source to work around it.
    - Commands (example):
       - Install (use lockfile): `npm ci`
       - Lint: `npm run lint`
       - Build: `npm run build`
       - Format check: `npm run format`
    - Notes on `.next` artifacts:
       - If a local build fails due to `.next` permission/ownership, confirm `.next` is listed in `.gitignore` and then remove it with `rm -rf .next` before rebuilding.
       - Do not check generated `.next` artifacts into source control.

2. Verify outbound project links.
   - Confirm the app repository, release/download, license, and `naj-dev.com` links resolve to their intended destinations.
  - Add automated link checks where the existing test stack supports them. Example approaches:
    - Add a CI job that runs a link-checker against the deployed site or a local preview server. Example (ad-hoc): `npx linkinator http://localhost:3000` after `npm run build && npm run start`.
    - Or run a crawler against the static output (if you export static files) with `npx linkinator ./out`.
    - Prefer GitHub Actions `lychee-action` or similar for automated PR checks.

3. Coordinate the two-way project relationship.
   - Keep `https://snapvault.naj-dev.com` as the canonical marketing-site URL in metadata, sitemap/canonical configuration, and public docs.
   - After `naj-dev` adds its live project link, manually validate both directions: portfolio to this site, and this site's footer to the portfolio.

4. Deploy only after verification.
   - Confirm the production domain, TLS, canonical URL, and social metadata after deployment.

## Owner, branching, and timeline

- **Owner:** Assign a repository owner for this plan (suggest: `@najchris11`) to coordinate verification and deployment.
- **Branch:** Create a branch named `codex/update-plan` for changes to this plan and any CI additions; open a PR to `main` with the checklist below.
- **Timeline:** Aim to complete verification and CI additions within 3 business days of starting work.

## PR checklist (for plan / CI changes)

- Include `package-lock.json` aware install step (use `npm ci`).
- Add a CI job or workflow file that runs `npm ci`, `npm run lint`, and `npm run build` for PRs.
- Add link-check job or document how to run link checks locally.
- Document `.next` handling in the README or in this plan if relevant.


## Acceptance criteria

- A clean production build succeeds.
- Public SnapVault and portfolio links are valid in production.
- The canonical site URL is consistently `https://snapvault.naj-dev.com`.
