import { Button } from '@/components/ui/button';
import { RELEASES_URL, REPO_URL } from '@/lib/links';

export function Cta() {
  return (
    <section className="py-14">
      <div className="glass flex flex-col items-center gap-4.5 rounded-2xl px-8 py-14 text-center">
        <h2 className="max-w-[20ch] text-balance text-[30px] font-bold">
          Your memories are already yours. Get them back in one piece.
        </h2>
        <p className="max-w-[48ch] text-[15px] text-muted-foreground">
          Free, open source, and nothing you process ever leaves your machine. Download
          SnapVault and point it at your export.
        </p>
        <div className="mt-1 flex flex-wrap justify-center gap-3">
          <Button asChild variant="primary">
            <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
              Download SnapVault
            </a>
          </Button>
          <Button asChild variant="ghost">
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer">
              Star on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
