const vscode = require('vscode');

exports.specifiers = [
    {
        label: 'BlueprintAuthorityOnly',
        doc: 'This function will only execute from Blueprint code if running on a machine with network authority (a server, dedicated server, or single-player game).',
    },
    {
        label: 'BlueprintCallable',
        doc: 'The function can be executed in a Blueprint or Level Blueprint graph.',
    },
    {
        label: 'BlueprintCosmetic',
        doc: 'This function is cosmetic and will not run on dedicated servers.',
    },
    {
        label: 'BlueprintGetter',
        doc: new vscode.MarkdownString('This function will be used as the accessor for a Blueprint-exposed property. This specifier implies `BlueprintPure` and `BlueprintCallable`.'),
    },
    {
        label: 'BlueprintImplementableEvent',
        doc: 'The function can be implemented in a Blueprint or Level Blueprint graph.',
    },
    {
        label: 'BlueprintInternalUseOnly',
        doc: 'Indicates that the function should not be exposed to the end user.',
    },
    {
        label: 'BlueprintNativeEvent',
        doc: new vscode.MarkdownString('This function is designed to be overridden by a Blueprint, but also has a default native implementation. Declares an additional function named the same as the main function, but with `_Implementation` added to the end, which is where code should be written. The autogenerated code will call the `_Implementation` method if no Blueprint override is found.'),
    },
    {
        label: 'BlueprintPure',
        doc: 'The function does not affect the owning object in any way and can be executed in a Blueprint or Level Blueprint graph.',
    },
    {
        label: 'BlueprintSetter',
        doc: new vscode.MarkdownString('This function will be used as the mutator for a Blueprint-exposed property. This specifier implies BlueprintCallable.'),
    },
    {
        label: 'CallInEditor',
        doc: 'This function can be called in the editor on selected instances via a button in the Details panel.',
    },
    {
        label: 'Category',
        doc: new vscode.MarkdownString('Specifies the category of the function when displayed in Blueprint editing tools. Define nested categories using the `|` operator.'),
        insertText: new vscode.SnippetString('Category="${1:TopCategory|SubCategory}"'),
    },
    {
        label: 'Client',
        doc: new vscode.MarkdownString('The function is only executed on the client that owns the Object on which the function is called. Declares an additional function named the same as the main function, but with `_Implementation` added to the end. The autogenerated code will call the `_Implementation` method when necessary.'),
    },
    {
        label: 'CustomThunk',
        doc: new vscode.MarkdownString('The `UnrealHeaderTool` code generator will not produce a thunk for this function; it is up to the user to provide one.'),
    },
    {
        label: 'Exec',
        doc: 'The function can be executed from the in-game console. Exec commands only function when declared within certain Classes.',
    },
    {
        label: 'NetMulticast',
        doc: new vscode.MarkdownString('The function is executed both locally on the server, and replicated to all clients, regardless of the Actor\'s `NetOwner`.'),
    },
    {
        label: 'Reliable',
	    doc: new vscode.MarkdownString('The function is replicated over the network, and is guaranteed to arrive regardless of bandwidth or network errors.Only valid when used in conjunction with `Client` or `Server`'),
    },
    {
        label: 'SealedEvent',
        doc: new vscode.MarkdownString('This function cannot be overridden in subclasses. The `SealedEvent` keyword can only be used for events. For non-event functions, declare them as `static` or `final` to seal them.'),
    },
    {
        label: 'ServiceRequest',
        doc: 'This function is an RPC (Remote Procedure Call) service request.',
    },
    {
        label: 'ServiceResponse',
        doc: 'This function is an RPC service response.',
    },
    {
        label: 'Server',
        doc: new vscode.MarkdownString('The function is only executed on the server. Declares an additional function named the same as the main function, but with `_Implementation` added to the end, which is where code should be written. The autogenerated code will call the `_Implementation` method when necessary.')
    },
    {
        label: 'Unreliable',
        doc: new vscode.MarkdownString('The function is replicated over the network but can fail due to bandwidth limitations or network errors. Only valid when used in conjunction with `Client` or `Server`.'),
    },
    {
        label: 'WithValidation',
        doc: new vscode.MarkdownString('Declares an additional function named the same as the main function, but with `_Validate` added to the end. This function takes the same parameters, and returns a `bool` to indicate whether or not the call to the main function should proceed.'),
    },
];
