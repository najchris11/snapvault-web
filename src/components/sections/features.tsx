export function Features() {
  return (
    <section id="features" className="py-14">
      <div className="mb-11 max-w-[620px]">
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          What it actually does
        </div>
        <h2 className="mt-3.5 text-[32px] font-bold">
          The parts that are genuinely hard, done for you.
        </h2>
        <p className="mt-3.5 text-[15.5px] leading-relaxed text-muted-foreground">
          Not a file mover — a real recovery pipeline built around how Snapchat&apos;s export
          format actually works.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <div className="glass col-span-full grid gap-7 rounded-2xl p-7 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary/[0.16] text-primary-strong">
              ◎
            </div>
            <h3 className="mt-3.5 text-[16.5px] font-semibold">Precise time + GPS recovery</h3>
            <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
              Filenames only carry a capture <em className="not-italic text-foreground">date</em>{' '}
              — but each file&apos;s exact timestamp is buried in the zip archive&apos;s own
              metadata. SnapVault cross-references that timestamp, second-for-second, against
              your export&apos;s JSON history to recover the time of day and GPS coordinates.
              When two records collide and disagree, it omits GPS rather than guess.
            </p>
          </div>
          <div className="overflow-x-auto rounded-[10px] border border-border bg-background/60 px-4 py-3.5 font-mono text-[11.5px] leading-[1.9] text-muted-foreground">
            <div>1. read extended-timestamp from zip entry</div>
            <div>
              2. match <span className="text-cyan">timestamp</span> → memories_history.json
            </div>
            <div>
              3. on exact match → write <span className="text-success">EXIF GPS + time</span>
            </div>
            <div>4. on conflict/no match → date-only, never guessed</div>
          </div>
        </div>

        <FeatureCard
          icon="▣"
          title="Overlay merging"
          body="Recombines every -main / -overlay pair — stickers, captions, drawings — into one finished photo or video."
          chip="NVENC · VideoToolbox · QSV · VAAPI"
        />
        <FeatureCard
          icon="⧉"
          title="Duplicate cleanup"
          body="Finds byte-identical copies and keeps the earliest-dated one. A dry-run mode shows exactly what would go, before anything does."
        />
        <FeatureCard
          icon="⇄"
          title="Two import modes"
          body="Modern multi-zip exports and the older link-based HTML/JSON format are both handled natively, with the same pipeline underneath."
        />
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  chip,
}: {
  icon: string;
  title: string;
  body: string;
  chip?: string;
}) {
  return (
    <div className="glass flex flex-col gap-3.5 rounded-2xl p-6 transition-transform hover:-translate-y-0.5">
      <div className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-primary/[0.16] text-primary-strong">
        {icon}
      </div>
      <h3 className="text-[16.5px] font-semibold">{title}</h3>
      <p className="text-[13.5px] leading-relaxed text-muted-foreground">{body}</p>
      {chip && (
        <span className="w-fit rounded-[5px] bg-info/[0.14] px-2 py-[3px] font-mono text-[10.5px] text-cyan">
          {chip}
        </span>
      )}
    </div>
  );
}
