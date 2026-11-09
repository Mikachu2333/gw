# CommandBarPopup.CommandBar

获取一个 **CommandBar** 对象，该对象代表由指定的弹出式控件显示的菜单。只读。



## 语法

express.**CommandBar**

express   一个代表 **CommandBarPopup** 对象的变量。

## 类型

CommandBar

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Drawing”的命令栏的第一个（弹出）控件展示的菜单中第四个控件的标题文字。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Drawing").Controls.Item(1).CommandBar
    alert(commandBar.Controls.Item(4).Caption)
}
```


```JavaScript
/*本示例运行于各组件，显示名为“Shapes”的命令栏的第七个（弹出）控件展示的菜单的本地化名称。*/
function test() {
    let commandBar = Application.CommandBars.Item("Shapes").Controls.Item(7).CommandBar
    alert(commandBar.NameLocal)
}
```
