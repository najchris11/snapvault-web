import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { GUIDES } from '@/lib/guides';
import { GuideArticle } from '@/components/guide-article';
import { SITE_URL } from '@/lib/site';

const prefix = 'guides';
export const dynamicParams = false;
export function generateStaticParams() {
  return GUIDES.filter((guide) => guide.path.startsWith(`/${prefix}/`)).map((guide) => ({
    slug: guide.path.split('/').pop()!,
  }));
}
async function findGuide(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  return GUIDES.find((guide) => guide.path === `/${prefix}/${slug}`) ?? notFound();
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const guide = await findGuide(params);
  return {
    title: `${guide.title} — SnapVault`,
    description: guide.description,
    alternates: { canonical: `${SITE_URL}${guide.path}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${SITE_URL}${guide.path}`,
      images: ['/social.png'],
    },
  };
}
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  return <GuideArticle guide={await findGuide(params)} />;
}
