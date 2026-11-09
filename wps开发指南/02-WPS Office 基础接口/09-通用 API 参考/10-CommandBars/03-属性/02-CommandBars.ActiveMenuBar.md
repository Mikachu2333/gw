# CommandBars.ActiveMenuBar

获取一个 **CommandBar** 对象，该对象代表容器应用程序中的活动菜单栏。只读。



## 语法

express.**ActiveMenuBar**

express   一个代表 **CommandBars** 对象的变量。

## 类型

CommandBar

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，在活动菜单栏的末尾暂时添加一个弹出式控件“Custom”，然后向该弹出式控件中添加一个名为“Import”的控件。*/
function test() {
    let commandBar = Application.CommandBars.ActiveMenuBar
    let cbPopup = commandBar.Controls.Add(msoControlPopup, null, null, null, true)
    cbPopup.Caption = "Custom"
    let cbButton = cbPopup.CommandBar.Controls.Add(msoControlButton, 1)
    cbButton.Caption = "Import"
    cbButton.TooltipText = "Import"
    cbButton.Style = msoButtonCaption
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上活动菜单栏的本地化名称。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.ActiveMenuBar
    alert(commandBar.NameLocal)
}
```
