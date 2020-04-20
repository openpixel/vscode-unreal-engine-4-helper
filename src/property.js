const vscode = require('vscode');

exports.specifiers = [
    {
        label: 'AdvancedDisplay',
        doc: 'The property will be placed in the advanced (dropdown) section of any panel where it appears.',
    },
    {
        label: 'AssetRegistrySearchable',
        doc: new vscode.MarkdownString('The `AssetRegistrySearchable` Specifier indicates that this property and its value will be automatically added to the Asset Registry for any Asset class instances containing this as a member variable. It is not legal to use on struct properties or parameters.'),
    },
    {
        label: 'BlueprintAssignable',
        doc: 'Usable with Multicast Delegates only. Exposes the property for assigning in Blueprints.',
    },
    {
        label: 'BlueprintAuthorityOnly',
        doc: new vscode.MarkdownString('This property must be a Multicast Delegate. In Blueprints, it will only accept events tagged with `BlueprintAuthorityOnly`.'),
    },
    {
        label: 'BlueprintCallable',
        doc: 'Multicast Delegates only. Property should be exposed for calling in Blueprint code.',
    },
    {
        label: 'BlueprintGetter',
        doc: new vscode.MarkdownString('This property specifies a custom accessor function. If this property isn\'t also tagged with `BlueprintSetter` or `BlueprintReadWrite`, then it is implicitly `BlueprintReadOnly`.'),
        insertText: new vscode.SnippetString('BlueprintGetter=${1:GetterFunctionName}'),
    },
    {
        label: 'BlueprintReadOnly',
        doc: new vscode.MarkdownString('This property can be read by Blueprints, but not modified. This Specifier is incompatible with the `BlueprintReadWrite` Specifier.'),
    },
    {
        label: 'BlueprintReadWrite',
        doc: new vscode.MarkdownString('This property can be read or written from a Blueprint. This Specifier is incompatible with the `BlueprintReadOnly` Specifier.'),
    },
    {
        label: 'BlueprintSetter',
        doc: new vscode.MarkdownString('This property has a custom mutator function, and is implicitly tagged with `BlueprintReadWrite`. Note that the mutator function must be named and part of the same class.'),
        insertText: new vscode.SnippetString('BlueprintSetter=${1:SetterFunctionName}'),
    },
    {
        label: 'Category',
        doc: new vscode.MarkdownString('Specifies the category of the property when displayed in Blueprint editing tools. Define nested categories using the `\`` operator.'),
        insertText: new vscode.SnippetString('Category="${1:TopCategory}"'),
    },
    {
        label: 'Config',
        doc: new vscode.MarkdownString('This property will be made configurable. The current value can be saved to the `.ini` file associated with the class and will be loaded when created. Cannot be given a value in default properties. Implies `BlueprintReadOnly`.'),
    },
    {
        label: 'DuplicateTransient',
        doc: 'Indicates that the property\'s value should be reset to the class default value during any type of duplication(copy/ paste, binary duplication, etc.).',
    },
    {
        label: 'EditAnywhere',
        doc: 'Indicates that this property can be edited by property windows, on archetypes and instances. This Specifier is incompatible with any of the the "Visible" Specifiers.',
    },
    {
        label: 'EditDefaultsOnly',
        doc: 'Indicates that this property can be edited by property windows, but only on archetypes. This Specifier is incompatible with any of the "Visible" Specifiers.',
    },
    {
        label: 'EditFixedSize',
        doc: 'Only useful for dynamic arrays. This will prevent the user from changing the length of an array via the Unreal Editor property window.',
    },
    {
        label: 'EditInline',
        doc: 'Allows the user to edit the properties of the Object referenced by this property within Unreal Editor\'s property inspector(only useful for Object references, including arrays of Object reference).',
    },
    {
        label: 'EditInstanceOnly',
        doc: 'Indicates that this property can be edited by property windows, but only on instances, not on archetypes. This Specifier is incompatible with any of the "Visible" Specifiers.',
    },
    {
        label: 'Export',
        doc: 'Only useful for Object properties (or arrays of Objects). Indicates that the Object assigned to this property should be exported in its entirety as a subobject block when the Object is copied (such as for copy/paste operations), as opposed to just outputting the Object reference itself.',
    },
    {
        label: 'GlobalConfig',
        doc: new vscode.MarkdownString('Works just like `Config` except that you cannot override it in a subclass. Cannot be given a value in default properties. Implies `BlueprintReadOnly`.'),
    },
    {
        label: 'Instanced',
        doc: new vscode.MarkdownString('Object (`UCLASS`) properties only. When an instance of this class is created, it will be given a unique copy of the Object assigned to this property in defaults. Used for instancing subobjects defined in class default properties. Implies `EditInline` and `Export`.'),
    },
    {
        label: 'Interp',
        doc: 'Indicates that the value can be driven over time by a Track in Matinee.',
    },
    {
        label: 'Localized',
        doc: new vscode.MarkdownString('The value of this property will have a localized value defined. Mostly used for strings. Implies `ReadOnly`.'),
    },
    {
        label: 'Native',
        doc: new vscode.MarkdownString('Property is native: C++ code is responsible for serializing it and exposing to [Garbage Collection](https://docs.unrealengine.com/en-US/Programming/UnrealArchitecture/Objects/Optimizations/index.html#garbagecollection).'),
    },
    {
        label: 'NoClear',
        doc: 'Prevents this Object reference from being set to none from the editor. Hides clear (and browse) button in the editor.',
    },
    {
        label: 'NoExport',
        doc: 'Only useful for native classes. This property should not be included in the auto-generated class declaration.',
    },
    {
        label: 'NonPIEDuplicateTransient',
        doc: 'The property will be reset to the default value during duplication, except if it\'s being duplicated for a Play In Editor(PIE) session.',
    },
    {
        label: 'NonTransactional',
        doc: 'Indicates that changes to this property\'s value will not be included in the editor\'s undo/redo history.',
    },
    {
        label: 'NotReplicated',
        doc: 'Skip replication. This only applies to struct members and parameters in service request functions.',
    },
    {
        label: 'Replicated',
        doc: 'The property should be replicated over the network.',
    },
    {
        label: 'RepRetry',
        doc: new vscode.MarkdownString('The `ReplicatedUsing` Specifier specifies a callback function which is executed when the property is updated over the network.'),
    },
    {
        label: 'RepRetry',
        doc: 'Only useful for struct properties. Retry replication of this property if it fails to be fully sent (for example, Object references not yet available to serialize over the network). For simple references, this is the default, but for structs, this is often undesirable due to the bandwidth cost, so it is disabled unless this flag is specified.',
    },
    {
        label: 'SaveGame',
        doc: 'This Specifier is a simple way to include fields explicitly for a checkpoint/save system at the property level. The flag should be set on all fields that are intended to be part of a saved game, and then a proxy archiver can be used to read/write it.',
    },
    {
        label: 'SerializeText',
        doc: new vscode.MarkdownString('Native property should be serialized as text (`ImportText`, `ExportText`).'),
    },
    {
        label: 'SkipSerialization',
        doc: 'This property will not be serialized, but can still be exported to a text format (such as for copy/paste operations).',
    },
    {
        label: 'SimpleDisplay',
        doc: new vscode.MarkdownString('Visible or editable properties appear in the **Details** panel and are visible without opening the "Advanced" section.'),
    },
    {
        label: 'TextExportTransient',
        doc: 'This property will not be exported to a text format (so it cannot, for example, be used in copy/paste operations).',
    },
    {
        label: 'Transient',
        doc: 'Property is transient, meaning it will not be saved or loaded. Properties tagged this way will be zero-filled at load time.',
    },
    {
        label: 'VisibleAnywhere',
        doc: 'Indicates that this property is visible in all property windows, but cannot be edited. This Specifier is incompatible with the "Edit" Specifiers.',
    },
    {
        label: 'VisibleDefaultsOnly',
        doc: 'Indicates that this property is only visible in property windows for archetypes, and cannot be edited. This Specifier is incompatible with any of the "Edit" Specifiers.',
    },
    {
        label: 'VisibleInstanceOnly',
        doc: 'Indicates that this property is only visible in property windows for instances, not for archetypes, and cannot be edited. This Specifier is incompatible with any of the "Edit" Specifiers.',
    },
];
