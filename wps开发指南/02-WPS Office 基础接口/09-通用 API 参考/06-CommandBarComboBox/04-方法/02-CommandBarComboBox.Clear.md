# CommandBarComboBox.Clear

从命令栏组合框控件（下拉列表框或组合框）中删除所有列表项。



## 语法

express.**Clear()**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 返回值

void

## 说明


如果将此方法应用于内置命令栏控件（WPS Office 附带的控件），此方法将失败。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，添加名为“Custom Bar”的命令栏并向其添加组合框控件，然后为该组合框控件添加列表项，判断如果列表项的数量小于3，则清除列表，最后在其中添加新的第一项，将该新项目显示为组合框控件的默认值。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom Bar")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox)
    cbComboBox.AddItem("First Item", 1)
    cbComboBox.AddItem("Second Item", 2)
    if (cbComboBox.ListCount < 3) {
        cbComboBox.Clear()
        cbComboBox.AddItem("New Item", 1)
    }
}
```


```JavaScript
/*本示例运行于表格组件，在活动工作簿中新建一个命令栏并为其添加一个组合框控件，然后在该控件中添加一个列表项，最后删除所有列表项。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Add("example")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("test", 1)
    cbComboBox.Clear()
}
```
