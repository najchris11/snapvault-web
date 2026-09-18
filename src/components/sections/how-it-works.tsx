const steps = [
  {
    num: '01',
    title: 'Request your export',
    body: 'From accounts.snapchat.com → My Data → Export Memories (or Settings → My Data in the app). Snapchat emails you a download link.',
  },
  {
    num: '02',
    title: 'Point SnapVault at it',
    body: 'Download and install SnapVault, then hand it your export zip files — no extracting, no CLI, no Python required.',
  },
  {
    num: '03',
    title: 'Choose your pipeline',
    body: 'Toggle date/GPS tagging, overlay merging, and duplicate cleanup. Every step runs entirely on your machine.',
  },
  {
    num: '04',
    title: 'Get your library back',
    body: 'Organized, correctly-dated, geotagged files — ready to drop into Apple Photos, Google Photos, Immich, or just a folder on your own drive.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14">
      <div className="mb-11 max-w-[620px]">
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          How it works
        </div>
        <h2 className="mt-3.5 text-[32px] font-bold">Four steps, start to finish.</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.num} className="glass flex flex-col gap-3 rounded-2xl p-6">
            <span className="font-mono text-[13px] font-medium text-primary-strong">
              {step.num}
            </span>
            <h3 className="text-[16px] font-semibold">{step.title}</h3>
            <p className="text-[13.5px] leading-relaxed text-muted-foreground">{step.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
