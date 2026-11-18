# SnapVault Web

Marketing site for [SnapVault](https://github.com/najchris11/snapchat-memories-downloader) — a free, open-source, offline tool that restores dates, GPS, and merged overlays to Snapchat Memories exports.

**Live:** [snapvault.naj-dev.com](https://snapvault.naj-dev.com)

## Stack

Next.js (App Router) + Tailwind + shadcn/ui, matching the [naj-dev](https://github.com/najchris11/naj-dev) stack. Design tokens (color, type, spacing, radii) are lifted directly from SnapVault's own Stitch design system ("Pro Desktop Utility" — Deep Slate `#081425`, Electric Purple `#8B5CF6`, Inter + JetBrains Mono), so the site and the app read as one product.

## Getting started

```bash
npm install
npm run dev
```

## Project structure

- `src/app/page.tsx` — landing page, assembled from `src/components/sections/*`
- `src/app/tutorial/page.tsx` — tutorial walkthrough page, with the embedded video
- `src/components/countdown.tsx` — live countdown to January 2027, when Memories older than a year that fall outside Snapchat's 5GB free-storage cap get archived behind a paid plan ([source](https://help.snapchat.com/hc/en-us/articles/41291271694228-How-do-I-manage-my-Memories-storage)); update `PAYWALL_START` if Snap publishes a firmer date
- `src/lib/links.ts` — canonical repo/release/license/support URLs, used everywhere instead of hardcoding

## Deployment

Vercel, with `snapvault.naj-dev.com` as a custom domain routed through Cloudflare — same setup as `naj-dev` itself.

## License

This site describes [SnapVault](https://github.com/najchris11/snapchat-memories-downloader), which is GPL-3.0. The site's own code is unlicensed.

## Verification

Run `npm test`, `npm run lint`, `npx tsc --noEmit`, and `npm run build`.
The Node tests load the project's TypeScript using its installed compiler and render React components to HTML; no extra test runtime is required.

Installer actions resolve the latest release's actual versioned asset on click. Missing assets or GitHub failures fall back to Releases. macOS CPU type is selected explicitly because browser user agents do not reliably identify Apple Silicon.

Website analytics uses Vercel Web Analytics, omits query strings, and respects Do Not Track. Enable Web Analytics for the Vercel project before deploying to collect aggregate page views. This does not add telemetry to the SnapVault application.

The social image is 1200×630; screenshots show the current Compose UI with generated demo images, not private exports. The tutorial's VideoObject intentionally omits an unverified upload date; add the real publication date when available rather than inventing one.
