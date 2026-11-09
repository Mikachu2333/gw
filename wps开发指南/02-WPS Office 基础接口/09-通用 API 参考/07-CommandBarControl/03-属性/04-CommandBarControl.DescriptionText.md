# CommandBarControl.DescriptionText

获取或设置命令栏控件的说明。可读写。



## 语法

express.**DescriptionText**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

string

## 说明


该说明不显示给用户，但有助于其他开发者将控件行为归档。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并为其添加一个带控件行为说明的控件。*/
function test() {
    let commandbar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandbar.Visible = true
    let cbControl = commandbar.Controls.Add(msoControlButton, CommandBars.Item("Standard").Controls.Item("保存(&S)").Id)
    cbControl.DescriptionText = "Save the contents of the application"
    cbControl.Caption = "Save"
}
```


```JavaScript
/*本示例运行于各组件，新建一个命令栏并为其添加一个控件，然后设置该控件的说明。*/
function test() {
    let cbControl = Application.CommandBars.Add("example").Controls.Add(msoControlButton)
    cbControl.DescriptionText = "test"
}
```
