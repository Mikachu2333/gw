# CommandBarControl.SetFocus

将键盘的焦点移到指定 **CommandBarControl** 。如果该控件被禁用或不可见，那么此方法将失败。



## 语法

express.**SetFocus()**

express   一个代表 **CommandBarControl** 对象的变量。

## 返回值

void

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

带有焦点的控件与其他控件的差别是十分细微的。在使用此方法后，会看到该控件处于三维突出显示的状态。按方向键将使焦点在工具栏中各控件间切换，就好像是按键盘控制键到达该控件一样。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并为其添加一个组合框控件和按钮控件，然后在组合框控件中添加两项，最后使用 SetFocus 方法将焦点设置为组合框控件。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    commandBar.Position = msoBarTop
    let cbControl1 = commandBar.Controls.Add(msoControlComboBox, 1)
    cbControl1.AddItem("First Item", 1)
    cbControl1.AddItem("Second Item", 2)
    let cbControl2 = commandBar.Controls.Add(msoControlButton)
    cbControl2.FaceId = 17
    // Set the focus to the combo box.
    cbControl2.SetFocus()
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿上名为“WordArt”的命令栏的第一个控件已启用，则将该控件设置为可见且将键盘的焦点移到该控件。*/
function test() {
    let cbControl = ActiveWorkbook.CommandBars.Item("WordArt").Controls.Item(1)
    if (cbControl.Enabled) {
        cbControl.Visible = true
        cbControl.SetFocus()
    }
}
```
