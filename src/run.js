let specRe = /^(UPROPERTY|UCLASS|USTRUCT|UPROPERTY|UINTERFACE|UFUNCTION)\(/i;
let metaRe = /meta\=\((?:\w+(?:=".*")?,? *)*$/;

exports.run = function(lineText='') {
    let result = lineText.match(specRe);
    if (result === null || result.length < 2) {
        return ['', false];
    }

    let isMeta = lineText.match(metaRe) !== null;
    let prefix = result[1];

    return [prefix, isMeta];
}
