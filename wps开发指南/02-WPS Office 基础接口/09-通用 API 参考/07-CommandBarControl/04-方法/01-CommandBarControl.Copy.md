# CommandBarControl.Copy

将一个命令栏控件复制到已有的命令栏中。



## 语法

express.**Copy(Bar, Before)**

express   一个代表 **CommandBarControl** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Bar | 可选 | any | 一个代表目标命令栏的 **[CommandBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBar/obj)** 对象。如果省略此参数，控件将被复制到它原来所在的命令栏中。 |
| Before | 可选 | any | 一个指示新控件在命令栏上的位置的数值。新控件将插入到位于此位置的控件之前。如果省略此参数，控件将被复制到命令栏的末尾。 |

## 返回值

CommandBarControl

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”命令栏并为其添加一个命令栏控件，然后将名为“WordArt”的命令栏的第一个控件复制到名为“Custom”的命令栏上，并显示名为“WordArt”的命令栏的第一个控件的标题文字。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandBar.Visible = true
    commandBar.Controls.Add(msoControlButton, 2)
    let cbControl1 = Application.CommandBars.Item("WordArt").Controls.Item(1)
    let cbControl2 = cbControl1.Copy(commandBar, 1)
    alert(cbControl2.Caption)
}
```


```JavaScript
/*本示例运行于表格组件，在活动工作簿上新建一个名为“example1”命令栏和名为“example2”命令栏，并分别为两个命令栏添加一个控件，最后将名为“example2”的命令栏的新建控件复制到名为“example1”的命令栏中。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Add("example1")
    commandBar.Visible = true
    commandBar.Controls.Add(msoControlButton, 2)
    let cbControl = ActiveWorkbook.CommandBars.Add("example2").Controls.Add(msoControlButton, 3)
    cbControl.Copy(commandBar)
}
```
