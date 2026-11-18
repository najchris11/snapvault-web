export function sanitizedAnalyticsEvent<T extends { url: string }>(
  event: T,
  doNotTrack: string | null,
): T | null {
  if (doNotTrack === '1') return null;
  const url = new URL(event.url);
  url.search = '';
  url.hash = '';
  return { ...event, url: url.href };
}
