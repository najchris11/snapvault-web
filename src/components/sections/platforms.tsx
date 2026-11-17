import { DownloadButton } from '@/components/download-button';
import { INSTALLERS, InstallerTarget } from '@/lib/downloads';

export function Platforms() {
  return (
    <section id="download" className="py-14">
      <div className="mb-11 max-w-[620px]">
        <div className="font-mono text-xs font-medium uppercase tracking-wider text-primary-strong">
          Get SnapVault
        </div>
        <h2 className="mt-3.5 text-[32px] font-bold">Choose the installer for your computer.</h2>
        <p className="mt-4 text-sm text-muted-foreground">
          On a Mac, check Apple menu → About This Mac: M1 or newer uses Apple Silicon; Intel uses
          x64. Linux needs FFmpeg and Perl installed separately.
        </p>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {(Object.keys(INSTALLERS) as InstallerTarget[]).map((target) => (
          <div key={target} className="glass flex flex-col gap-4 rounded-2xl p-6">
            <h3 className="text-base font-semibold">{INSTALLERS[target].label}</h3>
            <p className="text-sm text-muted-foreground">
              {target.startsWith('macos')
                ? 'DMG · macOS 12+ · tools bundled'
                : target === 'windows-x64'
                  ? 'MSI · Windows 10+ · tools bundled'
                  : 'DEB · Ubuntu 20.04+ · FFmpeg + Perl required'}
            </p>
            <DownloadButton target={target}>
              Download .{INSTALLERS[target].extension}
            </DownloadButton>
          </div>
        ))}
      </div>
    </section>
  );
}
