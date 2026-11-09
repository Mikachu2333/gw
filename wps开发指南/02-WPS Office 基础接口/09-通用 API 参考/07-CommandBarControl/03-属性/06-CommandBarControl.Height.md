# CommandBarControl.Height

获取或设置 **CommandBarControl** 控件的高度。可读写。



## 语法

express.**Height**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，添加名为 Custom 的命令栏并设置该命令栏的高度，然后在该命令栏上添加一个自定义控件。本示例设置该自定义控件的高度为命令栏高度的两倍，并设置该控件宽度为 50 像素。请注意命令栏如何根据控件的大小自我调整。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Height = 20
    let height = commandBar.Height
    let barControl = commandBar.Controls.Add(msoControlButton, CommandBars.Item("Standard").Controls.Item("保存(&S)").Id, null, null, true)
    barControl.Height = height * 2
    barControl.Width = 50
    commandBar.Visible = true
}
```


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件的高度。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.Height)
}
```
