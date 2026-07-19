import { Button } from '@/components/ui/button';
import { RELEASES_URL } from '@/lib/links';

const platforms = [
  {
    name: 'macOS',
    detail: '.dmg installer · macOS 12+ · FFmpeg & ExifTool bundled',
    cta: 'Download .dmg',
  },
  {
    name: 'Windows',
    detail: '.msi installer · Windows 10+ · FFmpeg & ExifTool bundled',
    cta: 'Download .msi',
  },
  {
    name: 'Linux',
    detail: '.deb package · Ubuntu 20.04+ · install FFmpeg via your package manager',
    cta: 'Download .deb',
  },
];

export function Platforms() {
  return (
    <section id="download" className="py-14">
      <div className="mb-11 max-w-[620px]">
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          Get SnapVault
        </div>
        <h2 className="mt-3.5 text-[32px] font-bold">Native installers, every platform.</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        {platforms.map((p) => (
          <div key={p.name} className="glass flex flex-col gap-3.5 rounded-2xl p-6">
            <h3 className="text-[16px] font-semibold">{p.name}</h3>
            <p className="text-[12.5px] text-muted-foreground">{p.detail}</p>
            <Button asChild variant="ghost" className="mt-1 w-full">
              <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
                {p.cta}
              </a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
