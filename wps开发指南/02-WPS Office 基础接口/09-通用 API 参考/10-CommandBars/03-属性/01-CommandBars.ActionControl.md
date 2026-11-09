# CommandBars.ActionControl

获取一个 **CommandBarControl** 对象，该对象的 **OnAction** 属性设置为当前正在运行的过程。只读。



## 语法

express.**ActionControl**

express   一个代表 **CommandBars** 对象的变量。

## 类型

CommandBarControl

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，创建命令栏“Custom”并向命令栏中添加三个按钮，用 ActionControl 属性和 Tag 属性确定最后一次单击的是哪一个命令栏按钮。本示例中 whichButton 函数响应 OnAction 属性并确定最后单击的是哪一个命令栏按钮。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    let buttonOne = commandBar.Controls.Add(msoControlButton)
    buttonOne.FaceId = 133
    buttonOne.Tag = "RightArrow"
    buttonOne.OnAction = "whichButton"
    let buttonTwo = commandBar.Controls.Add(msoControlButton)
    buttonTwo.FaceId = 134
    buttonTwo.Tag = "UpArrow"
    buttonTwo.OnAction = "whichButton"
    let buttonThree = commandBar.Controls.Add(msoControlButton)
    buttonThree.FaceId = 135
    buttonThree.Tag = "DownArrow"
    buttonThree.OnAction = "whichButton"
    commandBar.Visible = true
}
function whichButton() {
    switch (Application.CommandBars.ActionControl.Tag) {
        case "RightArrow":
            alert("Right Arrow button clicked.")
            break
        case "UpArrow":
            alert("Up Arrow button clicked.")
            break
        case "DownArrow":
            alert("Down Arrow button clicked.")
            break
    }
}
```


```JavaScript
/*本示例运行于各组件，创建命令栏“example1”并向命令栏中添加一个按钮控件，然后设置控件的标题文本、说明和单击该控件将运行的 JavaScript 方法。本示例中 example2 方法响应 OnAction 属性并显示关联控件的说明。*/
function test() {
    let commandBar = Application.CommandBars.Add("example1")
    let cbControl = commandBar.Controls.Add(msoControlButton)
    cbControl.Caption = "test1"
    cbControl.DescriptionText = "test2"
    cbControl.OnAction = "example2"
    commandBar.Visible = true
}
function example2() {
    alert(Application.CommandBars.ActionControl.DescriptionText)
}
```
