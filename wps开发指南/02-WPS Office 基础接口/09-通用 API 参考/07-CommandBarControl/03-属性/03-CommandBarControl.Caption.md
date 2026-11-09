# CommandBarControl.Caption

获取或设置命令栏控件的标题文字。可读写。



## 语法

express.**Caption**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

string

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

控件的标题也显示为其默认屏幕提示。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并为其添加一个带拼写检查按钮图标的命令栏控件，然后将其标题设置为“Spelling checker”。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandBar.Visible = true
    let cbControl = commandBar.Controls.Add(msoControlButton, 2)
    cbControl.DescriptionText = "Starts the spelling checker"
    cbControl.Caption = "Spelling checker"
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“WordArt”的命令栏的第一个控件的标题文字。*/
function test() {
    let cbControl = ActiveWorkbook.CommandBars.Item("WordArt").Controls.Item(1)
    alert(cbControl.Caption)
}
```
