# snapvault-web

Marketing site for [SnapVault](https://github.com/najchris11/snapchat-memories-downloader) — deployed at `snapvault.naj-dev.com`.

Built with **Next.js** (App Router) + **Tailwind** + **shadcn**, matching the stack used by [naj-dev](https://github.com/najchris11/naj-dev). Design tokens (color, type, spacing, radii) are lifted directly from SnapVault's own Stitch design system ("Pro Desktop Utility" — Deep Slate `#081425`, Electric Purple `#8B5CF6`, Inter + JetBrains Mono) so the site and the app read as one product.

## Getting started

```bash
npm install
npm run dev
```

## Structure

- `src/app/page.tsx` — landing page, assembled from `src/components/sections/*`
- `src/app/tutorial/page.tsx` — tutorial walkthrough page (video slot pending the recorded tutorial)
- `src/components/countdown.tsx` — live countdown to the end of Snapchat's announced 12-month free-storage grace period ([source](https://newsroom.snap.com/snap-memory-storage)); update `GRACE_PERIOD_END` if Snap publishes a firmer date
- `src/lib/links.ts` — canonical repo/release/license URLs, used everywhere instead of hardcoding

## Deployment

Vercel, with `snapvault.naj-dev.com` as a custom domain routed through Cloudflare — same setup as `naj-dev` itself.

## License

Site content describes [SnapVault](https://github.com/najchris11/snapchat-memories-downloader), which is GPL-3.0. This repo's own code has no license file yet — add one before making the repo public if that matters to you.
