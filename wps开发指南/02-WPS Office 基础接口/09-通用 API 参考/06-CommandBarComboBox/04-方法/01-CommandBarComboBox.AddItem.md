# CommandBarComboBox.AddItem

向指定命令栏组合框控件添加列表项。该组合框控件必须是自定义控件，并且必须是下拉列表框或组合框。



## 语法

express.**AddItem(Text, Index)**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Text | 必选 | string | 要添加到控件的文字。 |
| Index | 可选 | any | 项在列表中的位置。如果省略该参数，项会被添加到列表的尾部。 |

## 返回值

void

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

此方法不能用于编辑框或内置的组合框控件。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并为其添加一个组合框控件，然后在该控件中添加两项。本示例还设置项的行数和组合框的宽度。*/
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
/*本示例运行于表格组件，在活动工作簿上新建一个命令栏并为其添加一个组合框控件，然后在该控件中添加一个列表项。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Add("example")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("test", 1)
}
```
