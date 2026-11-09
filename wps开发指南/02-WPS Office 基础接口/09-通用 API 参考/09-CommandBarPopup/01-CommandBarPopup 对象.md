# CommandBarPopup 对象

代表命令栏上的一个弹出式控件。

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

每个弹出式控件都包含一个 **CommandBar** 对象。要从弹出式控件返回命令栏，请使用 **CommandBarPopup** 对象的 **CommandBar** 属性。

使用 **Controls** (*index*) 可返回一个 **CommandBarPopup** 对象，其中 *index* 是该控件的索引号。请注意，该控件的 **Type** 属性必须是 **msoControlPopup** 、 **msoControlGraphicPopup** 、 **msoControlButtonPopup** 、 **msoControlSplitButtonPopup** 或 **msoControlSplitButtonMRUPopup** 。

也可以使用 **FindControl** 方法返回一个 **CommandBarPopup** 对象。


## 示例


```JavaScript
/*本示例运行于各组件，在所有命令栏中搜索 ID 为 30013 的 CommandBarPopup 对象，然后显示该对象的标题文字。*/
function test() {
    let cbPopup = Application.CommandBars.FindControl(msoControlPopup, 30013)
    alert(cbPopup.Caption)
}
```


```JavaScript
/*本示例运行于各组件，显示名为“Shapes”的命令栏的第七个（弹出）控件展示的菜单的名称。*/
function test() {
    let commandBar = Application.CommandBars.Item("Shapes").Controls.Item(7).CommandBar
    alert(commandBar.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Copy) | 将一个命令栏弹出式控件复制到已有的命令栏中。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Delete) | 将 **CommandBarPopup** 对象从其集合中删除。 |
| [Execute](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Execute) | 运行分配给指定 **CommandBarPopup** 控件的过程或内置命令。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Move) | 将指定的 **CommandBarPopup** 控件移动到已有的命令栏。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Reset) | 将内置 **CommandBarPopup** 控件重置为其初始功能和图符。 |
| [SetFocus](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/SetFocus) | 将键盘的焦点移到指定的 **CommandBarPopup** 控件。如果弹出式控件被禁用或不可见，那么此方法将失败。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Application) | 获取一个 **Application** 对象，代表 **CommandBarPopup** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [BeginGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/BeginGroup) | 如果指定的命令栏控件显示在命令栏上控件组的最前面，则获取 **True** 。可读写。 |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/BuiltIn) | 如果指定的命令栏弹出式控件是容器应用程序的内置命令栏，则为 **True** 。如果是自定义命令栏，则返回 **False** 。只读。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Caption) | 获取或设置命令栏控件的标题文字。可读写。 |
| [CommandBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/CommandBar) | 获取一个 **CommandBar** 对象，该对象代表由指定的弹出式控件显示的菜单。只读。 |
| [Controls](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Controls) | 获取一个代表弹出式控件上的所有控件的 **CommandBarControls** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Creator) | 获取一个 32 位整数，指示创建 **CommandBarPopup** 对象时所使用的应用程序。只读。 |
| [DescriptionText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/DescriptionText) | 获取或设置命令栏弹出式控件的说明。可读写。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Enabled) | 如果启用了 **CommandBarPopup** ，则此属性为 **True** 。可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Height) | 获取或设置 **CommandBarPopup** 控件的高度。可读写。 |
| [HelpContextId](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/HelpContextId) | 获取或设置附加于 **CommandBarPopup** 控件的“帮助”主题的帮助上下文 ID 号。可读写。 |
| [HelpFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/HelpFile) | 获取或设置附加于 **CommandBarPopup** 控件的“帮助”主题的文件名。可读写。 |
| [Id](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Id) | 获取内置的 **CommandBarPopup** 控件的 ID。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Index) | 获取一个 **Long** 类型的值，该值代表集合中 **CommandBarPopup** 对象的索引号。只读。 |
| [IsPriorityDropped](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/IsPriorityDropped) | 如果当前已根据使用统计信息和布局空间将 **CommandBarPopup** 控件从菜单或工具栏中删除，则获取 **True** 。（请注意，这与通过 **Visible** 属性设置的控件可见性不同）。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Left) | 获取指定的 **CommandBarPopup** 相对于屏幕左边缘的水平位置（以像素为单位）。返回距离停靠区域左侧的距离。只读。 |
| [OLEMenuGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/OLEMenuGroup) | 获取或设置一个 **[MsoOLEMenuGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoOLEMenuGroup)** 常量，代表在将 OLE 服务器菜单组与 OLE 客户端菜单组合并时（即将一个容器应用程序类型的对象嵌入到另一个应用程序中时）指定的命令栏弹出式控件所属的菜单组。可读写。 |
| [OLEUsage](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/OLEUsage) | 获取或设置特定的 OLE 客户端和 OLE 服务器角色，在合并两个 WPS Office应用程序时，会用到这些角色中的 **CommandBarPopup** 控件。可读写。 |
| [OnAction](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/OnAction) | 获取或设置一个 Visual Basic 过程的名称，当用户单击或更改 **“CommandBarPopup”** 控件的值时，将运行该过程。可读写。 |
| [Parameter](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Parameter) | 获取或设置一个应用程序可用于执行 **CommandBarPopup** 控件中命令的字符串。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Parent) | 获取 **CommandBarPopup** 对象的 **Parent** 对象。只读。 |
| [Priority](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Priority) | 获取或设置 **CommandBarPopup** 控件的优先级。可读写。 |
| [Tag](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Tag) | 获取或设置有关 **CommandBarPopup** 控件的信息，例如，可作为过程参数的数据或用于识别该控件的信息。可读写。 |
| [TooltipText](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/TooltipText) | 获取或设置 **CommandBarPopup** 的 **“屏幕提示”** 中显示的文本。可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Top) | 获取指定的 **CommandBarPopup** 控件顶边到屏幕顶边的距离（以像素为单位）。只读。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Type) | 获取 **CommandBarPopup** 控件的类型。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Visible) | 获取或设置 **CommandBarPopup** 控件的 **Visible** 属性。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarPopup/member/Width) | 获取或设置指定的 **CommandBarPopup** 控件的宽度（以像素为单位）。可读写。 |