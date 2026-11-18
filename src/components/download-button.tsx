'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { INSTALLERS, InstallerTarget, suggestedTarget } from '@/lib/downloads';

export function DownloadButton({
  target,
  children,
}: {
  target?: InstallerTarget;
  children?: React.ReactNode;
}) {
  const [suggested, setSuggested] = useState<InstallerTarget | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    setSuggested(suggestedTarget(navigator.userAgent));
  }, []);
  const selected = target ?? suggested;
  return (
    <>
      <Button asChild variant="primary">
        <a
          href={selected ? `/download/${selected}` : '/#download'}
          target={selected ? '_blank' : undefined}
          rel={selected ? 'noopener noreferrer' : undefined}
          onClick={() => {
            if (selected) dialog.current?.showModal();
          }}
        >
          {children ??
            (selected ? `Download for ${INSTALLERS[selected].label}` : 'Choose your installer')}
        </a>
      </Button>
      <dialog
        ref={dialog}
        aria-label="Installing SnapVault"
        className="m-auto max-h-[85vh] w-[min(90vw,520px)] overflow-y-auto rounded-2xl border border-border bg-background p-7 text-foreground backdrop:bg-black/60"
      >
        <h2 className="text-xl font-semibold">Your download is starting</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          If the download does not start, GitHub will show the available releases. Choose the
          installer for your system.
        </p>
        {selected?.startsWith('macos') && (
          <div className="mt-4 space-y-3 text-sm">
            <p>
              Apple Silicon means M1 or newer; Intel Macs need the Intel installer. Check Apple menu
              → About This Mac if unsure.
            </p>
            <p>
              Open the DMG and drag SnapVault into Applications. For an unsigned-app warning, try
              opening it once, then use System Settings → Privacy &amp; Security → Open Anyway. Only
              do this for a download from the official repository.
            </p>
          </div>
        )}
        {selected === 'windows-x64' && (
          <p className="mt-4 text-sm">
            Open the MSI installer. If SmartScreen shows “Windows protected your PC”, verify you
            downloaded from our official GitHub repository, then select More info → Run anyway.
          </p>
        )}
        {selected === 'linux-x64' && (
          <p className="mt-4 text-sm">
            Install the DEB using your package manager. Install FFmpeg and Perl too:{' '}
            <code>sudo apt install ffmpeg perl</code>.
          </p>
        )}
        <p className="mt-4 text-sm text-muted-foreground">
          The release includes SHA256SUMS.txt so you can verify the installer checksum.
        </p>
        <form method="dialog" className="mt-6">
          <Button type="submit" variant="ghost">
            Close
          </Button>
        </form>
      </dialog>
    </>
  );
}
