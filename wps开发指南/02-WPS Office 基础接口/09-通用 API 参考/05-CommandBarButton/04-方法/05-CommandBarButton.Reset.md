# CommandBarButton.Reset

将内置 **CommandBarButton** 控件重置为其初始功能和图符。




## 语法

express.**Reset()**

express   一个代表 **CommandBarButton** 对象的变量。

## 返回值

void

## 说明


重置一个内置控件将恢复该控件原来对应的动作，并将各属性恢复成初始状态。

| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例自定义一个命令栏按钮。首先，将按钮属性重置为其默认状态。然后设置各种按钮属性。
function test()
{
    let cbButton = Application.CommandBars.Item("Custom").Controls.Item(2)
    cbButton.Reset()
    cbButton.BuiltInFace = true 
    cbButton.Caption = "Compute Total"
    cbButton.DescriptionText = "This button computes the total of all purchases."
    cbButton.Enabled = true 
    cbButton.TooltipText = "Click to compute total amount for all items in your cart."
}
```
