const assert = require('assert');
const run = require('../../../src/run').run;

suite('run unit test suite', () => {
  let testCases = [
      {
          desc: 'empty text',
          lineText: '',
          prefix: '',
          isMeta: false,
      },
      {
          desc: 'unknown prefix',
          lineText: 'UNKNOWN(',
          prefix: '',
          isMeta: false,
      },
      {
          desc: 'basic prefix',
          lineText: 'UPROPERTY(',
          prefix: 'UPROPERTY',
          isMeta: false,
      },
      {
          desc: 'prefix with meta',
          lineText: 'UCLASS(meta=(',
          prefix: 'UCLASS',
          isMeta: true,
      },
      {
          desc: 'prefix with arguments and meta',
          lineText: 'UCLASS(arg1, arg2, meta=(',
          prefix: 'UCLASS',
          isMeta: true,
      },
  ];
  testCases.forEach(testCase => {
    test(testCase.desc, () => {
        let [prefix, isMeta] = run(testCase.lineText);

        assert.equal(prefix, testCase.prefix, 'prefix mismatch');
        assert.equal(isMeta, testCase.isMeta, 'meta mismatch');
    });
  });
});
