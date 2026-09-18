import Image from 'next/image';

import { KOFI_URL, LICENSE_URL, RELEASES_URL, REPO_URL } from '@/lib/links';

const NAJ_DEV_URL = 'https://naj-dev.com';

export function Footer() {
  return (
    <footer className="mt-6 border-t border-white/[0.05] py-10">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5 px-6">
        <div className="flex items-center gap-2.5">
          <Image src="/icon.png" alt="" width={22} height={22} className="rounded-md" />
          <span className="text-[13px] text-muted-foreground">
            SnapVault — GPL-3.0 licensed.
          </span>
        </div>
        <div className="flex flex-wrap gap-5 text-[13px] text-muted-foreground">
          <a href={REPO_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            GitHub
          </a>
          <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            Releases
          </a>
          <a href={LICENSE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
            License
          </a>
          <a
            href={NAJ_DEV_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            naj-dev.com
          </a>
          <a
            href={KOFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground"
          >
            Support on Ko-fi
          </a>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-[1120px] px-6 text-[11.5px] leading-relaxed text-muted-foreground/60">
        SnapVault is an independent, community-built project and is not affiliated with,
        endorsed by, or sponsored by Snap Inc. Snapchat is a trademark of Snap Inc.
      </p>
    </footer>
  );
}
