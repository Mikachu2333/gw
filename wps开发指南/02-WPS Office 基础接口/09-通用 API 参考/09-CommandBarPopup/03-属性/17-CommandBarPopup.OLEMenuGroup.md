# CommandBarPopup.OLEMenuGroup

获取或设置一个 **[MsoOLEMenuGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoOLEMenuGroup)** 常量，代表在将 OLE 服务器菜单组与 OLE 客户端菜单组合并时（即将一个容器应用程序类型的对象嵌入到另一个应用程序中时）指定的命令栏弹出式控件所属的菜单组。可读写。



## 语法

express.**OLEMenuGroup**

express   一个代表 **CommandBarPopup** 对象的变量。

## 类型

MsoOLEMenuGroup

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

通过此属性，加载项应用程序可以指定其命令栏控件在 Office 应用程序中的表示方式。如果容器或服务器中的任何一个不实现命令栏，则执行常规的 OLE 菜单合并：菜单栏以及服务器的所有工具栏将进行合并，但容器的工具栏不会被合并。本属性只与菜单栏上的弹出式控件有关，因为菜单是根据其菜单组的类别进行合并的。

如果要合并的两个应用程序均实现了命令栏，则命令栏控件根据 **OLEUsage** 属性进行合并。

该属性对内置控件是只读的。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”的命令栏并为其添加弹出控件，然后设置该控件的 OLEMenuGroup 属性。*/
function test() {
    let cbPopup = Application.CommandBars.Add("Custom").Controls.Add(msoControlPopup, null, null, null, false)
    cbPopup.OLEMenuGroup = msoOLEMenuGroupNone
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Drawing”的命令栏的第一个（弹出）控件的 OLEMenuGroup 属性值是否为 msoOLEMenuGroupNone。*/
function test() {
    let cbPopup = ActiveWorkbook.CommandBars.Item("Drawing").Controls.Item(1)
    alert(cbPopup.OLEMenuGroup == msoOLEMenuGroupNone)
}
```
