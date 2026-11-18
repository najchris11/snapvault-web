const { test } = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const fs = require('node:fs');
const path = require('node:path');

const sha256 = (file) =>
  crypto
    .createHash('sha256')
    .update(fs.readFileSync(path.join(__dirname, '../public', file)))
    .digest('hex');

// The site used to show the purple Snapchat-ghost icon, a trademark risk the app dropped in
// favour of stacked photo cards with a date tab and a download badge. These hashes are the
// app's own rendered tiles (desktopMain AppIcon.png at 512px and the 1024px entry of
// AppIcon.icns), so the site cannot drift back to the ghost, or away from the app, unnoticed.
// If the app icon changes again, copy the new renders and update these hashes deliberately.
test('site icons are the app’s card-stack tile, not the old ghost', () => {
  assert.equal(
    sha256('icon.png'),
    '2af7b321bf503c60195b3034bbf8cb9af23c9b5648e581d811723cb06f019ebe',
  );
  assert.equal(
    sha256('icon-og.png'),
    'a447cd9b4ea3e22f27f09cba29acd917d5ae0e95c6fc4d34ff36abef4908ce17',
  );
});
