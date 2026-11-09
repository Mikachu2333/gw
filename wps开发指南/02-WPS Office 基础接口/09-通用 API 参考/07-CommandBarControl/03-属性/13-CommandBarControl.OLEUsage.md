# CommandBarControl.OLEUsage

获取或设置特定的 OLE 客户端和 OLE 服务器角色，在合并两个 WPS Office 应用程序时，会用到这些角色中的 **CommandBarControl** 。可读写。



## 语法

express.**OLEUsage**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

MsoControlOLEUsage

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

通过此属性，用户可以在某 Office 应用程序与另一个 Office 应用程序合并时，指定加载项应用程序的各个命令栏控件在该 Office 应用程序中的表示方式。如果客户端和服务器均提供命令栏，那么命令栏控件将逐个嵌入客户端。系统将从服务器中略去标记为只用于客户端（或既不用于客户端也不用于服务器）的自定义控件，而从客户端中略去标记为只用于服务器（或既不用于客户端也不用于服务器）的控件。剩下的控件再进行合并。

如果要合并的应用程序之一不是 Office 应用程序，则使用常规 OLE 菜单合并，该过程将由 **OLEMenuGroup** 属性控制。



## 示例


```JavaScript
/*本示例运行于各组件，向名为“Tools”的命令栏添加一个控件，并设置该控件的 OLEUsage 属性。*/
function test() {
    let cbControl = Application.CommandBars.Item("Tools").Controls.Add(msoControlButton, null, null, null, true)
    cbControl.OLEUsage = msoControlOLEUsageNeither
}
```


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件的 OLEUsage 属性值是否为 msoControlOLEUsageServer。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.OLEUsage == msoControlOLEUsageServer)
}
```
