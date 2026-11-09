# CommandBarComboBox.Execute

运行分配给指定 **CommandBarComboBox** 控件的过程或内置命令。




## 语法

express.**Execute()**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 返回值

void

## 说明


| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本 ET 示例创建一个命令栏，然后向其中添加内置命令栏按钮控件。该按钮将执行 ET AutoSum 函数。本示例使用 Execute 方法在显示该命令栏时计算选定单元格区域的总计。
function test()
{
    let cbrCustBar = Application.CommandBars.Add("Custom")
    let ctlAutoSum = cbrCustBar.Controls.Add(Application.Enum.msoControlButton, CommandBars.Item("Standard").Controls.Item("AutoSum").Id)
    cbrCustBar.Visible = true 
    ctlAutoSum.Execute()
}
```
