# CommandBar.Controls

获取一个代表命令栏上的所有控件的 **CommandBarControls** 对象。只读。



## 语法

express.**Controls**

express   一个代表 **CommandBar** 对象的变量。

## 类型

CommandBarControls

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建命令栏“Custom”并在该命令栏中添加一个组合框控件，然后在该列表中添充两项。此外，本示例还设置项的行数，组合框的宽度，并将该组合框的默认值设置为空。*/
function test() {
    let comboBox = Application.CommandBars.Add("Custom").Controls.Add(msoControlComboBox, null, null, 1)
    comboBox.AddItem("First Item", 1)
    comboBox.AddItem("Second Item", 2)
    comboBox.DropDownLines = 3
    comboBox.DropDownWidth = 75
    comboBox.ListHeaderCount = 0
}
```


```JavaScript
/*本示例运行于文字组件，显示活动文档的艺术字命令栏的第一个控件的ID。*/
function test() {
    let commandBar = ActiveDocument.CommandBars.Item("WordArt")
    alert(commandBar.Controls.Item(1).Id)
}
```
