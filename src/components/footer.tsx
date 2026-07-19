import Image from 'next/image';

import { LICENSE_URL, RELEASES_URL, REPO_URL } from '@/lib/links';

export function Footer() {
  return (
    <footer className="mt-6 border-t border-white/[0.05] py-10">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5 px-6">
        <div className="flex items-center gap-2.5">
          <Image src="/icon.png" alt="" width={22} height={22} className="rounded-md" />
          <span className="text-[13px] text-muted-foreground">
            SnapVault — GPL-3.0 licensed. Forked from ManuelPuchner/snapchat-memories-downloader.
          </span>
        </div>
        <div className="flex gap-5 text-[13px] text-muted-foreground">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Releases
          </a>
          <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            License
          </a>
        </div>
      </div>
    </footer>
  );
}
