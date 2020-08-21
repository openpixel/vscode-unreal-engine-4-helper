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
        doc: new vscode.MarkdownString('Specifies the category of the property when displayed in Blueprint editing tools. Define nested categories using the `|` operator.'),
        insertText: new vscode.SnippetString('Category="${1:TopCategory|SubCategory}"'),
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

exports.metadata = [
    {
        label: 'AllowAbstract',
        insertText: new vscode.SnippetString('AllowAbstract=${1:"true/false"}'),
        doc: new vscode.MarkdownString('Used for `Subclass` and `SoftClass` properties. Indicates whether abstract Class types should be shown in the Class picker.'),
    },
    {
        label: 'AllowedClasses',
        insertText: new vscode.SnippetString('AllowedClasses=${1:"Class1, Class2, .."}'),
        doc: new vscode.MarkdownString('Used for `FSoftObjectPath` properties. Comma delimited list that indicates the Class type(s) of assets to be displayed in the Asset picker.'),
    },
    {
        label: 'AllowPreserveRatio',
        doc: new vscode.MarkdownString('Used for `FVector` properties. It causes a ratio lock to be added when displaying this property in details panels.'),
    },
    {
        label: 'ArrayClamp',
        insertText: new vscode.SnippetString('ArrayClamp=${1:"ArrayProperty"}'),
        doc: 'Used for integer properties. Clamps the valid values that can be entered in the UI to be between 0 and the length of the array property named.',
    },
    {
        label: 'AssetBundles',
        doc: new vscode.MarkdownString('Used for `SoftObjectPtr` or `SoftObjectPath` properties. List of Bundle names used inside Primary Data Assets to specify which Bundles this reference is part of.'),
    },
    {
        label: 'BlueprintBaseOnly',
        doc: new vscode.MarkdownString('Used for `Subclass` and `SoftClass` properties. Indicates whether only Blueprint Classes should be shown in the Class picker.'),
    },
    {
        label: 'BlueprintCompilerGeneratedDefaults',
        doc: new vscode.MarkdownString('Property defaults are generated by the Blueprint compiler and will not be copied when the `CopyPropertiesForUnrelatedObjects` function is called post-compile.'),
    },
    {
        label: 'ClampMin',
        insertText: new vscode.SnippetString('ClampMin=${1:"N"}'),
        doc: new vscode.MarkdownString('Used for float and integer properties.  Specifies the minimum value `N` that may be entered for the property.'),
    },
    {
        label: 'ClampMax',
        insertText: new vscode.SnippetString('ClampMax=${1:"N"}'),
        doc: new vscode.MarkdownString('Used for float and integer properties.  Specifies the maximum value `N` that may be entered for the property.'),
    },
    {
        label: 'ConfigHierarchyEditable',
        doc: new vscode.MarkdownString('This property is serialized to a config (`.ini`) file, and can be set anywhere in the config hierarchy.'),
    },
    {
        label: 'ContentDir',
        doc: new vscode.MarkdownString('Used by `FDirectoryPath` properties. Indicates that the path will be picked using the Slate-style directory picker inside the `Content` folder.'),
    },
    {
        label: 'DisplayAfter',
        insertText: new vscode.SnippetString('DisplayAfter=${1:"PropertyName"}'),
        doc: new vscode.MarkdownString('This property will show up in the Blueprint Editor immediately after the property named `PropertyName`, regardless of its order in source code, as long as both properties are in the same category. If multiple properties have the same `DisplayAfter` value and the same `DisplayPriority` value, they will appear after the named property in the order in which they are declared in the header file.'),
    },
    {
        label: 'DisplayName',
        insertText: new vscode.SnippetString('DisplayName=${1:"Property Name"}'),
        doc: 'The name to display for this property, instead of the code-generated name.',
    },
    {
        label: 'DisplayPriority',
        insertText: new vscode.SnippetString('DisplayPriority=${1:"N"}'),
        doc: new vscode.MarkdownString('If two properties feature the same `DisplayAfter` value, or are in the same category and do not have the `DisplayAfter` Meta Tag, this property will determine their sorting order. The highest-priority value is 1, meaning that a property with a `DisplayPriority` value of 1 will appear above a property with a `DisplayProirity` value of 2. If multiple properties have the same `DisplayAfter` value, they will appear in the order in which they are declared in the header file.'),
    },
    {
        label: 'DisplayThumbnail',
        insertText: new vscode.SnippetString('DisplayThumbnail=${1:"true"}'),
        doc: 'Indicates that the property is an Asset type and it should display the thumbnail of the selected Asset.',
    },
    {
        label: 'EditCondition',
        insertText: new vscode.SnippetString('EditCondition=${1:"BooleanPropertyName"}'),
        doc: 'Names a boolean property that is used to indicate whether editing of this property is disabled. Putting "!" before the property name inverts the test. The EditCondition meta tag is no longer limited to a single boolean property. It is now evaluated using a full-fledged expression parser, meaning you can include a full C++ expression.',
    },
    {
        label: 'EditFixedOrder',
        doc: 'Keeps the elements of an array from being reordered by dragging.',
    },
    {
        label: 'ExactClass',
        insertText: new vscode.SnippetString('ExactClass=${1:"true"}'),
        doc: new vscode.MarkdownString('Used for `FSoftObjectPath` properties in conjunction with `AllowedClasses`. Indicates whether only the exact Classes specified in `AllowedClasses` can be used, or if subclasses are also valid.'),
    },
    {
        label: 'ExposeFunctionCategories',
        insertText: new vscode.SnippetString('ExposeFunctionCategories=${1:"Category1, Category2, .."}'),
        doc: 'Specifies a list of categories whose functions should be exposed when building a function list in the Blueprint Editor.',
    },
    {
        label: 'ExposeOnSpawn',
        insertText: new vscode.SnippetString('ExposeOnSpawn=${1:"true"}'),
        doc: 'Specifies whether the property should be exposed on a Spawn Actor node for this Class type.',
    },
    {
        label: 'FilePathFilter',
        insertText: new vscode.SnippetString('FilePathFilter=${1:"FileType"}'),
        doc: new vscode.MarkdownString('Used by `FFilePath` properties. Indicates the path filter to display in the file picker. Common values include "uasset" and "umap", but these are not the only possible values.'),
    },
    {
        label: 'GetByRef',
        doc: new vscode.MarkdownString('Makes the "Get" Blueprint Node for this property return a const reference to the property instead of a copy of its value. Only usable with Sparse Class Data, and only when `NoGetter` is not present.'),
    },
    {
        label: 'HideAlphaChannel',
        doc: new vscode.MarkdownString('Used for `FColor` and `FLinearColor` properties. Indicates that the `Alpha` property should be hidden when displaying the property widget in the details.'),
    },
    {
        label: 'HideViewOptions',
        doc: new vscode.MarkdownString('Used for `Subclass` and `SoftClass` properties. Hides the ability to change view options in the Class picker.'),
    },
    {
        label: 'InlineEditConditionToggle',
        doc: 'Signifies that the boolean property is only displayed inline as an edit condition toggle in other properties, and should not be shown on its own row.',
    },
    {
        label: 'LongPackageName',
        doc: new vscode.MarkdownString('Used by `FDirectoryPath` properties. Converts the path to a long package name.'),
    },
    {
        label: 'MakeEditWidget',
        doc: 'Used for Transform or Rotator properties, or Arrays of Transforms or Rotators. Indicates that the property should be exposed in the viewport as a movable widget.',
    },
    {
        label: 'NoGetter',
        doc: 'Causes Blueprint generation not to generate a "get" Node for this property. Only usable with Sparse Class Data.',
    },
];
