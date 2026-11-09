# CommandBarControl.Tag

获取或设置有关 **CommandBarControl** 的信息，例如，可作为过程参数的数据或用于识别该控件的信息。可读写。



## 语法

express.**Tag**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

string

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于表格组件，在活动工作簿上新建一个命令栏并为其添加五个控件，然后设置五个控件的标题文字、显示方式和信息。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Add("example")
    commandBar.Visible = true
    for (let i = 1; i <= 5; i++) {
        let cbControl = commandBar.Controls.Add(msoControlButton)
        cbControl.Caption = "Btn" + i
        cbControl.Style = msoButtonCaption
        cbControl.Tag = "Hello" + i
    }
}
```


```JavaScript
/*本示例运行于各组件，新建一个名为“Custom”的命令栏并为其添加控件，然后设置该控件的信息并显示该信息。*/
function test() {
    let cbControl = Application.CommandBars.Add("Custom").Controls.Add(msoControlButton)
    cbControl.Tag = "Spelling Button"
    alert(cbControl.Tag)
}
```
