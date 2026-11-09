# CommandBarComboBox.Reset

将内置命令栏重置为其默认配置，或将内置 **CommandBarComboBox** 控件重置为其初始功能和图符。




## 语法

express.**Reset()**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 返回值

void

## 说明


重置一个内置控件将恢复该控件原来对应的动作，并将各属性恢复成初始状态。重置一个内置命令栏将删除其中的自定义控件并恢复其内置控件。

| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例自定义一个命令栏组合框。首先，将组合框重置为其默认状态。然后将两个行项添加到组合框，并设置各种属性。
function test()
{
    let combo = Application.CommandBars.Item("Custom").Controls.Item(2)
    combo.Reset()
    combo.AddItem("First Item", 1)
    combo.AddItem("Second Item", 2)
    combo.DropDownLines = 3
    combo.DropDownWidth = 75
    combo.ListIndex = 0

}
```
