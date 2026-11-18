const { test } = require('node:test');
const assert = require('node:assert/strict');

test('the legacy Vercel hostname permanently redirects every path to the canonical domain', async () => {
  const { default: config } = await import('../next.config.mjs');
  assert.equal(typeof config.redirects, 'function');
  const redirects = await config.redirects();
  assert.deepEqual(redirects, [{
    source: '/:path*',
    has: [{ type: 'host', value: 'snapvault-web-three.vercel.app' }],
    destination: 'https://snapvault.naj-dev.com/:path*',
    permanent: true,
  }]);
});
