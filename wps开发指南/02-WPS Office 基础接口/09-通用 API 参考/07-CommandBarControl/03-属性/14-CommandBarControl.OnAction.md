# CommandBarControl.OnAction

获取或设置一个 JavaScript 方法的名称，该方法在用户单击或更改 **CommandBarControl** 的值时运行。可读写。



## 语法

express.**OnAction**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

string

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。

容器应用程序将确定该值是否是一个合法的宏名。



## 示例


```JavaScript
/*本示例运行于文字组件，在活动文档中新建一个名为“Custom”的命令栏并为其添加一个控件，然后设置每次单击该控件时，都将运行名为“example”的 JavaScript 方法。*/
function test() {
    let commandBar = ActiveDocument.CommandBars.Add("Custom")
    let cbControl = commandBar.Controls.Add(msoControlButton)
    cbControl.FaceId = 2
    cbControl.OnAction = "example"
    commandBar.Visible = true
}
```


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”的命令栏并为其添加一个控件，然后设置每次单击该控件时，将运行名为“TestCOMAddin.example”的 COM 加载项。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    let cbControl = commandBar.Controls.Add(msoControlButton)
    cbControl.FaceId = 2
    cbControl.OnAction = "!<TestCOMAddin.example>"
    commandBar.Visible = true
}
```
