const vscode = require('vscode');

exports.specifiers = [
    {
        label: 'BlueprintType',
        doc: 'Exposes this class as a type that can be used for variables in Blueprints.',
    },
    {
        label: 'DependsOn',
        doc: new vscode.MarkdownString('All classes listed will be compiled before this class. ClassName must specify a class in the same (or a previous) package. Multiple dependency classes can be specified using a single `DependsOn` line delimited by commas, or can be specified using a separate `DependsOn` line for each class. This is important when a class uses a struct or enum declared in another class as the compiler only knows what is in the classes it has already compiled.'),
        insertText: new vscode.SnippetString('DependsOn=(${1:ClassName1, ClassName2, ...})')
    },
    {
        label: 'MinimalAPI',
        doc: 'Causes only the class\'s type information to be exported for use by other modules.The class can be cast to, but the functions of the class cannot be called(with the exception of inline methods).This improves compile times by not exporting everything for classes that do not need all of their functions accessible in other modules.',
    },
];
