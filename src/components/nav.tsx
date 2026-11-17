'use client';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { REPO_URL } from '@/lib/links';

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-white/[0.05] bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1120px] items-center justify-between px-6 py-3.5">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/icon.png" alt="" width={30} height={30} className="rounded-lg" />
          <span className="text-[17px] font-bold tracking-tight">SnapVault</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="/#privacy"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/tutorial"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Tutorial
          </Link>
          <Link
            href="/#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </div>

        <details className="relative md:hidden">
          <summary className="cursor-pointer rounded-lg border border-border px-3 py-2 text-sm">
            Menu
          </summary>
          <div className="absolute right-0 top-full mt-2 flex min-w-48 flex-col rounded-xl border border-border bg-background p-3 shadow-xl">
            {[
              ['/#how-it-works', 'How it works'],
              ['/#features', 'Features'],
              ['/#privacy', 'Privacy'],
              ['/tutorial', 'Tutorial'],
              ['/#faq', 'FAQ'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-3 text-sm hover:bg-muted"
                onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}
              >
                {label}
              </Link>
            ))}
          </div>
        </details>

        <div className="flex items-center gap-2.5">
          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="primary" size="sm">
            <Link href="/#download">Download</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
