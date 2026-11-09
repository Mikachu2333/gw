# CommandBarComboBox.ListHeaderCount

获取或设置出现在分隔行之上的 **CommandBarComboBox** 控件中的列表项数目。可读写。



## 语法

express.**ListHeaderCount**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

number（int 精度）

## 说明


 **ListHeaderCount** 属性值为 -1 表示组合框控件中没有分隔行。

对于内置的组合框控件，该属性为只读。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，然后在该控件中添加两项。本示例使用 ListHeaderCount 属性在组合框的第一项和第二项间显示一分隔行，还设置项的行数和组合框的宽度。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox)
    cbComboBox.AddItem("First Item", 1)
    cbComboBox.AddItem("Second Item", 2)
    cbComboBox.DropDownLines = 3
    cbComboBox.DropDownWidth = 75
    cbComboBox.ListHeaderCount = 1
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿上名为“Formatting”的命令栏的第一个（组合框）控件中没有分隔行，则通知用户。*/
function test() {
    let cbComboBox = ActiveWorkbook.CommandBars.Item("Formatting").Controls.Item(1)
    if (cbComboBox.ListHeaderCount == -1) {
        alert("组合框控件中没有分隔行")
    }
}
```
