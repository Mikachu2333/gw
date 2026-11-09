# CommandBarComboBox.Text

获取或设置 **CommandBarComboBox** 控件的显示或编辑区中的文字。可读写。



## 语法

express.**Text**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

string

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并为其添加一个包含四个列表项的组合框，然后使用 Text 属性将 Item 3 设置为默认列表项。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("Item 1", 1)
    cbComboBox.AddItem("Item 2", 2)
    cbComboBox.AddItem("Item 3", 3)
    cbComboBox.AddItem("Item 4", 4)
    cbComboBox.Text = "Item 3"
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Formatting”的命令栏的第一个（组合框）控件的显示文本。*/
function test() {
    let cbComboBox = ActiveWorkbook.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbComboBox.Text)
}
```
