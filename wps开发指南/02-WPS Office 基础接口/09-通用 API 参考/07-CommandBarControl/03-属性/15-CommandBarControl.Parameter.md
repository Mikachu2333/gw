# CommandBarControl.Parameter

获取或设置一个应用程序可用于执行 **CommandBarControl** 中命令的字符串。可读写。



## 语法

express.**Parameter**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

string

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

如果为内置控件设置指定的参数，那么应用程序将修改其默认的操作，前提是该应用程序能分析和使用这个新值。如果为自定义控件设置参数，那么该参数可用来为 Javascript 方法传送信息，或保存关于该控件的信息（类似于另一个 **Tag** 属性值）。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”的命令栏并为其添加一个控件，然后为该控件分配一个新参数，并将焦点设置到该控件上。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    let cbControl = commandBar.Controls.Add(msoControlButton)
    cbControl.Copy(null, 1)
    cbControl.Parameter = "2"
    cbControl.SetFocus()
    commandBar.Visible = true
}
```


```JavaScript
/*本示例运行于表格组件，在活动工作簿上新建一个名为“example”命令栏并为其添加一个控件，然后设置可用于执行该控件中命令的字符串。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Add("example")
    commandBar.Visible = true
    let cbControl = commandBar.Controls.Add(msoControlButton, 2)
    cbControl.Parameter = "test"
}
```
