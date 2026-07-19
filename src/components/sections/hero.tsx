import { Button } from '@/components/ui/button';
import { Countdown } from '@/components/countdown';
import { RELEASES_URL, REPO_URL } from '@/lib/links';

export function Hero() {
  return (
    <section className="grid gap-14 pb-16 pt-16 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-14 md:pt-24">
      <div>
        <div className="flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))]" />
          Open source · GPL-3.0 · Zero network calls
        </div>

        <h1 className="mt-4 text-balance text-[42px] font-bold leading-[1.05] tracking-tight md:text-[52px]">
          Your Snapchat memories, <span className="text-primary-strong">restored</span> — not
          just exported.
        </h1>

        <p className="mt-5 max-w-[46ch] text-pretty text-[17px] leading-relaxed text-muted-foreground">
          Snapchat&apos;s export gives you a folder of dateless, GPS-less files with edits and
          originals scattered apart. SnapVault puts it all back together — offline, on your
          machine, for free.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="primary">
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
              Download for macOS, Windows, Linux
            </a>
          </Button>
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
          Applies to accounts with more than 5GB of Memories on Snapchat&apos;s free tier — Snap
          hasn&apos;t published an exact deletion date, so this counts down to the end of the
          announced 12-month grace period.{' '}
          <a
            href="https://newsroom.snap.com/snap-memory-storage"
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
    <div className="glass shadow-[0_40px_80px_-30px_rgba(0,0,0,0.5),0_10px_30px_-6px_hsl(var(--primary)/0.25)] rounded-2xl p-4">
      <div className="flex items-center gap-1.5 px-1 pb-3">
        <i className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <i className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
        <i className="h-2.5 w-2.5 rounded-full bg-muted-foreground/40" />
      </div>

      <div className="grid grid-cols-[108px_1fr] gap-4 max-[900px]:grid-cols-1">
        <div className="flex flex-col gap-1 max-[900px]:hidden">
          <div className="rounded-lg bg-primary/[0.18] px-2.5 py-2 text-xs font-semibold text-primary-strong">
            Dashboard
          </div>
          <div className="rounded-lg px-2.5 py-2 text-xs font-medium text-muted-foreground">
            Library
          </div>
          <div className="rounded-lg px-2.5 py-2 text-xs font-medium text-muted-foreground">
            Settings
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-lg border border-border bg-surface-low px-3 py-2.5 font-mono text-[11.5px] text-muted-foreground">
            ~/Downloads/mydata~export
          </div>

          <div className="flex items-center gap-3">
            <div
              className="flex h-[84px] w-[84px] shrink-0 items-center justify-center rounded-full"
              style={{
                background:
                  'conic-gradient(hsl(var(--primary)) 0deg 252deg, hsl(var(--card-highest)) 252deg 360deg)',
              }}
            >
              <div className="flex h-16 w-16 flex-col items-center justify-center rounded-full bg-card">
                <b className="font-mono text-[15px]">70%</b>
                <small className="text-[8px] uppercase tracking-wide text-muted-foreground">
                  syncing
                </small>
              </div>
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <ToggleRow label="Write Date Metadata" on />
              <ToggleRow label="Merge Video Overlays" on />
              <ToggleRow label="Clean Duplicate Files" />
            </div>
          </div>

          <div className="rounded-lg border border-border bg-background/60 px-3 py-2.5 font-mono text-[10.5px] leading-[1.8] text-muted-foreground">
            <div>
              <b className="font-medium text-success">[OK]</b> Matched GPS + time for 1,204 files
            </div>
            <div>
              <span className="text-cyan">[INFO]</span> Merging overlay pairs ·
              h264_videotoolbox
            </div>
            <div className="font-medium text-warning">
              [WARN] 3 files skipped, no timestamp match
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ToggleRow({ label, on = false }: { label: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between text-xs text-muted-foreground">
      {label}
      <div
        className={`relative h-[17px] w-[30px] shrink-0 rounded-full transition-colors ${
          on ? 'bg-primary' : 'bg-card-highest'
        }`}
      >
        <i
          className={`absolute top-0.5 h-3.5 w-3.5 rounded-full bg-white transition-all ${
            on ? 'left-[15px]' : 'left-0.5'
          }`}
        />
      </div>
    </div>
  );
}
