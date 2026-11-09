# CommandBarComboBox.ListCount

获取 **CommandBarComboBox** 控件中列表项的数目。只读。



## 语法

express.**ListCount**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，然后在该控件中添加四个列表项，最后判断如果列表项的数量大于4，则显示一条消息，告知用户组合框可能已损坏，并要求用户重新安装应用程序。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    commandBar.Visible = true
    cbComboBox.AddItem("Get Stock Quote", 1)
    cbComboBox.AddItem("View Chart", 2)
    cbComboBox.AddItem("View Fundamentals", 3)
    cbComboBox.AddItem("View News", 4)
    cbComboBox.Caption = "Stock Data"
    cbComboBox.DescriptionText = "View Data For Stock"
    if (cbComboBox.ListCount > 4) {
        alert("ComboBox appears to be damaged. Please reinstall.")
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Formatting”的命令栏的第一个（组合框）控件中列表项的数量。*/
function test() {
    let cbComboBox = ActiveWorkbook.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbComboBox.ListCount)
}
```
