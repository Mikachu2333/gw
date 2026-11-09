# CommandBarControl.Priority

获取或设置 **CommandBarControl** 的优先级。对于固定命令栏，当一行中无法容纳其中的所有控件时，控件的优先级将决定该控件是否会从命令栏中删除。无法容纳在一行中的控件将在命令栏上从右向左进行删减。可读写。



## 语法

express.**Priority**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

有效的优先级数为从 0（零）至 7 之间的数字，默认值为 3。优先级为 1 表示不能从工具栏中删除该控件。而优先级为其他值的控件将被忽略。

菜单项的命令栏控件不能使用 **Priority** 属性。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件的优先级。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.Priority)
}
```


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”命令栏并为其添加三个命令栏控件，然后将第三个控件的优先级设置为 1。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbControls = commandBar.Controls
    cbControls.Add(msoControlComboBox, 1)
    cbControls.Add(msoControlButton, 2)
    cbControls.Add(msoControlButton, 3)
    cbControls.Item(3).Priority = 1
}
```
