import { faqs } from '@/components/sections/faq';
import { REPO_URL, TUTORIAL_VIDEO_ID } from '@/lib/links';
import { SITE_URL } from '@/lib/site';
export const softwareData = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'SnapVault',
  url: SITE_URL,
  applicationCategory: 'MultimediaApplication',
  operatingSystem: 'macOS, Windows, Linux',
  description:
    'Free local Snapchat Memories ZIP import, date and GPS metadata recovery, overlay combination, and media library.',
  license: `${REPO_URL}/blob/main/LICENSE`,
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};
export const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
};
export const videoData = {
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: 'SnapVault tutorial',
  description:
    'A walkthrough of requesting a Snapchat Memories export and processing it with SnapVault.',
  thumbnailUrl: `https://i.ytimg.com/vi/${TUTORIAL_VIDEO_ID}/hqdefault.jpg`,
  embedUrl: `https://www.youtube.com/embed/${TUTORIAL_VIDEO_ID}`,
};
