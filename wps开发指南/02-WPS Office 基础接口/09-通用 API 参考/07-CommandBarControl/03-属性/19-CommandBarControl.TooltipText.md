# CommandBarControl.TooltipText

获取或设置 **CommandBarControl** 的 **“屏幕提示”** 中显示的文本。可读写。



## 语法

express.**TooltipText**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

string

## 说明


默认情况下， **Caption** 属性的值将用作 **“屏幕提示”** 。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，设置活动菜单栏上将最后一个控件的屏幕提示中显示的文本。*/
function test() {
    let commandBar = Application.CommandBars.ActiveMenuBar
    let cbControl = commandBar.Controls(commandBar.Controls.Count)
    cbControl.BeginGroup = true
    cbControl.TooltipText = "Click for help on UI feature"
}
```


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件的屏幕提示中展示的文本。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.TooltipText)
}
```
