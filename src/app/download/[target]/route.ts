import { RELEASES_URL } from '@/lib/links';
import { INSTALLERS, resolveInstaller } from '@/lib/downloads';

export async function GET(_request: Request, context: { params: Promise<{ target: string }> }) {
  const { target } = await context.params;
  if (!Object.hasOwn(INSTALLERS, target)) return new Response('Unknown installer', { status: 404 });
  try {
    const response = await fetch(
      'https://api.github.com/repos/najchris11/snapchat-memories-downloader/releases/latest',
      {
        headers: { Accept: 'application/vnd.github+json' },
        next: { revalidate: 300 },
        signal: AbortSignal.timeout(8000),
      },
    );
    if (response.ok) {
      const url = resolveInstaller(await response.json(), target);
      if (url) return Response.redirect(url, 302);
    }
  } catch {
    /* Rate limits and network failures send visitors to the release picker. */
  }
  return Response.redirect(RELEASES_URL, 302);
}
