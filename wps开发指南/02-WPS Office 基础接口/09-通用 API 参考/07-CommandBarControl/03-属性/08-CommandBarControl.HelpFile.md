# CommandBarControl.HelpFile

获取或设置附加于 **CommandBarControl** 的“帮助”主题的文件名。可读写。



## 语法

express.**HelpFile**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

string

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

若要使用该属性，必须同时设置 **[HelpContextId](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CommandBarControl/member/HelpContextId)** 属性。帮助主题响应 Shift+F1 用户按键操作。



## 示例


```JavaScript
/*本示例运行于各组件，新建一个命令栏并向其添加一个组合框控件，在该控件中添加四个列表项，然后指定了当用户按下 Shift+F1 时为组合框显示的帮助主题。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom1", msoBarTop, null, true)
    commandBar.Visible = true
    let cbControl = commandBar.Controls.Add(msoControlComboBox, 1)
    cbControl.AddItem("Get Stock Quote", 1)
    cbControl.AddItem("View Chart", 2)
    cbControl.AddItem("View Fundamentals", 3)
    cbControl.AddItem("View News", 4)
    cbControl.Caption = "Stock Data"
    cbControl.DescriptionText = "View Data For Stock"
    cbControl.HelpFile = "D:\\TestFile\\example.HLP"
    cbControl.HelpContextId = 47
}
```


```JavaScript
/*本示例运行于各组件，设置附加到新建命令栏的新建控件的“帮助”主题的帮助上下文 ID 号和文件名。*/
function test() {
    let cbControl = Application.CommandBars.Add("example").Controls.Add(msoControlButton)
    cbControl.HelpFile = "D:\\TestFile\\example.HLP"
    cbControl.HelpContextId = 5
}
```
