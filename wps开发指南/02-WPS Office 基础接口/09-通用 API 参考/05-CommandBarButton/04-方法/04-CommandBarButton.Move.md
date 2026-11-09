# CommandBarButton.Move

将指定的 **CommandBarButton** 控件移动到已有的命令栏。




## 语法

express.**Move(Bar, Before)**

express   一个代表 **CommandBarButton** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Bar | 可选 | any | 一个代表控件的目标命令栏的 Command 对象。如果忽略该参数，则控件将移动到当前所在命令栏的末端。 |
| Before | 可选 | any | 表示控件位置的数字。控件将插到该位置的控件之前。如果忽略该参数，控件插入到同一命令栏。 |

## 返回值

CommandBarControl

## 示例


```JavaScript
/*
本示例将名为 Custom 的命令栏上的第一个组合框控件移动到该命令栏上的第七个控件之前。本示例将 Tag 设置为“Selection box”并赋予控件较低的优先级，以便在一行容纳不下所有控件时将其隐藏。
*/
function test()
{
	let allControls = Application.ActiveDocument.CommandBars.Item("Custom").Controls
	for(let i=1; i<=allControls.Count; i++) {
    if(allControls.Item(i).Type == Application.Enum.msoControlComboBox) {
        allControls.Item(i).Move(null,7)
        allControls.Item(i).Tag = "Selection box"
        allControls.Item(i).Priority = 5
    }
}
}
```
