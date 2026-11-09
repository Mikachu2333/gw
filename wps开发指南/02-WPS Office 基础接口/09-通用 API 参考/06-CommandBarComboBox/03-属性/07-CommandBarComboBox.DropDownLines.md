# CommandBarComboBox.DropDownLines

获取或设置命令栏组合框控件中的行数。该组合框控件必须为自定义控件并且是下拉列表框或组合框。可读写。



## 语法

express.**DropDownLines**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

number（int 精度）

## 说明


如果将此属性设置为 0（零），则控件中的行数将取决于列表中的项数。

如果试图设置该属性的组合框控件是编辑框或内置组合框控件，则会出现错误。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，然后在该控件中添加两项。本示例还设置项的行数和组合框的宽度。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("First Item", 1)
    cbComboBox.AddItem("Second Item", 2)
    cbComboBox.DropDownLines = 3
    cbComboBox.DropDownWidth = 75
    cbComboBox.ListHeaderCount = 0
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Standard”的命令栏的第二十三个（组合框）控件中的行数。*/
function test() {
    let cbComboBox = ActiveWorkbook.CommandBars.Item("Standard").Controls.Item(23)
    alert(cbComboBox.DropDownLines)
}
```
