import type { MetadataRoute } from 'next';
import { SITE_URL, GUIDE_ROUTES } from '@/lib/site';
export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/tutorial', ...GUIDE_ROUTES].map((path) => ({ url: `${SITE_URL}${path}` }));
}
