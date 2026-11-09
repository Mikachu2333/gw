# CommandBarComboBox.HelpContextId

获取或设置附加于 **CommandBarComboBox** 控件的“帮助”主题的帮助上下文 ID 号。可读写。




## 语法

express.**HelpContextId**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

number（int 精度）

## 说明


若要使用此属性，必须同时设置 HelpFile 属性。帮助主题响应 Shift+F1 按键操作。

| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//下面的示例添加了一个自定义命令栏以及跟踪股票的组合框。该示例也指定了在用户按下 Shift+F1 时所显示的组合框“帮助”主题。 
function test()
{
    let myBar = Application.CommandBars.Add("Custom", Application.Enum.msoBarTop, null, true)
    myBar.Controls.Add(Application.Enum.msoControlComboBox, 1)
    myBar.Visible = true 
                      
    let cont = CommandBars.Item("Custom").Controls.Item(1)
    cont.AddItem("Get Stock Quote", 1)
    cont.AddItem("View Chart", 2)
    cont.AddItem("View Fundamentals", 3)
    cont.AddItem("View News", 4)
    cont.Caption = "Stock Data"
    cont.DescriptionText = "View Data For Stock"
    cont.HelpFile = "C:\\corphelp\\custom.hlp"
    cont.HelpContextID = 47
}
```
