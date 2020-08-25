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
          desc: 'unknown',
          lineText: 'UNKNOWN(',
          prefix: '',
          isMeta: false,
      },
      {
          desc: 'basic',
          lineText: 'UPROPERTY(',
          prefix: 'UPROPERTY',
          isMeta: false,
      },
      {
          desc: 'meta',
          lineText: 'UCLASS(meta=(',
          prefix: 'UCLASS',
          isMeta: true,
      },
      {
          desc: 'arguments and meta',
          lineText: 'UCLASS(arg1, arg2, meta=(',
          prefix: 'UCLASS',
          isMeta: true,
      },
      {
          desc: 'odd sequence',
          lineText: 'USTRUCT(arg1 arg2 arg3 meta=(',
          prefix: 'USTRUCT',
          isMeta: true,
      },
      {
          desc: 'complex arguments',
          lineText: 'UPROPERTY(arg1=[1,2], arg2=foo, ',
          prefix: 'UPROPERTY',
          isMeta: false,
      },
      {
          desc: 'complex arguments meta',
          lineText: 'UFUNCTION(arg1=[1,2], arg2=foo, meta=(arg1, arg2,',
          prefix: 'UFUNCTION',
          isMeta: true,
      },
      {
          desc: 'UMETA specifier',
          lineText: 'UMETA(arg1, arg2',
          prefix: 'UMETA',
          isMeta: false,
      },
      {
          desc: 'Specifier with whitespace',
          lineText: '    UPROPERTY(',
          prefix: 'UPROPERTY',
          isMeta: false,
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
