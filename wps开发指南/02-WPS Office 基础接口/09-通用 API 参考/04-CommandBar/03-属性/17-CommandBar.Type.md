# CommandBar.Type

获取命令栏的类型。只读。



## 语法

express.**Type**

express   一个代表 **CommandBar** 对象的变量。

## 类型

MsoBarType

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，判断如果名为“WordArt”的命令栏的类型为msoBarTypeNormal且该命令栏的第一个控件的类型为msoControlButton，则显示该控件的标题文字。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    let barControl = commandBar.Controls.Item(1)
    if (commandBar.Type == msoBarTypeNormal && barControl.Type == msoControlButton) {
        alert(barControl.Caption)
    }
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中艺术字命令栏的类型。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("WordArt")
    switch (commandBar.Type) {
        case msoBarTypeMenuBar:
            alert("菜单栏")
            break
        case msoBarTypeNormal:
            alert("默认命令栏")
            break
        case msoBarTypePopup:
            alert("快捷菜单")
            break
    }
}
```
