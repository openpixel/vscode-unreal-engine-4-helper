const assert = require('assert');
const build = require('../../../src/builder').build;

suite('builder unit test suite', () => {
   test('build specifier without label skipped', () => {
    let specifiers = build([
        {
            doc: 'test',
        },
    ]);
    let result = build(specifiers);
    assert.equal(result.length, 0, 'specifier length mismatch');
   });

   test('build specifier with doc success', () => {
    let result = build([
        {
            label: 'foo',
            doc: 'bar',
        },
    ]);
    assert.equal(result.length, 1, 'specifier length mistmatch');
    assert.equal(result[0].documentation, 'bar', 'documentation mismatch');
   });

   test('build specifier with commit success', () => {
    let result = build([
        {
            label: 'foo',
            commit: ['b'],
        },
    ]);
    assert.equal(result.length, 1, 'specifier length mistmatch');
    assert.equal(result[0].commitCharacters.length, 1, 'commitCharacters mismatch');
    assert.equal(result[0].commitCharacters[0], 'b', 'commitCharacters mismatch');
   });

   test('build specifier with insertText success', () => {
    let result = build([
        {
            label: 'foo',
            insertText: 'bar',
        },
    ]);
    assert.equal(result.length, 1, 'specifier length mistmatch');
    assert.equal(result[0].insertText, 'bar', 'insertText mismatch');
   });
});
