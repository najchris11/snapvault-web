const points = [
  'Every byte of processing happens on your machine',
  'No account, no sign-in, no telemetry',
  'GPL-3.0 licensed — read every line before you trust it',
  'Native installers for macOS, Windows, and Linux',
];

const stats: [string, string, boolean?][] = [
  ['Uploads made', '0', true],
  ['License', 'GPL-3.0'],
  ['Runs on', 'macOS · Windows · Linux'],
  ['Account required', 'No', true],
  ['Cost', 'Free', true],
];

export function Trust() {
  return (
    <section id="privacy" className="py-14">
      <div className="glass grid gap-10 rounded-2xl p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:p-12">
        <div>
          <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
            Privacy by construction
          </div>
          <h2 className="mt-3.5 text-[28px] font-bold leading-tight">
            Nothing to upload, because nothing gets uploaded.
          </h2>
          <p className="mt-3.5 text-[15px] leading-relaxed text-muted-foreground">
            SnapVault never uploads anything you process. Modern zip exports run entirely
            offline; the legacy link-based export downloads each memory directly from
            Snapchat&apos;s own servers, the same as clicking the link yourself — either way,
            there&apos;s no third-party server involved, and because it&apos;s fully open
            source, you don&apos;t have to take that on faith.
          </p>
          <div className="mt-5 flex flex-col gap-3.5">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3 text-sm">
                <span className="mt-px flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-success/20 text-[11px] font-bold text-success">
                  ✓
                </span>
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-surface-low p-5">
          {stats.map(([label, value, good]) => (
            <div
              key={label}
              className="flex items-baseline justify-between border-b border-white/[0.05] py-3 last:border-0"
            >
              <span className="text-[13px] text-muted-foreground">{label}</span>
              <span
                className={`font-mono text-sm font-medium ${good ? 'text-success' : 'text-foreground'}`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
