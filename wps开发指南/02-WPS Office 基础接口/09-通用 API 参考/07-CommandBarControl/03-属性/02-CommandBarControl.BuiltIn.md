# CommandBarControl.BuiltIn

如果指定的命令栏控件是容器应用程序的内置控件，则获取 **True** 。如果是自定义控件或是已设置了 **OnAction** 属性的内置控件，则返回 **False** 。只读。



## 语法

express.**BuiltIn**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

boolean

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的最后一个控件是否为内置控件。*/
function test() {
    let commandBar = Application.CommandBars.Item("Formatting")
    let cbControl = commandBar.Controls(commandBar.Controls.Count)
    alert(cbControl.BuiltIn)
}
```


```JavaScript
/*本示例运行于表格组件，判断如果活动工作簿上名为“WordArt”的命令栏的第一个控件为内置控件，则通知用户。*/
function test() {
    let cbControl = ActiveWorkbook.CommandBars.Item("WordArt").Controls.Item(1)
    if (cbControl.BuiltIn) {
        alert("该控件为内置控件")
    }
}
```
