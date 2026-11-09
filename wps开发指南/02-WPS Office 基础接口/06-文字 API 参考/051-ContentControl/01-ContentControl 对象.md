# ContentControl 对象

一个内容控件。内容控件是固定在文档中并可能带有标记的区域，这些区域作为特定类型的内容的容器。单个内容控件可能包含日期、列表或带格式文本段落等内容。 **ContentControl** 对象是 **[ContentControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/obj)** 集合的成员。

## 说明


使用 **ContentControls** 集合的 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControls/member/Add)** 方法可创建内容控件。使用 **Add** 方法的 *Type* 参数可以指定要创建的内容控件的类型。


## 示例


```JavaScript
/*本示例在活动文档中插入下拉列表内容控件，并在列表中添加几个项。*/
function test() {
    let contentControl = ActiveDocument.ContentControls.Add(wdContentControlDropdownList)

    // List entries
    contentControl.DropdownListEntries.Add("Cat")
    contentControl.DropdownListEntries.Add("Dog")
    contentControl.DropdownListEntries.Add("Horse")
    contentControl.DropdownListEntries.Add("Monkey")
    contentControl.DropdownListEntries.Add("Snake")
    contentControl.DropdownListEntries.Add("Other")
}
```
使用 **Type** 属性可以更改内容控件的类型。例如，您或许希望将日期控件更改为文本控件。但是，您可能无法更改所有内容控件的类型；一些内容控件可能不允许更改其类型。此外，根据内容控件的内容，您也许不能更改控件的类型。例如，如果作为更改目标的内容控件不允许使用现有内容控件中内容的类型，那么，类型更改尝试将受到禁止并将生成运行时错误。



```JavaScript
/*本示例插入一个日期内容控件并且设置其值，然后将该控件更改为文本内容控件。*/
function test() {
    let control = Application.ActiveDocument.ContentControls.Add(wdContentControlDate)
    control.Range.Text = "January 1, 2007"
    control.Type = wdContentControlText
}
```
使用 **SetPlaceholderText** 方法可以将占位符文本从默认字符串更改为更适合该控件的内容。使用 **Title** 属性可以指定该控件的标题文本。在将光标放置到该控件的内部或者将鼠标指针放置到控件上方时，将在控件上方显示此标题。

根据您具有的内容控件的类型，您可能无法使用 **ContentControl** 对象的某些属性和方法。

并非所有内容控件属性都适用于所有不同类型的内容控件。下表列出了哪些属性适用于哪些类型的内容控件。

| 属性/方法                   | 适用于                                                                   |
| ----------------------- | --------------------------------------------------------------------- |
| BuildingBlockCategory属性 | BuildingBlock 库内容控件 (wdContentControlBuildingBlockGallery)            |
| BuildingBlockType属性     | BuildingBlock 库内容控件 (wdContentControlBuildingBlockGallery)            |
| DateDisplayFormat属性     | 日期内容控件 (wdContentControlDate)                                         |
| DateDisplayLocale属性     | 日期内容控件 (wdContentControlDate)                                         |
| DateStorageFormat属性     | 日期内容控件 (wdContentControlDate)                                         |
| DropdownListEntries属性   | 组合框和下拉列表内容控件（wdContentControlComboBox 和 wdContentControlDropdownList） |
| MultiLine属性             | 纯文本内容控件 (wdContentControlText)                                        |
| Ungroup方法               | 组内容控件 (wdContentControlGroup)                                         |


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Copy) | 将活动文档中的内容控件复制到剪贴板。 |
| [Cut](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Cut) | 从活动文档中删除内容控件并将该内容控件移动到剪贴板中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Delete) | 删除指定的内容控件以及内容控件中的内容。 |
| [SetCheckedSymbol](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/SetCheckedSymbol) | 设置用于代表复选框内容控件的选中状态的符号。 |
| [SetPlaceholderText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/SetPlaceholderText) | 设置在用户输入自己的文本之前显示在内容控件中的占位符文本。 |
| [SetUncheckedSymbol](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/SetUncheckedSymbol) | 设置用于代表复选框内容控件的未选中状态的符号。 |
| [Ungroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Ungroup) | 从文档中删除一个组内容控件，以便它的子内容控件不再嵌套，并且可以自由地进行编辑。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AllowInsertDeleteSection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/AllowInsertDeleteSection) | 返回或设置用户是否可以使用用户界面在指定的重复节内容控件中添加或删除节。 |
| [Appearance](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Appearance) | 返回或设置内容控件的外观。可读/写 **[WdContentControlAppearance](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdContentControlAppearance)** 类型。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Application) | 返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Application/obj)** 对象，该对象代表 WPS 应用程序。 |
| [BuildingBlockCategory](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/BuildingBlockCategory) | 返回或设置一个 **String** ，代表构建基块库内容控件的类别。可读写。 |
| [BuildingBlockType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/BuildingBlockType) | 返回或设置一个 **WdBuildingBlockTypes** 常量，该常量代表构建基块库内容控件的构建基块的类型。可读写。 |
| [Checked](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Checked) | 返回或设置 **Boolean** 类型的值，代表复选框的当前状态（选中/未选中）。可读/写。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Color) | 返回或设置内容控件的颜色。可读/写 **WdColor** 类型。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Creator) | 返回一个 32 位的整数，该整数表示在其中创建加载项的应用程序。只读 **Long** 类型。 |
| [DateCalendarType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/DateCalendarType) | 返回或设置一个 **WdCalendarType** 常量，该常量表示日历内容控件的日历类型。可读写。 |
| [DateDisplayFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/DateDisplayFormat) | 返回或设置 **String** 值，该值表示日期的显示格式。可读/写。 |
| [DateDisplayLocale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/DateDisplayLocale) | 返回一个 **WdLanguageID** ，它代表日期内容控件中显示的日期的语言格式。可读写。 |
| [DateStorageFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/DateStorageFormat) | 返回或设置 **WdContentControlDateStorageFormat** 值，该值表示在将日期内容控件绑定到活动文档的 XML 数据存储时的日期存储和检索格式。可读/写。 |
| [DefaultTextStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/DefaultTextStyle) | 返回或设置一个 **Variant** ，它代表用于设置文本内容控件中文本格式的字符样式的名称。可读写。 |
| [DropdownListEntries](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/DropdownListEntries) | 返回 **ContentControlListEntries** 集合，该集合表示下拉列表内容控件或组合框内容控件中的项。只读。 |
| [ID](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/ID) | 返回一个代表内容控件标识的 **String** 类型的值。只读。 |
| [Level](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Level) | 返回内容控件的级别 - 内容控件是围绕文本、段落、表格单元格还是表格行；或者如果它是内联的。只读 **[WdContentControlLevel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdContentControlLevel)** 类型。 |
| [LockContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/LockContentControl) | 返回或设置 **Boolean** 值，该值表示用户能否从活动文档中删除内容控件。可读/写。 |
| [LockContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/LockContents) | 返回或设置 **Boolean** 值，该值表示用户能否编辑内容控件的内容。可读/写。 |
| [MultiLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/MultiLine) | 返回或设置 **Boolean** 值，该值表示文本内容控件是否允许多行文本。可读/写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Parent) | 返回一个 **Object** 类型的值，该值代表指定 **ContentControl** 对象的父对象。 |
| [ParentContentControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/ParentContentControl) | 返回一个 **ContentControl** 类型的值，该值代表嵌套在格式文本控件或组控件内的内容控件的父内容控件。只读。 |
| [PlaceholderText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/PlaceholderText) | 返回一个 **BuildingBlock** 对象，该对象代表内容控件的占位符文本。只读。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Range) | 返回 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Range/obj)** ，它表示活动文档中的内容控件的内容。只读。 |
| [RepeatingSectionItemTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/RepeatingSectionItemTitle) | 返回或设置与指定的重复节内容控件关联的上下文菜单中使用的重复节项的名称。 |
| [RepeatingSectionItems](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/RepeatingSectionItems) | 返回指定重复节内容控件中重复节项的集合。只读。 |
| [ShowingPlaceholderText](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/ShowingPlaceholderText) | 返回 **Boolean** 值，该值指示是否显示内容控件的占位符文本。只读。 |
| [Tag](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Tag) | 返回或设置一个 **String** 类型的值，该值代表用于识别内容控件的值。可读写。 |
| [Temporary](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Temporary) | 返回或设置 **Boolean** 值，该值表示当用户编辑内容控件的内容时是否从活动文档中删除该控件。可读/写。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Title) | 返回或设置 **String** 值，该值表示内容控件的标题。可读/写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/Type) | 返回或设置 **[WdContentControlType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/WdContentControlType)** ，它表示内容控件的类型。可读/写。 |
| [XMLMapping](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ContentControl/member/XMLMapping) | 返回 **XMLMapping** 对象，该对象表示内容控件到文档的数据存储中的 XML 数据的映射。只读。 |