# CommandBarControl.Visible

获取或设置 **CommandBarControl** 的 **Visible** 属性。如果 **CommandBarControl** 可见，则此属性为 **True** 。可读写。



## 语法

express.**Visible**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件是否可见。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.Visible)
}
```


```JavaScript
/*本示例运行于各组件，新建一个命令栏并为其添加两个控件，然后将第一个控件设置为不可见。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    commandBar.Controls.Add(msoControlComboBox, 1)
    commandBar.Controls.Add(msoControlButton, 2)
    commandBar.Controls.Item(1).Visible = false
}
```
