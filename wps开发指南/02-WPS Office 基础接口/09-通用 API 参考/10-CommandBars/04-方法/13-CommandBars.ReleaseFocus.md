# CommandBars.ReleaseFocus

释放所有命令栏的用户界面焦点。



## 语法

express.**ReleaseFocus()**

express   一个代表 **CommandBars** 对象的变量。

## 返回值

void

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，向命令栏“Custom”中添加三个空白按钮，并将焦点设置在中间的按钮上。等待五秒钟后，释放所有命令栏的用户界面焦点。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom", msoBarTop, null, true)
    commandBar.Controls.Add(msoControlButton)
    commandBar.Controls.Add(msoControlButton)
    commandBar.Controls.Add(msoControlButton)
    commandBar.Visible = true
    let cbControl = commandBar.Controls.Item(2)
    cbControl.SetFocus()
    let startTime = new Date().getTime()
    while ((new Date().getTime() - startTime) < 5000) {
        DoEvents() // Yield to other processes.
    }
    Application.CommandBars.ReleaseFocus()
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿的名称为“example.xlsx”，则释放所有命令栏的用户界面焦点。*/
function test() {
    if (ActiveWorkbook.Name == "example.xlsx") {
        ActiveWorkbook.CommandBars.ReleaseFocus()
    }
}
```
