const vscode = require('vscode');

exports.specifiers = [
    {
        label: 'Abstract',
        doc: new vscode.MarkdownString('The **Abstract** Specifier declares the class as an "abstract base class", preventing the user from adding Actors of this class to Levels. This is useful for classes which are not meaningful on their own. For example, the `ATriggerBase` base class is abstract, while the `ATriggerBox` subclass is not abstract and can be placed in a Level.'),
    },
    {
        label: 'AdvancedClassDisplay',
        doc: new vscode.MarkdownString('The **AdvancedClassDisplay** Specifier forces all properties of the class to show only in the [advanced sections](https://dq8iqaixvew1d.cloudfront.net/en-US/Engine/UI/LevelEditor/Details/index.html#advancedproperties) of any details panel where they appear. To override this on an individual property, use the `SimpleDisplay` specifier on that property.'),
    },
    {
        label: 'AutoCollapseCategories',
        doc: new vscode.MarkdownString('The `AutoCollapseCategories` Specifier negates the effects, for the listed categories, of the **AutoExpandCategories** Specifier on a parent class.'),
        insertText: new vscode.SnippetString('AutoCollapseCategories=(${1:Category1, Category2, ...})')
    },
    {
        label: 'AutoExpandCategories',
        doc: 'Specifies one or more categories that should be automatically expanded in the Unreal Editor Property window for Objects of this class. To auto-expand variables declared with no category, use the name of the class which declares the variable.',
        insertText: new vscode.SnippetString('AutoExpandCategories=(${1:Category1, Category2, ...})'),
    },
    {
        label: 'Blueprintable',
        doc: new vscode.MarkdownString('Exposes this class as an acceptable base class for creating Blueprints. The default is `NotBlueprintable`, unless inherited otherwise. This Specifier is inherited by subclasses.'),
    },
    {
        label: 'BlueprintType',
        doc: 'Exposes this class as a type that can be used for variables in Blueprints.',
    },
    {
        label: 'ClassGroup',
        doc: new vscode.MarkdownString('Indicates that Unreal Editor\'s **Actor Browser** should include this class and any subclass of this class within the specified `GroupName` when **Group View** is enabled in the Actor Browser.'),
        insertText: new vscode.SnippetString('ClassGroup=${1:GroupName}'),
    },
    {
        label: 'CollapseCategories',
        doc: new vscode.MarkdownString('Indicates that properties of this class should not be grouped in categories in Unreal Editor Property windows. This Specifier is propagated to child classes, and can be overridden by the `DontCollapseCategories` Specifier.'),
    },
    {
        label: 'Config',
        doc: new vscode.MarkdownString('Indicates that this class is allowed to store data in a configuration file (`.ini`). If there are any class properties declared with the `config` or `globalconfig` Specifiers, this Specifier causes those properties to be stored in the named configuration file. This Specifier is propagated to all child classes and cannot be negated, but child classes can change the config file by re-declaring the `config` Specifier and providing a different `ConfigName`. Common `ConfigName` values are "Engine", "Editor", "Input", and "Game".'),
        insertText: new vscode.SnippetString('Config=${1:ConfigName}'),
    },
    {
        label: 'Const',
        doc: new vscode.MarkdownString('All properties and functions in this class are `const` and are exported as `const`. This Specifier is inherited by subclasses.'),
    },
    {
        label: 'ConversionRoot',
        doc: 'A root convert limits a subclass to only be able to convert to child classes of the first root class going up the hierarchy.',
    },
    {
        label: 'CustomConstructor',
        doc: 'Prevents automatic generation of the constructor declaration.',
    },
    {
        label: 'DefaultToInstanced',
        doc: 'All instances of this class are considered "instanced". Instanced classes (components) are duplicated upon construction. This Specifier is inherited by subclasses.',
    },
    {
        label: 'DependsOn',
        doc: new vscode.MarkdownString('All classes listed will be compiled before this class. The class names provided must indicate classes in the same (or a previous) package. Multiple dependency classes can be identified using a single `DependsOn` line delimited by commas, or can be specified using a separate `DependsOn` line for each class. This is important when a class uses a struct or enum declared in another class, as the compiler only knows what is in the classes it has already compiled.'),
        insertText: new vscode.SnippetString('DependsOn=(ClassName1, ClassName2, ...)')
    },
    {
        label: 'Deprecated',
        doc: 'This class is deprecated and Objects of this class will not be saved when serializing. This Specifier is inherited by subclasses.',
    },
    {
        label: 'DontAutoCollapseCategories',
        doc: new vscode.MarkdownString('Negates the `AutoCollapseCategories` Specifier for the listed categories inherited from a parent class.'),
        insertText: new vscode.SnippetString('DontAutoCollapseCategories=(${1:Category, Category, ...})')
    },
    {
        label: 'DontCollapseCategories',
        doc: new vscode.MarkdownString('Negates a `CollapseCatogories` Specifier inherited from a base class.'),
    },
    {
        label: 'EditInlineNew',
        doc: new vscode.MarkdownString('Indicates that Objects of this class can be created from the Unreal Editor Property window, as opposed to being referenced from an existing Asset. The default behavior is that only references to existing Objects may be assigned through the Property window). This Specifier is propagated to all child classes; child classes can override this with the `NotEditInlineNew` Specifier.'),
    },
    {
        label: 'HideCategories',
        doc: 'Lists one or more categories that should be hidden in the Unreal Editor Property window for Objects of this class. To hide properties declared with no category, use the name of the class which declares the variable. This Specifier is propagated to child classes.',
        insertText: new vscode.SnippetString('HideCategories=(${1:Category1, Category2, ...})'),
    },
    {
        label: 'HideDropdown',
        doc: 'Prevents this class from showing up in property window combo boxes.',
    },
    {
        label: 'HideFunctions=(Category)',
        doc: 'Hides all functions in the the specified category from the property viewer.',
        insertText: new vscode.SnippetString('HideFunctions=(${1:Category1, Category2, ...|FunctionName})'),
    },
    {
        label: 'HideFunctions=FunctionName',
        doc: 'Hides the named functions from the property viewer.',
        insertText: new vscode.SnippetString('HideFunctions=${1:FunctionName}'),
    },
    {
        label: 'Intrinsic',
        doc: new vscode.MarkdownString('This indicates that the class was declared directly in C++, and has no boilerplate generated by **Unreal Header Tool**. Do not use this Specifier on new classes.'),
    },
    {
        label: 'MinimalAPI',
        doc: 'Causes only the class\'s type information to be exported for use by other modules.The class can be cast to, but the functions of the class cannot be called(with the exception of inline methods).This improves compile times by not exporting everything for classes that do not need all of their functions accessible in other modules.',
    },
    {
        label: 'NoExport',
        doc: 'Indicates that this class\'s declaration should not be included in the automatically- generated C++ header file by the header generator.The C++ class declaration must be defined manually in a separate header file.Only valid for native classes.Do not use this for new classes.',
    },
    {
        label: 'NonTransient',
        doc: new vscode.MarkdownString('Negates a `Transient` Specifier inherited from a base class.'),
    },
    {
        label: 'NotBlueprintable',
        doc: 'Specifies that this class is not an acceptable base class for creating Blueprints. This is the default and is inherited by subclasses.',
    },
    {
        label: 'NotPlaceable',
        doc: new vscode.MarkdownString('Negates a `Placeable` Specifier inherited from a base class. Indicates that Objects of this class may not be placed into a Level, UI scene, or Blueprint in the Editor.'),
    },
    {
        label: 'PerObjectConfig',
        doc: new vscode.MarkdownString('Configuration information for this class will be stored per Object, where each object has a section in the `.ini` file named after the Object in the format `[ObjectName ClassName]`. This Specifier is propagated to child classes.'),
    },
    {
        label: 'Placeable',
        doc: new vscode.MarkdownString('Indicates that this class can be created in the Editor and placed into a level, UI scene, or Blueprint (depending on the class type). This flag is propagated to all child classes; child classes can override this flag using the `NotPlaceable` Specifier.'),
    },
    {
        label: 'ShowCategories',
        doc: new vscode.MarkdownString('Negates a `HideCategories` Specifier (inherited from a base class) for the listed categories.'),
        insertText: new vscode.SnippetString('ShowCategories=(${1:Category1, Category2, ...})'),
    },
    {
        label: 'ShowFunctions=(Category)',
        doc: 'Shows all functions within the listed categories in a property viewer.',
        insertText: new vscode.SnippetString('ShowFunctions=(${1:Category1, Category2, ...})'),
    },
    {
        label: 'ShowFunctions=FunctionName',
        doc: 'Shows the named function in a property viewer.',
        insertText: new vscode.SnippetString('ShowFunctions=${1:FunctionName}'),
    },
    {
        label: 'Transient',
        doc: new vscode.MarkdownString('Objects belonging to this class will never be saved to disk. This is useful in conjunction with certain kinds of native classes which are non-persistent by nature, such as players or windows. This Specifier is propagated to child classes, but can be overridden by the `NonTransient` Specifier.'),
    },
    {
        label: 'Within',
        doc: new vscode.MarkdownString('Objects of this class cannot exist outside of an instance of an `OuterClassName` Object. This means that creating an Object of this class requires that an instance of `OuterClassName` is provided as its `Outer` Object.'),
        insertText: new vscode.SnippetString('Within=${1:OuterClassName}'),
    },
];
