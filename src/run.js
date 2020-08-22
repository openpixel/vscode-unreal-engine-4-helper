let specMatchers = [
    /^(UPROPERTY)\(/,
    /^(UCLASS)\(/,
    /^(USTRUCT)\(/,
    /^(UPROPERTY)\(/,
    /^(UINTERFACE)\(/,
    /^(UFUNCTION)\(/,
];
let metaReg = RegExp(/meta\=\(\s*$/, 'gi');

exports.run = function(lineText='') {
    for (const el of specMatchers) {
        let re = RegExp(el, 'gi');

        let result = re.exec(lineText);
        if (result === null) {
            continue;
        }

        let isMeta = metaReg.test(lineText);
        let prefix = result[1];

        return [prefix, isMeta];
    }

    return ['', false];
}
