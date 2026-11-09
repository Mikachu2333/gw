# CommandBarComboBox 对象

代表命令栏中的一个组合框控件。

## 说明


使用 **Controls(*index*)** 可返回一个 **CommandBarComboBox** 对象，其中 *index* 为该控件的索引号。请注意，该控件的 **Type** 属性必须是 **msoControlEdit** 、 **msoControlDropdown** 、 **msoControlComboBox** 、 **msoControlButtonDropdown** 、 **msoControlSplitDropdown** 、 **msoControlOCXDropdown** 、 **msoControlGraphicCombo** 或 **msoControlGraphicDropdown** 。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。


## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，然后在该控件中添加两项。本示例还设置项的行数和组合框的宽度。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("First Item", 1)
    cbComboBox.AddItem("Second Item", 2)
    cbComboBox.DropDownLines = 3
    cbComboBox.DropDownWidth = 75
    cbComboBox.ListHeaderCount = 0
}
```
还可以使用 **FindControl** 方法返回 **CommandBarComboBox** 对象。



```JavaScript
/*本示例运行于各组件，在所有命令栏中搜索ID为1的可见 CommandBarComboBox 对象。*/
function test() {
    let cbComboBox = Application.CommandBars.FindControl(msoControlComboBox, 1, null, true)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AddItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/AddItem) | 向指定命令栏组合框控件添加列表项。该组合框控件必须是自定义控件，并且必须是下拉列表框或组合框。 |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Clear) | 从命令栏组合框控件（下拉列表框或组合框）中删除所有列表项。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Copy) | 将一个命令栏组合框控件复制到已有的命令栏中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Delete) | 将 **CommandBarCombo** 控件对象从其集合中删除。在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Execute) | 运行分配给指定 **CommandBarComboBox** 控件的过程或内置命令。 |
| [List](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/List) | 获取或设置 **CommandBarComboBox** 控件中的某一项。可读/写。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Move) | 将指定的控件移动到已有的命令栏。 |
| [RemoveItem](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/RemoveItem) | 从 **CommandBarComboBox** 控件中删除一项。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Reset) | 将内置命令栏重置为其默认配置，或将内置 **CommandBarComboBox** 控件重置为其初始功能和图符。 |
| [SetFocus](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/SetFocus) | 将键盘的焦点移到指定 **CommandBarComboBox** 控件。如果该控件被禁用或不可见，那么此方法将失败。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Application) | 获取一个 **Application** 对象，代表 **CommandBarComboBox** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [BeginGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/BeginGroup) | 如果指定的命令栏控件显示在命令栏上控件组的最前面，则获取 True。可读写。 |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/BuiltIn) | 如果指定的命令栏控件是容器应用程序的内置控件，则获取 **True** 。如果是自定义控件或是已设置了 **OnAction** 属性的内置控件，则返回 **False** 。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Caption) | 获取或设置命令栏控件的标题文字。可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Creator) | 获取一个 32 位整数，指示创建 **CommandBarComboBox** 对象时所使用的应用程序。只读。 |
| [DescriptionText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/DescriptionText) | 获取或设置命令栏组合框控件的说明。可读写。 |
| [DropDownLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/DropDownLines) | 获取或设置命令栏组合框控件中的行数。该组合框控件必须为自定义控件并且是下拉列表框或组合框。可读写。 |
| [DropDownWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/DropDownWidth) | 获取或设置指定命令栏组合框控件的列表宽度（以像素为单位）。可读写。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Enabled) | 获取或设置用于指定是否启用 **CommandBarComboBox** 的 **Boolean** 值。可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Height) | 获取或设置 **CommandBarComboBox** 控件的高度。可读写。 |
| [HelpContextId](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/HelpContextId) | 获取或设置附加于 **CommandBarComboBox** 控件的“帮助”主题的帮助上下文 ID 号。可读写。 |
| [HelpFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/HelpFile) | 获取或设置附加于 **CommandBarComboBox** 控件的“帮助”主题的文件名。可读写。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Id) | 获取内置的 **CommandBarComboBox** 控件的 ID。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Index) | 获取一个 **Long** 类型的值，该值代表集合中 **CommandBarComboBox** 对象的索引号。只读。 |
| [IsPriorityDropped](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/IsPriorityDropped) | 如果当前已根据使用统计信息和布局空间将控件从菜单或工具栏中删除，则返回 **True** 。（请注意，这与通过 **Visible** 属性设置的控件可见性不同）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Left) | 获取 **CommandBarComboBox** 控件相对于屏幕左边缘的水平位置（以像素为单位）。返回距离停靠区域左侧的距离。只读。 |
| [ListCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/ListCount) | 获取 **CommandBarComboBox** 控件中列表项的数目。只读。 |
| [ListHeaderCount](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/ListHeaderCount) | 获取或设置出现在分隔行之上的 **CommandBarComboBox** 控件中的列表项数目。可读写。 |
| [ListIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/ListIndex) | 获取或设置 **CommandBarComboBox** 控件的列表部分中选定项的索引号。如果没有选择列表中的任何项，此属性将返回 0。可读写。 |
| [OLEUsage](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/OLEUsage) | 获取或设置特定的 OLE 客户端和 OLE 服务器角色，在合并两个 WPS Office应用程序时，会用到这些角色中的 **CommandBarComboBox** 控件。可读写。 |
| [OnAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/OnAction) | 获取或设置一个 Visual Basic 过程的名称，该过程在用户单击或更改 **CommandBarComboBox** 控件的值时运行。可读写。 |
| [Parameter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Parameter) | 获取或设置一个应用程序可用于执行 **CommandBarComboBox** 控件中命令的字符串。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Parent) | 获取 **CommandBarComboBox** 对象的 **Parent** 对象。只读。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Priority) | 获取或设置 **CommandBarComboBox** 控件的优先级。对于固定命令栏，当一行中无法容纳其中的所有控件时，控件的优先级将决定该控件是否会从命令栏中删除。可读写。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Style) | 获取或设置 **CommandBarComboBox** 控件的显示方式。该属性值可设置为以下 **[MsoComboStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoComboStyle)** 常量之一： **msoComboLabel** 或 **msoComboNormal** 。可读写。 |
| [Tag](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Tag) | 获取或设置有关 **CommandBarComboBox** 控件的信息，例如，可作为过程参数的数据或用于识别该控件的信息。可读写。 |
| [Text](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Text) | 获取或设置 **CommandBarComboBox** 控件的显示或编辑区中的文字。可读写。 |
| [TooltipText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/TooltipText) | 获取或设置 **CommandBarComboBox** 的 **“屏幕提示”** 中显示的文本。可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Top) | 获取指定的 **CommandBarComboBox** 控件顶边到屏幕顶边的距离（以像素为单位）。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Type) | 获取 **CommandBarComboBox** 控件的类型。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Visible) | 获取或设置 **CommandBarComboBox** 控件的 **Visible** 属性。如果 **CommandBarControl** 可见，则此属性为 **True** 。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarComboBox/member/Width) | 获取或设置指定的 **CommandBarComboBox** 控件的宽度（以像素为单位）。可读写。 |