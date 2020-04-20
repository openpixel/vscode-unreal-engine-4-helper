const vscode = require('vscode');

exports.build = function (specifiers) {
    let completionItems = [];

    specifiers.forEach(specifier => {
        let item = new vscode.CompletionItem(specifier.label);
        if (specifier.doc) {
            item.documentation = specifier.doc;
        }
        if (specifier.commit) {
            item.commitCharacters = specifier.commit;
        }
        if (specifier.insertText) {
            item.insertText = specifier.insertText;
        }

        completionItems.push(item);
    });

    return completionItems;
};
