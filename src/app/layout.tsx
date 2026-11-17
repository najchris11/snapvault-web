import { SiteAnalytics } from '@/components/site-analytics';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const jbMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jbmono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://snapvault.naj-dev.com'),
  title: 'SnapVault — Free Snapchat Memories Downloader & Backup',
  alternates: { canonical: './' },
  description:
    "Snapchat's export gives you dateless, GPS-less files with edits scattered apart. SnapVault restores the metadata and merges the overlays back — free, open source, and it never leaves your computer.",
  openGraph: {
    title: 'SnapVault — Rescue your Snapchat memories, fully offline',
    description:
      'Restore dates, GPS, and merged overlays from your Snapchat export — 100% local, open source, free.',
    url: 'https://snapvault.naj-dev.com',
    siteName: 'SnapVault',
    images: ['/social.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnapVault — Rescue your Snapchat memories, fully offline',
    description:
      'Restore dates, GPS, and merged overlays from your Snapchat export — 100% local, open source, free.',
    images: ['/social.png'],
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jbMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <SiteAnalytics />
      </body>
    </html>
  );
}
