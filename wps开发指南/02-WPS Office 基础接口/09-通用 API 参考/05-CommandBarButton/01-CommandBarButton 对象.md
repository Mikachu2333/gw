# CommandBarButton 对象

代表命令栏中的一个按钮控件。

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

使用 **Controls(*index*)** 可返回一个 **CommandBarButton** 对象，其中 *index* 是控件的索引号。请注意，该控件的 **Type** 属性必须是 **[msoControlButton](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoControlType)** 。

还可以使用 **FindControl** 方法返回 **CommandBarButton** 对象。


## 示例


```JavaScript
/*本示例运行于各组件，添加一个名为“Custom”的命令栏并为其添加一个按钮控件，然后更改该按钮控件的样式。*/
function test() {
    let cbButton = Application.CommandBars.Add("Custom").Controls.Add(msoControlButton)
    if (cbButton.Type == msoControlButton) {
        if (cbButton.Style == msoButtonIcon) {
            cbButton.Style = msoButtonIconAndCaption
        } else {
            cbButton.Style = msoButtonIcon
        }
    }
}
```


```JavaScript
/*本示例运行于各组件，显示名为“WordArt”的命令栏的第一个（按钮）控件相关联的超链接的类型是否为msoCommandBarButtonHyperlinkNone。*/
function test() {
    let cbButton = Application.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbButton.HyperlinkType == msoCommandBarButtonHyperlinkNone)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Copy) | 将一个命令栏按钮控件复制到已有的命令栏中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Delete) | 将 **CommandBarButton** 对象从其集合中删除。 |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Execute) | 运行分配给指定 **CommandBarButton** 控件的过程或内置命令。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Move) | 将指定的 **CommandBarButton** 控件移动到已有的命令栏。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Reset) | 将内置 **CommandBarButton** 控件重置为其初始功能和图符。 |
| [SetFocus](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/SetFocus) | 将键盘的焦点移到指定的 **CommandBarButton** 控件。如果该按钮被禁用或不可见，那么此方法将失败。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Application) | 获取一个 **Application** 对象，代表 **CommandBarButton** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [BeginGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/BeginGroup) | 如果指定的命令栏控件显示在命令栏上控件组的最前面，则获取 True。可读写。 |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/BuiltIn) | 如果指定的命令栏控件是容器应用程序的控件，则为 **True** 。如果是自定义控件或是已设置了 **OnAction** 属性的内置控件，则返回 **False** 。只读。 |
| [BuiltInFace](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/BuiltInFace) | 如果命令栏按钮控件的图标是其原始内置图标，则为 **True** 。可读写。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Caption) | 获取或设置命令栏控件的标题文字。可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Creator) | 获取一个 32 位整数，指示创建 **CommandBarButton** 对象时所使用的应用程序。只读。 |
| [DescriptionText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/DescriptionText) | 获取或设置命令栏按钮控件的说明。可读写。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Enabled) | 如果启用了指定的 **CommandBar** 或 **CommandBarControl** ，则此属性为 true。可读写。 |
| [FaceId](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/FaceId) | 获取或设置某个 **CommandBarButton** 控件的图符的 ID 号。可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Height) | 获取或设置命令栏控件的高度。可读写。 |
| [HelpContextId](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/HelpContextId) | 获取或设置附加于 **CommandBarButton** 控件的“帮助”主题的帮助上下文 ID 号。可读写。 |
| [HelpFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/HelpFile) | 获取或设置附加于 **CommandBarButton** 控件的“帮助”主题的文件名。可读写 |
| [HyperlinkType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/HyperlinkType) | 设置或获取一个 **[MsoCommandBarButtonHyperlinkType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoCommandBarButtonHyperlinkType)** 常量，代表与指定的命令栏按钮相关联的超链接的类型。可读写。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Id) | 获取内置的 **CommandBarButton** 控件的 ID。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Index) | 获取一个 **Long** 类型的值，该值代表集合中 **CommandBarButton** 对象的索引号。只读。 |
| [IsPriorityDropped](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/IsPriorityDropped) | 如果当前已根据使用统计信息和布局空间将 **CommandBarButton** 控件从菜单或工具栏中删除，则获取 **True** 。（请注意，这与通过 Visible 属性设置的控件可见性不同）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Left) | 设置或获取指定的 **CommandBarButton** 控件相对于屏幕左边缘的水平位置（以像素为单位）。返回距离停靠区域左侧的距离。只读。 |
| [OLEUsage](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/OLEUsage) | 获取或设置特定的 OLE 客户端和 OLE 服务器角色，在合并两个 WPS Office应用程序时，会用到这些角色中的 **CommandBarButton** 控件。可读写。 |
| [OnAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/OnAction) | 获取或设置一个 JS函数的名称，该过程在用户单击或更改 **CommandBarButton** 控件的值时运行。可读写。 |
| [Parameter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Parameter) | 获取或设置一个应用程序可用于执行 **CommandBarButton** 控件中命令的字符串。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Parent) | 获取 **CommandBarButton** 对象的 **Parent** 对象。只读。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Priority) | 获取或设置 CommandBarButton 控件的优先级。对于固定命令栏，当一行中无法容纳其中的所有控件时，控件的优先级将决定该控件是否会从命令栏中删除。无法容纳在一行中的控件将在命令栏上从右向左进行删减。可读写。 |
| [ShortcutText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/ShortcutText) | 获取或设置当控钮出现在菜单、子菜单或快捷菜单上时 **CommandBarButton** 控件旁边显示的快捷键文字。可读写。 |
| [State](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/State) | 获取或设置 **CommandBarButton** 控件的外观。可读写。 |
| [Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Style) | 获取或设置 **CommandBarButton** 控件的显示方式。可读写。 |
| [Tag](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Tag) | 获取或设置有关 **CommandBarButton** 控件的信息，例如，可作为过程参数的数据或用于识别该控件的信息。可读写。 |
| [TooltipText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/TooltipText) | 获取或设置 **CommandBarButton** 的 **“屏幕提示”** 中显示的文本。可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Top) | 获取指定的 **CommandBarButton** 控件顶边到屏幕顶边的距离（以像素为单位）。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Type) | 获取 **CommandBarButton** 控件的类型。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Visible) | 获取或设置 **CommandBarButton** 控件的 **Visible** 属性。如果 **CommandBarButton** 可见，则此属性为 **true** 。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarButton/member/Width) | 获取或设置指定的 **CommandBarButton** 控件的宽度（以像素为单位）。可读写。 |