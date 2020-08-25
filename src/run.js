let specRe = [
    /^\s*(UPROPERTY|UCLASS|USTRUCT|UPROPERTY|UINTERFACE|UFUNCTION|UENUM)\(/i,
    /(UMETA)\((?:\w+(?:=".*")?,? *)*$/i,
];
let metaRe = /Meta\=\((?:\w+(?:=".*")?,? *)*$/i;

exports.run = function(lineText='') {
    let result = null;
    for (const re of specRe) {
        result = lineText.match(re);
        if (result !== null) {
            break;
        }
    }
    if (result === null) {
        return ['', false];
    }

    let isMeta = lineText.match(metaRe) !== null;
    let prefix = result[1];

    return [prefix, isMeta];
}
