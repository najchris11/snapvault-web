import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { RELEASES_URL, REPO_URL } from '@/lib/links';

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
            href="#how-it-works"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="#features"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </Link>
          <Link
            href="#privacy"
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
            href="#faq"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </div>

        <div className="flex items-center gap-2.5">
          <Button asChild variant="ghost" size="sm">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="primary" size="sm">
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
              Download
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}
