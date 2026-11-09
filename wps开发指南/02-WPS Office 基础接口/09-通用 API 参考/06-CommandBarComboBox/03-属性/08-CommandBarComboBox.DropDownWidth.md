# CommandBarComboBox.DropDownWidth

获取或设置指定命令栏组合框控件的列表宽度（以像素为单位）。可读写。



## 语法

express.**DropDownWidth**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

number（int 精度）

## 说明


如果将该属性设置为 -1，那么将根据组合框列表中最长的项来设置列表的宽度。如果将该属性设置为 0，那么将根据控件的宽度来设置列表的宽度。  

如果为内置的组合框控件设置该属性，则会出现错误。

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
/*本示例运行于表格组件，显示活动工作簿上名为“Chart”的命令栏的第一个（组合框）控件的列表宽度。*/
function test() {
    let cbComboBox = ActiveWorkbook.CommandBars.Item("Chart").Controls.Item(1)
    alert(cbComboBox.DropDownWidth)
}
```
