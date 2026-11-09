# CommandBars 对象

代表容器应用程序中命令栏的 **CommandBar** 对象的集合。

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

使用 **CommandBars** 属性可返回 **CommandBars** 集合。


## 示例


```JavaScript
/*本示例运行于各组件，在立即窗口显示每个菜单栏和工具栏的名称及本地名称，并显示一个值，该值指示菜单栏或工具栏是否可见。*/
function test() {
    for (let i = 1; i <= CommandBars.Count; i++) {
        let commandBarar = CommandBars.Item(i)
        Console.log(commandBarar.Name + "\t" + commandBarar.NameLocal + "\t" + commandBarar.Visible)
    }
}
```
使用 **Add** 方法可向集合中添加一个新的命令栏。



```JavaScript
/*本示例运行于各组件，新建一个名为“Custom1”的命令栏，并将该命令栏设置为可见。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom1", msoBarFloating)
    commandBar.Visible = true
}
```
使用 **CommandBars** (*index*) 可返回一个 **CommandBar** 对象，其中 *index* 是该命令栏的名称或索引号。



```JavaScript
/*本示例运行于各组件，将名为“Custom1”的工具栏停靠在应用程序窗口的底部。*/
function test() {
    Application.CommandBars.Item("Custom1").Position = msoBarBottom
}
```
可以使用名称或索引号指定容器应用程序的可用菜单栏和工具栏列表中的菜单栏或工具栏，但必须使用名称指定菜单、快捷菜单或子菜单（所有这些均由 **CommandBar** 对象代表）。如果两个或两个以上的自定义菜单或子菜单同名，则 **CommandBars** (*index*) 将返回第一个具有该名称的菜单。为确保返回正确的菜单或子菜单，可以找到显示该菜单的弹出式控件，然后对该弹出式控件应用 **CommandBar** 属性以返回代表该菜单的命令栏。


{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/Add) | 创建一个新的命令栏并将其添加到命令栏集合中。 |
| [ExecuteMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/ExecuteMso) | 执行由 *idMso* 参数标识的控件。 |
| [FindControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/FindControl) | 获取一个符合指定条件的 **CommandBarControl** 对象。 |
 | [FindControls](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/FindControls) | 获取符合指定条件的 **CommandBarControls** 集合。 |
| [GetEnabledMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/GetEnabledMso) | 如果启用了 **idMso** 参数标识的控件，则返回 **True** 。 |
| [GetImageMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/GetImageMso) | 返回由 *idMso* 参数标识的控件图像（缩放到指定的宽度和高度尺寸）的 **IPictureDisp** 对象。 |
| [GetLabelMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/GetLabelMso) | 将 *idMso* 参数标识的控件的标签作为 **String** 类型的值返回。 |
| [GetPressedMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/GetPressedMso) | 返回一个值，该值指示是否已按下 **idMso** 参数标识的 **toggleButton** 控件。 |
| [GetScreentipMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/GetScreentipMso) | 将 *idMso* 参数标识的控件的屏幕提示作为 **String** 类型的值返回。 |
| [GetSupertipMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/GetSupertipMso) | 将 *idMso* 参数标识的控件的超级提示作为 **String** 类型的值返回。 |
| [GetVisibleMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/GetVisibleMso) | 如果 *idMso* 参数标识的控件可见，则返回 **True** 。 |
| [Item](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/Item) | 获取 **CommandBars** 集合中的 **CommandBar** 对象。只读。 |
| [ReleaseFocus](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/ReleaseFocus) | 释放所有命令栏的用户界面焦点。 |
| [SetVisibleMso](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/SetVisibleMso) | 通过控件对应的idMso控制该控件的显示状态（显示/隐藏）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActionControl](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/ActionControl) | 获取一个 **CommandBarControl** 对象，该对象的 **OnAction** 属性设置为当前正在运行的过程。只读。 |
| [ActiveMenuBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/ActiveMenuBar) | 获取一个 **CommandBar** 对象，该对象代表容器应用程序中的活动菜单栏。只读。 |
| [AdaptiveMenus](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/AdaptiveMenus) | 此属性可选中或取消选中指定 WPS Office 中菜单是完全显示还是按个性化方式显示的选项的复选框控件。可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/Application) | 获取一个 **Application** 对象，代表 **CommandBars** 对象的容器应用程序（可以使用 **Automation** 对象的此属性返回该对象的容器应用程序）。只读。 |
| [Count](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/Count) | 获取宿主应用程序中的命令栏数量。只读。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/Creator) | 获取一个 32 位整数，指示创建 **CommandBars** 对象时所使用的应用程序。只读。 |
| [DisableAskAQuestionDropdown](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/DisableAskAQuestionDropdown) | 如果启用了 **“应答向导”** 下拉菜单，则为 **True** 。可读写。 |
| [DisableCustomize](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/DisableCustomize) | 如果禁用了工具栏的自定义功能，则为 **True** 。可读写。 |
| [DisplayFonts](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/DisplayFonts) | 如果在 **“字体”** 框中以实际字体显示字体名称，则为 **True** 。可读写。 |
| [DisplayKeysInTooltips](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/DisplayKeysInTooltips) | 如果每个命令栏控件的快捷键都显示在 **“工具提示”** 中，则为 **True** 。可读写。 |
| [DisplayTooltips](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/DisplayTooltips) | 如果只要用户将指针放在命令栏控件上方就显示“屏幕提示”，则为 **True** 。可读写。 |
| [LargeButtons](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/LargeButtons) | 如果显示的工具栏按钮比常规尺寸要大，则为 **True** 。可读写。 |
| [MenuAnimationStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/MenuAnimationStyle) | 获取或设置一个代表命令栏的动画处理方式的 **[MsoMenuAnimation](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoMenuAnimation)** 。可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBars/member/Parent) | 获取 **CommandBars** 对象的 **Parent** 对象。只读。 |