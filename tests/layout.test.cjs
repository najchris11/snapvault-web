require('./load.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');

// At 360px the recovered-file row ("2:41 PM · 39.96°N, 82.99°W · merged") ran 8px past the
// viewport: its tag was shrink-0 on a single non-wrapping flex line, so the page scrolled
// sideways on small phones. The row must wrap and the tag must be allowed to shrink.
test('problem file rows wrap instead of overflowing narrow phones', () => {
  const { Problem } = require('../src/components/sections/problem.tsx');
  const html = renderToStaticMarkup(React.createElement(Problem));
  const rows = html.match(/<div class="[^"]*\bjustify-between\b[^"]*"/g);
  assert.equal(rows.length, 3);
  for (const row of rows) assert.match(row, /\bflex-wrap\b/);
  assert.doesNotMatch(html, /\bshrink-0\b/);
});
