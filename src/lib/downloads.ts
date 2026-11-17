export const INSTALLERS = {
  'macos-arm64': { label: 'macOS · Apple Silicon', extension: 'dmg' },
  'macos-x64': { label: 'macOS · Intel', extension: 'dmg' },
  'windows-x64': { label: 'Windows · x64', extension: 'msi' },
  'linux-x64': { label: 'Linux · x64', extension: 'deb' },
} as const;
export type InstallerTarget = keyof typeof INSTALLERS;

export function suggestedTarget(userAgent: string): InstallerTarget | null {
  if (/Android|iPhone|iPad|Mobile/i.test(userAgent)) return null;
  if (/Windows/i.test(userAgent) && !/ARM|aarch64/i.test(userAgent)) return 'windows-x64';
  if (/Linux.*x86_64/i.test(userAgent)) return 'linux-x64';
  return null;
}

export function resolveInstaller(release: unknown, target: string): string | null {
  if (!Object.hasOwn(INSTALLERS, target) || !release || typeof release !== 'object') return null;
  const assets = (release as { assets?: unknown }).assets;
  if (!Array.isArray(assets)) return null;
  const suffix = `-${target}.${INSTALLERS[target as InstallerTarget].extension}`;
  for (const asset of assets) {
    if (!asset || typeof asset.name !== 'string' || typeof asset.browser_download_url !== 'string')
      continue;
    if (!asset.name.startsWith('SnapVault-') || !asset.name.endsWith(suffix)) continue;
    try {
      const url = new URL(asset.browser_download_url);
      if (
        url.origin === 'https://github.com' &&
        url.pathname.startsWith('/najchris11/snapchat-memories-downloader/releases/download/') &&
        url.pathname.endsWith(`/${encodeURIComponent(asset.name)}`) &&
        !url.username &&
        !url.password
      )
        return url.href;
    } catch {
      /* Ignore malformed asset URLs; Releases remains the fallback. */
    }
  }
  return null;
}
