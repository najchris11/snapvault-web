import Image from 'next/image';
import { StructuredData } from '@/components/structured-data';
import { videoData } from '@/lib/structured-data';
import type { Metadata } from 'next';

import { Nav } from '@/components/nav';
import { Footer } from '@/components/footer';
import { TUTORIAL_VIDEO_ID } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Tutorial — SnapVault',
  alternates: { canonical: '/tutorial' },
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
    body: 'Choose your computer’s installer below. Apple Silicon and Intel Macs use different downloads. Current direct installers are unsigned: verify the source, then follow the platform-specific installation guidance.',
  },
  {
    title: 'Point it at your export',
    body: 'Choose export file or Choose export folder; SnapVault detects ZIP archives or memories history automatically. Keep all ZIP parts together and select a separate output folder with enough free space.',
  },
  {
    title: 'Choose your pipeline',
    body: 'Use Write date and location metadata with Precise time + GPS matching, and Combine photo and video overlays. Enable Keep original unmerged files if you want clean copies too. Leave Preview duplicate removal enabled while reviewing your first run.',
  },
  {
    title: 'Run it and review',
    body: 'Hit Start and watch the log panel. When it finishes, check the Library tab — click into a photo to see the recovered time, GPS, and overlay status.',
  },
];

export default function TutorialPage() {
  return (
    <>
      <StructuredData data={videoData} />
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
            src={`https://www.youtube.com/embed/${TUTORIAL_VIDEO_ID}`}
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

        <section className="mt-12 space-y-6" aria-label="Current app screenshots">
          <h2 className="text-2xl font-semibold">What you’ll see in SnapVault</h2>
          <figure>
            <Image
              className="rounded-xl border border-border"
              src="/screenshots/dashboard.png"
              alt="Current Dashboard controls and import progress"
              width={1024}
              height={768}
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Choose your source and review the run options.
            </figcaption>
          </figure>
          <figure>
            <Image
              className="rounded-xl border border-border"
              src="/screenshots/library.png"
              alt="SnapVault Library with generated sample images, date sorting, filters, and inspector"
              width={1024}
              height={768}
            />
            <figcaption className="mt-2 text-xs text-muted-foreground">
              Actual Library UI with generated demo media; no personal photos are shown.
            </figcaption>
          </figure>
        </section>
        <figure className="mt-10">
          <Image
            src="/screenshots/overlay-demo.gif"
            alt="Generated sample before and after the real SnapVault overlay compositor combines a caption while preserving capture time, UTC offset, and GPS metadata"
            width={640}
            height={480}
            unoptimized
            className="rounded-xl border border-border"
          />
          <figcaption className="mt-3 text-sm text-muted-foreground">
            Generated demo media, processed by the actual desktop compositor. The combined JPEG
            retains the test capture date, UTC offset, and GPS tags;{' '}
            <a href="/screenshots/demo-metadata.json" className="underline">
              inspect the verified EXIF output
            </a>
            .
          </figcaption>
        </figure>
        <div className="mt-12 flex flex-wrap gap-3">
          <a
            href="/#download"
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
