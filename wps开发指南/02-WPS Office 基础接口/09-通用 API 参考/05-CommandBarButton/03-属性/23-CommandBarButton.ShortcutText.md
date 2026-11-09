# CommandBarButton.ShortcutText

获取或设置当控钮出现在菜单、子菜单或快捷菜单上时 **CommandBarButton** 控件旁边显示的快捷键文字。可读写。



## 语法

express.**ShortcutText**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

string

## 说明


只能为包含 **OnAction** 宏的命令栏按钮设置此属性。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“File”的命令栏的第一个（按钮）控件旁边显示的快捷键文字。*/
function test() {
    alert(Application.CommandBars.Item("File").Controls.Item(1).ShortcutText)
}
```


```JavaScript
/*本示例运行于各组件，新建名为“test1”的命令栏并为其添加新的控件，并设置在选择该控件后，将运行名为“test4”的JS宏。*/
function test() {
    let commandBar = Application.CommandBars.Add("test1")
    commandBar.Visible = true
    let cbButton = commandBar.Controls.Add(msoControlButton)
    cbButton.Caption = "test2"
    cbButton.ShortcutText = "test3"
    cbButton.OnAction = "test4"
}
```
