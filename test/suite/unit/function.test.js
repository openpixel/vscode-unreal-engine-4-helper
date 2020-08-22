const assert = require('assert');
const build = require('../../../src/builder').build;
const specifiers = require('../../../src/function').specifiers;
const metadata = require('../../../src/function').metadata;

suite('function unit test suite', () => {
   test('build specifiers success', () => {
    let result = build(specifiers);
    assert.equal(result.length, specifiers.length, 'specifier length mismatch');
   });

   test('build metadata success', () => {
    let result = build(metadata);
    assert.equal(result.length, metadata.length, 'metadata length mistmatch');
   });
});
