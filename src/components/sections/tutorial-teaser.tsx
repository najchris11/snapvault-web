import Image from 'next/image';
import Link from 'next/link';

import { TUTORIAL_VIDEO_ID } from '@/lib/links';

export function TutorialTeaser() {
  return (
    <section className="py-6">
      <Link
        href="/tutorial"
        className="glass group flex items-center gap-5 rounded-2xl p-4 transition-colors hover:bg-card-highest/40 sm:p-5"
      >
        <div className="relative aspect-video w-[140px] shrink-0 overflow-hidden rounded-lg sm:w-[180px]">
          <Image
            src={`https://i.ytimg.com/vi/${TUTORIAL_VIDEO_ID}/hqdefault.jpg`}
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/35">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 sm:h-11 sm:w-11">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-4 w-4 fill-background sm:h-5 sm:w-5">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
            2-minute tutorial
          </div>
          <h2 className="mt-1 text-[17px] font-semibold">Watch the full walkthrough</h2>
          <p className="mt-1 text-[13.5px] leading-relaxed text-muted-foreground">
            See the export and setup steps in action, start to finish.
          </p>
        </div>
      </Link>
    </section>
  );
}
