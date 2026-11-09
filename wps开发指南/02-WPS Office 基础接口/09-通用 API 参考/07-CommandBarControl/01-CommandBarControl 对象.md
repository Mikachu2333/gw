# CommandBarControl 对象

代表一个命令栏控件。 **CommandBarControl** 对象是 **CommandBarControls** 集合的成员。 **CommandBarControl** 对象与 **CommandBarButton** 、 **CommandBarComboBox** 和 **CommandBarPopup** 对象具有同样的属性和方法。

## 说明


在编写处理自定义命令栏控件的 JavaScript 代码时，请使用 **CommandBarButton** 、 **CommandBarComboBox** 和 **CommandBarPopup** 对象。

在编写用于处理容器应用程序中的内置控件的代码时，如果该控件不能用上述三个对象中的任意一个来代表，则可以使用 **CommandBarControl** 对象。使用 **Controls** (*index*) 可返回一个 **CommandBarControl** 对象，其中 *index* 是控件的索引号。（该控件的 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Type)** 属性必须是 **msoControlLabel** 、 **msoControlExpandingGrid** 、 **msoControlSplitExpandingGrid** 、 **msoControlGrid** 或 **msoControlGauge** ）。

声明为 **CommandBarControl** 的变量可赋予 **CommandBarButton** 、 **CommandBarComboBox** 和 **CommandBarPopup** 值。

还可以使用 **FindControl** 方法返回 **CommandBarControl** 对象。


## 示例


```JavaScript
/*本示例运行于各组件，搜索 msoControlGauge 类型的控件；如果找到一个，它将显示该控件的索引号和包含它的命令栏的名称。在本例中，变量 cbControl 代表一个 CommandBarControl 对象。*/
function test() {
    let cbControl = Application.CommandBars.FindControl(msoControlGauge)
    if (cbControl == null) {
        alert("A control of type msoControlGauge was not found.")
    } else {
        alert(`Control ${cbControl.Index} on command bar ${cbControl.Parent.Name} is type msoControlGauge`)
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“WordArt”的命令栏的最后一个控件相对于屏幕左边缘的水平位置。*/
function test() {
    let cbControls = ActiveWorkbook.CommandBars.Item("WordArt").Controls
    alert(cbControls.Item(cbControls.Count).Left + " 像素")
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Copy) | 将一个命令栏控件复制到已有的命令栏中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Delete) | 将 **CommandBarControl** 对象从其集合中删除。 |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Execute) | 运行分配给指定 **CommandBarControl** 控件的过程或内置命令。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Move) | 将指定的 **CommandBarControl** 移动到已有的命令栏。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Reset) | 将内置命令栏重置为其默认配置，或将内置 **CommandBarControl** 重置为其初始功能和图符。 |
| [SetFocus](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/SetFocus) | 将键盘的焦点移到指定 **CommandBarControl** 。如果该控件被禁用或不可见，那么此方法将失败。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [BeginGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/BeginGroup) | 如果指定的命令栏控件显示在命令栏上控件组的最前面，则获取 **True** 。可读写。 |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/BuiltIn) | 如果指定的命令栏控件是容器应用程序的内置控件，则获取 **True** 。如果是自定义控件或是已设置了 **OnAction** 属性的内置控件，则返回 **False** 。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Caption) | 获取或设置命令栏控件的标题文字。可读写。 |
| [DescriptionText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/DescriptionText) | 获取或设置命令栏控件的说明。可读写。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Enabled) | 获取或设置指定是否启用 **CommandBarControl** 的 **Boolean** 值。可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Height) | 获取或设置 **CommandBarControl** 控件的高度。可读写。 |
| [HelpContextId](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/HelpContextId) | 获取或设置附加于 **CommandBarControl** 的“帮助”主题的帮助上下文 ID 号。可读写。 |
| [HelpFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/HelpFile) | 获取或设置附加于 **CommandBarControl** 的“帮助”主题的文件名。可读写。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Id) | 获取内置的 **CommandBarControl** 的 ID。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Index) | 获取一个 **Long** 类型的值，该值代表集合中 **CommandBarControl** 对象的索引号。只读。 |
| [IsPriorityDropped](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/IsPriorityDropped) | 如果当前已根据使用统计信息和布局空间将控件从菜单或工具栏中删除，则返回 **True** 。（请注意，这与通过 **Visible** 属性设置的控件可见性不同）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Left) | 获取指定的 **CommandBarControl** 相对于屏幕左边缘的水平位置（以像素为单位）。返回距离停靠区域左侧的距离。只读。 |
| [OLEUsage](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/OLEUsage) | 获取或设置特定的 OLE 客户端和 OLE 服务器角色，在合并两个 WPS Office 应用程序时，会用到这些角色中的 **CommandBarControl** 。可读写。 |
| [OnAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/OnAction) | 获取或设置一个 JavaScript 方法的名称，该方法在用户单击或更改 **CommandBarControl** 的值时运行。可读写。 |
| [Parameter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Parameter) | 获取或设置一个应用程序可用于执行 **CommandBarControl** 中命令的字符串。可读写。 |
 | [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Parent) | 获取 **CommandBarControl** 对象的 **Parent** 对象。只读。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Priority) | 获取或设置 **CommandBarControl** 的优先级。对于固定命令栏，当一行中无法容纳其中的所有控件时，控件的优先级将决定该控件是否会从命令栏中删除。无法容纳在一行中的控件将在命令栏上从右向左进行删减。可读写。 |
| [Tag](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Tag) | 获取或设置有关 **CommandBarControl** 的信息，例如，可作为过程参数的数据或用于识别该控件的信息。可读写。 |
| [TooltipText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/TooltipText) | 获取或设置 **CommandBarControl** 的 **“屏幕提示”** 中显示的文本。可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Top) | 获取指定的 **CommandBarControl** 顶边到屏幕顶边的距离（以像素为单位）。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Type) | 获取 **CommandBarControl** 的类型。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Visible) | 获取或设置 **CommandBarControl** 的 **Visible** 属性。如果 **CommandBarControl** 可见，则此属性为 **True** 。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/Width) | 获取或设置指定的 **CommandBarControl** 的宽度（以像素为单位）。可读写。 |