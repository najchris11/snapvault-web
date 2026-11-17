import Image from 'next/image';
import { DownloadButton } from '@/components/download-button';
import { Button } from '@/components/ui/button';
import { Countdown } from '@/components/countdown';
import { REPO_URL } from '@/lib/links';

export function Hero() {
  return (
    <section className="grid gap-14 pb-16 pt-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14 md:pt-24">
      <div>
        <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          Open source · GPL-3.0 · No uploads, ever
        </div>

        <h1 className="mt-4 text-balance text-[42px] font-bold leading-[1.05] tracking-tight md:text-[52px]">
          Your Snapchat memories, <span className="text-primary-strong">restored</span> — not just
          exported.
        </h1>

        <p className="mt-5 max-w-[46ch] text-pretty text-[17px] leading-relaxed text-muted-foreground">
          Snapchat&apos;s export gives you a folder of dateless, GPS-less files with edits and
          originals scattered apart. SnapVault puts it all back together — offline, on your machine,
          for free.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <DownloadButton />
          <Button asChild variant="ghost">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              View source
            </a>
          </Button>
        </div>

        <div className="mt-6">
          <Countdown />
        </div>
        <p className="mt-2.5 max-w-[52ch] text-[12px] leading-relaxed text-muted-foreground/70">
          Applies to Memories older than a year that fall outside your oldest 5GB on Snapchat&apos;s
          free tier — Snap isn&apos;t deleting them, but starting January 2027 they&apos;re archived
          behind a paid plan until you upgrade. Back it up now and keep it wherever you actually
          want it — your own computer, Apple Photos, Google Photos, Immich, whatever you use.{' '}
          <a
            href="https://help.snapchat.com/hc/en-us/articles/41291271694228-How-do-I-manage-my-Memories-storage"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-dotted underline-offset-2 hover:text-foreground"
          >
            Source
          </a>
          .
        </p>
      </div>

      <HeroPreview />
    </section>
  );
}

function HeroPreview() {
  return (
    <figure className="glass overflow-hidden rounded-2xl border border-border p-3 shadow-2xl">
      <a href="/screenshots/dashboard.png" target="_blank" rel="noopener noreferrer">
        <Image
          src="/screenshots/dashboard.png"
          alt="SnapVault Dashboard with automatic export selection, metadata, overlay, and original-preservation controls"
          width={1024}
          height={768}
          priority
          className="h-auto w-full rounded-xl"
        />
      </a>
      <figcaption className="px-1 pt-3 text-xs text-muted-foreground">
        Current desktop Dashboard. Open the screenshot to inspect the controls.
      </figcaption>
    </figure>
  );
}
