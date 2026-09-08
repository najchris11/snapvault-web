import type { Metadata } from 'next';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { RELEASES_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Tutorial — SnapVault',
  description:
    'A walkthrough of exporting your Snapchat memories and running them through SnapVault.',
};

const steps = [
  {
    title: 'Request your export',
    body: 'accounts.snapchat.com → My Data → Export your Memories → Request Only Memories → All Time. Snapchat emails a download link, usually within a few hours.',
  },
  {
    title: 'Install SnapVault',
    body: 'Grab the installer for your OS from Releases. Releases aren’t code-signed yet, so macOS/Windows will show an unidentified-developer warning — that’s expected, not a red flag.',
  },
  {
    title: 'Point it at your export',
    body: 'Choose the folder containing your downloaded zip files as the source — don’t extract them first — and pick an output folder with a few extra gigabytes free.',
  },
  {
    title: 'Choose your pipeline',
    body: 'Turn on Write Date Metadata and Merge Video Overlays. Try Clean Duplicate Files with dry-run on first, so you can see what it would remove before anything happens.',
  },
  {
    title: 'Run it and review',
    body: 'Hit Start and watch the log panel. When it finishes, check the Library tab — click into a photo to see the recovered time, GPS, and overlay status.',
  },
];

export default function TutorialPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[820px] px-6 py-16">
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          Tutorial
        </div>
        <h1 className="mt-3.5 text-balance text-[36px] font-bold leading-tight">
          Exporting and processing your memories, start to finish.
        </h1>
        <p className="mt-4 max-w-[60ch] text-[15.5px] leading-relaxed text-muted-foreground">
          A two-minute walkthrough of requesting your Snapchat export and running it through
          SnapVault. The written steps below cover the same ground.
        </p>

        <div className="glass mt-9 aspect-video overflow-hidden rounded-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/6v-aR5Lgc1k"
            title="SnapVault Tutorial"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <ol className="mt-12 flex flex-col gap-5">
          {steps.map((step, i) => (
            <li key={step.title} className="glass flex gap-4 rounded-2xl p-5">
              <span className="font-mono text-sm font-medium text-primary-strong">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h2 className="text-[15px] font-semibold">{step.title}</h2>
                <p className="mt-1.5 text-[14px] leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-strong"
          >
            Download SnapVault
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
