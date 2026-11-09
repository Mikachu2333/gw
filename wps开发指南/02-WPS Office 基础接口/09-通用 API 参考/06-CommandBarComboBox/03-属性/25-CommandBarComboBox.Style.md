# CommandBarComboBox.Style

获取或设置 **CommandBarComboBox** 控件的显示方式。该属性值可设置为以下 **[MsoComboStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoComboStyle)** 常量之一： **msoComboLabel** 或 **msoComboNormal** 。可读写。



## 语法

express.**Style**

express   一个代表 **CommandBarComboBox** 对象的变量。

## 类型

MsoComboStyle

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Formatting”的命令栏的第一个（组合框）控件的显示方式是否为msoComboNormal。*/
function test() {
    let cbComboBox = ActiveWorkbook.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbComboBox.Style == msoComboNormal)
}
```


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，然后在该控件中添加两项，最后设置该控件的显示方式。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("First Item", 1)
    cbComboBox.AddItem("Second Item", 2)
    cbComboBox.Caption = "example"
    cbComboBox.Style = msoComboLabel
}
```
