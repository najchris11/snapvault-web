require('./load.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

const guide = (fragment) => {
  const { GUIDES } = require('../src/lib/guides.ts');
  return JSON.stringify(GUIDES.find((g) => g.path.includes(fragment)));
};

// The comparison guide used to say only that "mobile feature coverage differs from desktop",
// which readers could not act on. The real gap (app PR #71) is video metadata: Android writes
// no date or GPS into videos and iOS writes no GPS, while photos are fully tagged on both and
// desktop tags videos through ExifTool. The page must name that gap rather than imply parity.
test('the comparison guide names the mobile video metadata gap instead of vague differences', () => {
  const vs = guide('/vs/');
  assert.doesNotMatch(vs, /mobile feature coverage differs/);
  assert.match(vs, /Android[^.]*videos[^.]*no date or GPS/);
  assert.match(vs, /iOS[^.]*videos[^.]*no GPS/);
  assert.match(vs, /photos are fully tagged/i);
  assert.match(vs, /desktop[^.]*videos[^.]*ExifTool/i);
});

// The photo-library FAQ said SnapVault writes date and GPS into "the files", which is false for
// videos processed on a phone. It must say so, because this is the answer people act on before
// importing into Google Photos or Apple Photos.
test('the photo-library FAQ does not promise video metadata on mobile', () => {
  const { faqs } = require('../src/components/sections/faq.tsx');
  const answer = faqs.find((f) => /Google Photos or Apple Photos/.test(f.q)).a;
  assert.match(answer, /desktop/i);
  assert.match(answer, /Android[^.]*no date or GPS/);
  assert.match(answer, /iOS[^.]*no GPS/);
});

// Duplicate cleanup used to hash every file on its own, so identical caption overlays on
// different memories were removed as duplicates. The app now never removes part of a
// main+overlay pair; the feature card should describe that protection.
test('duplicate cleanup copy says main and overlay pairs are never split', () => {
  const { Features } = require('../src/components/sections/features.tsx');
  const html = renderToStaticMarkup(React.createElement(Features));
  assert.match(html, /never removes[^.]*main[^.]*overlay/i);
});

// The overlay guide said combining "can permanently remove the source pair" with no platform
// scope. On Android and iOS a combined video always keeps its originals, so the guide must say
// that rather than warn mobile users their videos will go.
test('the overlay guide says mobile combined videos keep their originals', () => {
  const fix = guide('fix-snapchat-export');
  assert.match(
    fix,
    /Android and iOS, that applies to photos only[^.]*combined videos always keep their originals/,
  );
  assert.match(fix, /nothing is overwritten/i);
});
