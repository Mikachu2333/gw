# CommandBarControls.Add

新建一个 **CommandBarControl** 对象并将其添加到指定命令栏上的控件集合中。



## 语法

express.**Add(Type, Id, Parameter, Before, Temporary)**

express   一个代表 **CommandBarControls** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Type | 可选 | any | 要添加到指定命令栏中的控件类型。可以为以下 **MsoControl** 常量之一： **msoControlButton** 、 **msoControlEdit** 、 **msoControlDropdown** 、 **msoControlComboBox** 或 **msoControlPopup** 。 |
| Id | 可选 | any | 指定内置控件的整数。如果该参数为 1，或者忽略该参数，将在命令栏中添加一个空的指定类型的自定义控件。 |
| Parameter | 可选 | any | 对于内置控件，容器应用程序使用该参数运行命令。对于自定义控件，可以使用该参数向 Javascript 方法传递信息，也可以用它存储有关控件的信息（类似于第二个 **Tag** 属性值）。 |
| Before | 可选 | any | 一个指示新控件在命令栏上位置的数值。新控件将插入到位于此位置的控件之前。如果忽略该参数，控件将添加到指定命令栏的末端。 |
| Temporary | 可选 | any | 设置为 **True** 将使新控件为临时控件。临时控件在关闭容器应用程序时自动删除。默认值为 **False** 。 |

## 返回值

CommandBarControl

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”的命令栏，并为该命令栏添加剪切、复制和粘贴按钮（控件）。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    let cbButton1 = commandBar.Controls.Add(msoControlButton, CommandBars.Item("Edit").Controls.Item("剪切(&T)").Id)
    let cbButton2 = commandBar.Controls.Add(msoControlButton, CommandBars.Item("Edit").Controls.Item("复制(&C)").Id)
    let cbButton3 = commandBar.Controls.Add(msoControlButton, CommandBars.Item("Edit").Controls.Item("粘贴(&P)").Id)
    commandBar.Visible = true
}
```


```JavaScript
/*本示例运行于各组件，新建一个命令栏并为其添加一个带拼写检查按钮图标的命令栏控件，然后将其标题设置为“test”。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandBar.Visible = true
    let cbControl = commandBar.Controls.Add(msoControlButton, 2, "example", 1, false)
    cbControl.Caption = "test"
}
```
