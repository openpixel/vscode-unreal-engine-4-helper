// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const build = require('./src/builder').build;
const propertySpecifiers = require('./src/property').specifiers;
const structSpecifiers = require('./src/struct').specifiers;
const interfaceSpecifiers = require('./src/interface').specifiers;
const functionSpecifiers = require('./src/function').specifiers;
const classSpecifiers = require('./src/class').specifiers;

const propertyMetadata = require('./src/property').metadata;
const structMetadata = require('./src/struct').metadata;
const interfaceMetadata = require('./src/interface').metadata;
const functionMetadata = require('./src/function').metadata;
const classMetadata = require('./src/class').metadata;

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// Build our completion items
	const propertyCompletionItems = build(propertySpecifiers);
	const propertyMetadataCompletionItems = build(propertyMetadata);
	const structCompletionItems = build(structSpecifiers);
	const structMetadataCompletionItems = build(structMetadata);
	const interfaceCompletionItems = build(interfaceSpecifiers);
	const interfaceMetadataCompletionItems = build(interfaceMetadata);
	const functionCompletionItems = build(functionSpecifiers);
	const functionMetadataCompletionItems = build(functionMetadata);
	const classCompletionItems = build(classSpecifiers);
	const classMetadataCompletionItems = build(classMetadata);

	let unrealProvider = vscode.languages.registerCompletionItemProvider('cpp', {
		provideCompletionItems(document, position) {
			const lineText = document.lineAt(position).text;
			const parenPos = lineText.lastIndexOf('(');

			if (parenPos === -1) {
				return undefined;
			}

			let prefix = lineText.substr(0, parenPos).trimLeft();

			const otherParenPos = prefix.lastIndexOf('(');
			let isMeta = false;
			if (otherParenPos !== -1) {
				// We have another paren, so determine if we are nested
				const innerPrefix = prefix.substr(otherParenPos+1, parenPos).trimLeft();
				if (innerPrefix.split(')').length === 1) {
					isMeta = innerPrefix === 'meta='; // we are in a meta call
					prefix = lineText.substr(0, otherParenPos).trimLeft();
				}
			}

			switch (prefix) {
				case 'UPROPERTY':
					return isMeta ? propertyMetadataCompletionItems : propertyCompletionItems;
				case 'USTRUCT':
					return isMeta ? structMetadataCompletionItems : structCompletionItems;
				case 'UINTERFACE':
					return isMeta ? interfaceMetadataCompletionItems : interfaceCompletionItems;
				case 'UFUNCTION':
					return isMeta ? functionMetadataCompletionItems : functionCompletionItems;
				case 'UCLASS':
					return isMeta ? classMetadataCompletionItems : classCompletionItems;
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
