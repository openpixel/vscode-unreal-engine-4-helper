// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const build = require('./src/builder').build;
const propertySpecifiers = require('./src/property').specifiers;
const structSpecifiers = require('./src/struct').specifiers;
const interfaceSpecifiers = require('./src/interface').specifiers;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const propertyCompletionItems = build(propertySpecifiers);
	const structCompletionItems = build(structSpecifiers);
	const interfaceCompletionItems = build(interfaceSpecifiers);

	let unrealProvider = vscode.languages.registerCompletionItemProvider('cpp', {
		provideCompletionItems(document, position) {
			const lineText = document.lineAt(position).text;
			const parenPos = lineText.indexOf('(');

			if (parenPos === -1) {
				return undefined;
			}

			const prefix = lineText.substr(0, parenPos).trimLeft();

			switch (prefix) {
				case 'UPROPERTY':
					return propertyCompletionItems;
				case 'USTRUCT':
					return structCompletionItems;
				case 'UINTERFACE':
					return interfaceCompletionItems;
				default:
					return undefined;
			}
		},
	}, ['(', ',']);

	context.subscriptions.push(unrealProvider);
}
exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
};
