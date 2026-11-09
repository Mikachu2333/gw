# CommandBarControl.Move

将指定的 **CommandBarControl** 移动到已有的命令栏。



## 语法

express.**Move(Bar, Before)**

express   一个代表 **CommandBarControl** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Bar | 可选 | any | 一个代表控件的目标命令栏的 **CommandBar** 对象。如果忽略该参数，则控件将移动到当前所在命令栏的末端。 |
| Before | 可选 | any | 表示控件位置的数字。控件将插到该位置的控件之前。如果忽略该参数，控件插入到同一命令栏。 |

## 返回值

CommandBarControl

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”命令栏并为其添加三个命令栏控件，然后遍历所有命令栏控件，判断如果控件的类型为msoControlComboBox，则将该控件移到命令栏第三个控件之前的位置，最后设置该控件的 Tag 属性值和 Priority 属性值。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbControls = commandBar.Controls
    cbControls.Add(msoControlComboBox, 1)
    cbControls.Add(msoControlButton, 2)
    cbControls.Add(msoControlButton, 3)
    for (let i = 1; i <= cbControls.Count; i++) {
        if (cbControls.Item(i).Type == msoControlComboBox) {
            let cbControl = cbControls.Item(i)
            cbControl.Move(null, 3)
            cbControl.Tag = "Selection box"
            cbControl.Priority = 2
        }
    }
}
```


```JavaScript
/*本示例运行于表格组件，在活动工作簿上新建一个名为“example1”命令栏和名为“example2”命令栏，并分别为两个命令栏添加一个控件，然后将名为“example2”的命令栏的新建控件移动到名为“example1”的命令栏中。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Add("example1")
    commandBar.Visible = true
    commandBar.Controls.Add(msoControlButton, 2)
    let cbControl = ActiveWorkbook.CommandBars.Add("example2").Controls.Add(msoControlButton, 3)
    cbControl.Move(commandBar, 1)
}
```
