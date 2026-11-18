require('./load.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

test('search crawlers can discover every published guide and the tutorial', () => {
  const robots = require('../src/app/robots.ts').default();
  const sitemap = require('../src/app/sitemap.ts').default();
  assert.equal(robots.rules.allow, '/');
  assert.equal(robots.sitemap, 'https://snapvault.naj-dev.com/sitemap.xml');
  for (const route of [
    '/',
    '/tutorial',
    '/guides/snapchat-5gb-limit-january-2027',
    '/guides/fix-snapchat-export-missing-dates-overlays',
    '/guides/import-snapchat-memories-to-apple-photos-google-photos',
    '/vs/free-snapchat-memories-exporter',
  ]) {
    assert.ok(
      sitemap.some(
        (entry) => entry.url === `https://snapvault.naj-dev.com${route === '/' ? '' : route}`,
      ),
      route,
    );
  }
});

test('navigation works from tutorial and provides a keyboard-accessible mobile menu', () => {
  const { Nav } = require('../src/components/nav.tsx');
  const html = renderToStaticMarkup(React.createElement(Nav));
  for (const section of ['how-it-works', 'features', 'privacy', 'faq']) {
    assert.ok(html.includes(`href="/#${section}"`), section);
  }
  assert.match(html, /<details/);
  assert.match(html, /<summary[^>]*>.*Menu/s);
});

test('installer selection uses versioned assets and never follows a foreign release URL', () => {
  const { resolveInstaller, suggestedTarget } = require('../src/lib/downloads.ts');
  const release = {
    assets: [
      {
        name: 'SnapVault-1.0.16-macos-arm64.dmg',
        browser_download_url:
          'https://github.com/najchris11/snapchat-memories-downloader/releases/download/v1.0.16/SnapVault-1.0.16-macos-arm64.dmg',
      },
      {
        name: 'SnapVault-1.0.16-windows-x64.msi',
        browser_download_url: 'https://evil.example/fake.msi',
      },
    ],
  };
  assert.match(
    resolveInstaller(release, 'macos-arm64'),
    /v1.0.16\/SnapVault-1.0.16-macos-arm64.dmg$/,
  );
  assert.equal(resolveInstaller(release, 'windows-x64'), null);
  assert.equal(resolveInstaller({}, 'linux-x64'), null);
  assert.equal(resolveInstaller(release, '../malicious'), null);
  assert.equal(suggestedTarget('Mozilla Windows NT 10.0 Win64 x64'), 'windows-x64');
  assert.equal(suggestedTarget('Mozilla Linux x86_64'), 'linux-x64');
  assert.equal(
    suggestedTarget('Mozilla Macintosh Intel Mac OS X'),
    null,
    'Mac CPU requires explicit selection',
  );
  assert.equal(suggestedTarget('Mozilla Linux Android'), null);
  assert.equal(suggestedTarget('Mozilla iPhone'), null);
});

test('download endpoint redirects to the correct asset and falls back on API failure', async () => {
  const { GET } = require('../src/app/download/[target]/route.ts');
  const original = global.fetch;
  let requests = 0;
  const url =
    'https://github.com/najchris11/snapchat-memories-downloader/releases/download/v1.0.16/SnapVault-1.0.16-linux-x64.deb';
  try {
    global.fetch = async () => {
      requests++;
      return Response.json({
        assets: [{ name: 'SnapVault-1.0.16-linux-x64.deb', browser_download_url: url }],
      });
    };
    const context = { params: Promise.resolve({ target: 'linux-x64' }) };
    assert.equal(
      (await GET(new Request('https://example.com/download/linux-x64'), context)).headers.get(
        'location',
      ),
      url,
    );
    global.fetch = async () => {
      throw new Error('offline');
    };
    assert.equal(
      (await GET(new Request('https://example.com'), context)).headers.get('location'),
      'https://github.com/najchris11/snapchat-memories-downloader/releases',
    );
    assert.equal(
      (
        await GET(new Request('https://example.com'), {
          params: Promise.resolve({ target: 'unknown' }),
        })
      ).status,
      404,
    );
    assert.equal(requests, 1);
  } finally {
    global.fetch = original;
  }
});

test('phone visitors can request an export and email a desktop handoff link', () => {
  const { MobileHandoff } = require('../src/components/mobile-handoff.tsx');
  const html = renderToStaticMarkup(React.createElement(MobileHandoff));
  assert.match(html, /https:\/\/accounts.snapchat.com/);
  assert.match(html, /mailto:\?/);
  assert.match(html, /Email.*computer/s);
  assert.match(html, /Share/);
});

test('guides offer concrete backup instructions, honest limitations, and their own canonical URLs', () => {
  const { GUIDES } = require('../src/lib/guides.ts');
  const { GuideArticle } = require('../src/components/guide-article.tsx');
  assert.equal(GUIDES.length, 4);
  for (const guide of GUIDES) {
    const html = renderToStaticMarkup(React.createElement(GuideArticle, { guide }));
    assert.ok(html.includes(guide.title));
    assert.ok(guide.sections.length >= 3);
    assert.ok(html.includes('href="/tutorial"'));
    assert.ok(html.includes('href="/#download"'));
    assert.ok(guide.description.length > 60);
  }
  const policy = GUIDES.find((guide) => guide.path.includes('5gb'));
  assert.match(JSON.stringify(policy), /archiv/);
  assert.match(JSON.stringify(policy), /help.snapchat.com/);
  assert.match(JSON.stringify(policy), /not.*delet/i);
});

test('structured data describes real free software and visible FAQ answers', () => {
  const { softwareData, faqData, videoData } = require('../src/lib/structured-data.ts');
  assert.equal(softwareData['@type'], 'SoftwareApplication');
  assert.equal(softwareData.offers.price, '0');
  assert.equal(softwareData.operatingSystem, 'macOS, Windows, Linux');
  assert.ok(faqData.mainEntity.length >= 5);
  assert.equal(faqData.mainEntity[0].acceptedAnswer['@type'], 'Answer');
  assert.match(videoData.embedUrl, /youtube.com\/embed\/6v-aR5Lgc1k/);
  assert.equal(softwareData.aggregateRating, undefined, 'never invent reviews');
});

test('analytics omits query strings and honors Do Not Track', () => {
  const { sanitizedAnalyticsEvent } = require('../src/lib/analytics.ts');
  assert.equal(
    sanitizedAnalyticsEvent(
      { type: 'pageview', url: 'https://example.com/?token=secret#private' },
      '1',
    ),
    null,
  );
  assert.deepEqual(
    sanitizedAnalyticsEvent(
      { type: 'pageview', url: 'https://example.com/tutorial?email=private#section' },
      '0',
    ),
    { type: 'pageview', url: 'https://example.com/tutorial' },
  );
});

test('mobile navigation leaves room for Menu and Download by moving GitHub out of the narrow header', () => {
  const { Nav } = require('../src/components/nav.tsx');
  const html = renderToStaticMarkup(React.createElement(Nav));
  const github = html.match(
    /<a[^>]*href="https:\/\/github.com\/najchris11\/snapchat-memories-downloader"[^>]*>/,
  )?.[0];
  assert.ok(github);
  assert.match(github, /class="[^"]*\bhidden\b[^"]*md:inline-flex/);
});
