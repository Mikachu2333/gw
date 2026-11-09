# CommandBarButton.Height

获取或设置命令栏控件的高度。可读写。




## 语法

express.**Height**

express   一个代表 **CommandBarButton** 对象的变量。

## 类型

number（int 精度）

## 说明


| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例在名为 Custom 的命令栏上添加一个自定义控件。本示例设置该自定义控件的高度为命令栏高度的两倍，并设置该控件宽度为 50 像素。请注意命令栏如何根据控件的大小自我调整。
function test()
{
    let myBar = Application.CommandBars.Item("Custom")
    let barHeight = myBar.Height + 1
    let myControl = myBar.Controls.Add(Application.Enum.msoControlButton, CommandBars.Item("Standard").Controls.Item("Save").Id, null, null, true)
    myControl.Height = barHeight * 2
    myControl.Width = 50
    myBar.Visible = true
}
```
