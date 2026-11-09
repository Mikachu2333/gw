# CommandBar 对象

代表容器应用程序中的一个命令栏。 **CommandBar** 对象是 **CommandBars** 集合的成员。

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

使用 **CommandBars** (*index*) 可返回一个 **CommandBar** 对象，其中 *index* 是命令栏的名称或索引号。


## 示例


```JavaScript
/*本示例运行于各组件，将遍历命令栏集合，以查找“Forms”命令栏。如果找到“Forms”命令栏，则显示该命令栏并保护其停靠状态。在本示例中，变量 commandBar 代表一个 CommandBar 对象。*/
function test() {
    let foundFlag = false
    for (let i = 1; i <= Application.CommandBars.Count; i++) {
        let commandBar = Application.CommandBars.Item(i)
        if (commandBar.Name == "Forms") {
            commandBar.Protection = msoBarNoChangeDock
            commandBar.Visible = true
            foundFlag = true
        }
    }
    if (!foundFlag) {
        alert("'Forms'command bar is not in the collection.")
    }
}
```
可以使用名称或索引号在容器应用程序的可用菜单栏和工具栏列表中指定菜单栏或工具栏，但必须使用名称指定菜单、快捷菜单或子菜单（所有这些内容均由 **CommandBar** 对象代表）。



```JavaScript
/*本示例运行于各组件，向名为“Tools”的命令栏中添加新的控件，并设置在选择该控件后，将运行名为“qtrReport”的JS宏。*/
function test() {
    let control = Application.CommandBars.Item("Tools").Controls.Add(msoControlButton)
    control.BeginGroup = true
    control.Caption = "Make Report"
    control.FaceID = 0
    control.OnAction = "qtrReport"
}
```
如果两个或两个以上的自定义菜单或子菜单同名， **CommandBars(*index*)** 将返回第一个具有该名称的菜单或子菜单。为了确保返回正确的菜单或子菜单，可找到显示该菜单的弹出式控件，然后对该弹出式控件应用 **CommandBar** 属性以返回代表该菜单的命令栏。



```JavaScript
/*本示例运行于各组件，向名为“Tools”的命令栏中添加控件。*/
function test() {
    let commandBar = Application.CommandBars.Item("Tools")
    commandBar.Controls.Add(null, 3)    //ID of Save command is 3
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Delete) | 从集合中删除 **CommandBar** 对象。 |
| [FindControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/FindControl) | 获取一个符合指定条件的 **CommandBarControl** 对象。 |
| [Reset](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Reset) | 将内置命令栏重置为其默认配置。 |
| [ShowPopup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/ShowPopup) | 将指定的命令栏作为快捷菜单，在指定坐标或当前光标位置显示。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AdaptiveMenu](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/AdaptiveMenu) | 获取一个 **Boolean** 类型的值，该值指定命令栏是否应包含自适应菜单。可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Application) | 获取一个 **Application** 对象，代表 **CommandBar** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [BuiltIn](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/BuiltIn) | 如果指定的命令栏是容器应用程序的内置命令栏，则获取 **True** 。如果是自定义命令栏，则返回 **False** 。只读。 |
| [Controls](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Controls) | 获取一个代表命令栏上的所有控件的 **CommandBarControls** 对象。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Creator) | 获取一个 32 位整数，指示创建 **CommandBar** 对象时所使用的应用程序。只读。 |
| [Enabled](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Enabled) | 获取或设置用于指定是否启用了指定 **CommandBar** 的 **Boolean** 值。可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Height) | 获取或设置 **CommandBar** 的高度。可读写。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Index) | 获取一个 **Long** 类型的值，该值代表集合中 **CommandBar** 对象的索引号。只读。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Left) | 设置或获取从对象左边缘算起 **CommandBar** 相对于屏幕的水平距离（以像素为单位）。可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Name) | 获取内置的 **CommandBar** 对象的名称。只读。 |
| [NameLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/NameLocal) | 获取以容器应用程序的语言版本显示的内置命令栏名称，或者返回或设置自定义命令栏的名称。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Parent) | 获取 **CommandBar** 对象的 **Parent** 对象。只读。 |
| [Position](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Position) | 获取或设置一个代表命令栏位置的 **[MsoBarPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBarPosition)** 常量。可读写。 |
| [Protection](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Protection) | 获取或设置一个 **[MsoBarProtection](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBarProtection)** 常量，代表防止用户对命令栏进行自定义的方式。可读写。 |
| [RowIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/RowIndex) | 获取或设置一个命令栏相对于同一停靠区域中其他命令栏的停靠顺序。该属性值可以是大于零的整数，也可以是以下 **[MsoBarRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBarRow)** 常量之一： **msoBarRowFirst** 或 **msoBarRowLast** 。可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Top) | 设置或获取指定的命令栏顶边到屏幕顶边的距离。对于固定命令栏，此属性返回或设置从命令栏到停靠区域顶部的距离。可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Type) | 获取命令栏的类型。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Visible) | 获取或设置命令栏的 **Visible** 属性。如果命令栏可见，则为 **True** 。可读写。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/member/Width) | 获取或设置指定命令栏的宽度（以像素为单位）。可读写。 |