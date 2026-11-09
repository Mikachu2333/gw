# CommandBarPopup.Controls

获取一个代表弹出式控件上的所有控件的 **CommandBarControls** 对象。只读。



## 语法

express.**Controls**

express   一个代表 **CommandBarPopup** 对象的变量。

## 类型

CommandBarControls

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Drawing”的命令栏的第一个（弹出）控件上所有控件的标题文本。*/
function test() {
    let cbControls = ActiveWorkbook.CommandBars.Item("Drawing").Controls.Item(1).Controls
    let str = ""
    for (let i = 1; i <= cbControls.Count; i++) {
        str += cbControls.Item(1).Caption + "\n"
    }
    alert(str)
}
```


```JavaScript
/*本示例运行于各组件，显示名为“Shapes”的命令栏的第七个（弹出）控件上第一个控件是否为内置控件。*/
function test() {
    let cbControls = Application.CommandBars.Item("Shapes").Controls.Item(7).Controls
    alert(cbControls.Item(1).BuiltIn)
}
```
