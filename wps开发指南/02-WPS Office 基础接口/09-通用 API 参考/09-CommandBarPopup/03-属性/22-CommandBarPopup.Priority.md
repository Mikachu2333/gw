# CommandBarPopup.Priority

获取或设置 **CommandBarPopup** 控件的优先级。可读写。




## 语法

express.**Priority**

express   一个代表 **CommandBarPopup** 对象的变量。

## 类型

number（int 精度）

## 说明


对于固定命令栏，当一行中无法容纳其中的所有控件时，控件的优先级将决定该控件是否会从命令栏中删除。无法容纳在一行中的控件将在命令栏上从右向左进行删减。

| 注释                                                                   |
| -------------------------------------------------------------------- |
| 在某些 WPS Office应用程序中，CommandBar 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。 |




## 示例


```JavaScript
//本示例设置命令栏弹出式控件的说明性文字和优先级。 
function test()
{
    let popControl = Application.CommandBars.FindControl(Application.Enum.msoControlPopup, null, "Graphics")
    popControl.DescriptionText = "Graphics Selection dialog"
    popControl.Priority = 5
}

```
