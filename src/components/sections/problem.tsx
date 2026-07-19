export function Problem() {
  return (
    <section className="grid gap-10 py-14 md:grid-cols-2 md:items-center md:gap-10">
      <div>
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          The export problem
        </div>
        <h2 className="mt-3.5 text-balance text-[28px] font-bold leading-tight">
          Snapchat hands you files. Not memories.
        </h2>
        <p className="mt-4 text-pretty text-[15.5px] leading-relaxed text-muted-foreground">
          Every export is a pile of 2GB zip files. Photos and videos come out with only a bare
          capture <em className="not-italic text-foreground">date</em> — no time, no location —
          and the sticker or caption overlay Snapchat applied ships as a{' '}
          <em className="not-italic text-foreground">separate file</em> you have to match up
          yourself, by hand, across thousands of items.
        </p>
      </div>

      <div className="glass flex flex-col gap-2.5 rounded-2xl p-5">
        <FileRow name="2024-03-11_8f2c-main.jpg" tag="no time · no gps" />
        <FileRow name="2024-03-11_8f2c-overlay.png" tag="separate file" />
        <div className="flex items-center gap-2 self-center py-1 font-mono text-xs uppercase tracking-wide text-primary-strong">
          ↓ SnapVault ↓
        </div>
        <FileRow
          name="2024-03-11_8f2c.jpg"
          tag="2:41 PM · 39.96°N, 82.99°W · merged"
          good
        />
      </div>
    </section>
  );
}

function FileRow({ name, tag, good = false }: { name: string; tag: string; good?: boolean }) {
  return (
    <div
      className={`flex items-center justify-between rounded-lg border px-3 py-2.5 font-mono text-xs ${
        good ? 'border-success/40 bg-surface-low' : 'border-border bg-surface-low'
      }`}
    >
      <span>{name}</span>
      <span
        className={`shrink-0 pl-3 text-[10px] uppercase tracking-wide ${
          good ? 'text-success' : 'italic text-muted-foreground'
        }`}
      >
        {tag}
      </span>
    </div>
  );
}
