# CommandBarComboBox.ListIndex

获取或设置 **CommandBarComboBox** 控件的列表部分中选定项的索引号。如果没有选择列表中的任何项，此属性将返回 0。可读写。



## 语法

express.**ListIndex**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

number（int 精度）

## 说明


设置 **ListIndex** 属性会使指定控件选择给定的项并在应用程序中执行与相应的操作。

此属性只能用于列表控件。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，然后在该控件中添加两项，最后根据组合框控件中选择的项来确定要显示的消息。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox)
    cbComboBox.AddItem("chartcourse", 1)
    cbComboBox.AddItem("displaygraph", 2)
    switch (cbComboBox.ListIndex) {
        case 1:
            alert("chartcourse")
            break
        case 2:
            alert("displaygraph")
            break
        default:
            alert("Invalid choice. Please choose again.")
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Formatting”的命令栏的第一个（组合框）控件的列表部分中选定项的索引号。*/
function test() {
    let cbComboBox = ActiveWorkbook.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbComboBox.ListIndex)
}
```
