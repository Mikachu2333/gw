# Presentation.CommandBars

返回一个 **CommandBars** 集合，该集合代表主机容器应用程序和 WPP 中合并的命令栏集。仅当容器是 DocObject 服务器并且 WPP 作为 OLE 服务器时，该属性返回有效对象。只读。



## 语法

express.**CommandBars**

express   一个代表 **Presentation** 对象的变量。

## 类型

CommandBars

## 示例


```JavaScript
/*本示例在活动演示文稿上新建一个命令栏并为其添加一个组合框控件，然后在该控件中添加一个列表项。*/
function test() {
    let commandBar = ActivePresentation.CommandBars.Add("example")
    commandBar.Visible = true
    let cbComboBox = commandBar.Controls.Add(msoControlComboBox, 1)
    cbComboBox.AddItem("test", 1)
}
```


```JavaScript
/*本示例显示活动演示文稿的艺术字命令栏的第一个控件的ID。*/
function test() {
    let commandBar = ActivePresentation.CommandBars.Item("WordArt")
    alert(commandBar.Controls.Item(1).Id)
}
```
