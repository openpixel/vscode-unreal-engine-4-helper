const vscode = require('vscode');

exports.specifiers = [

];

exports.metadata = [
    {
        label: 'DisplayName',
        doc: 'This value\'s name will be the text provided here, rather than the code-generated name.',
        insertText: new vscode.SnippetString('DisplayName="${1:Enumerated Value Name}"')
    },
    {
        label: 'Hidden',
        doc: 'This value will not appear in the Editor.'
    },
    {
        label: 'Tooltip',
        doc: 'Overrides the automatically generated tooltip from code comments.',
        insertText: new vscode.SnippetString('ToolTip="${1:Hand-written tooltip}"')
    }
];
