# CommandBarControl.Width

获取或设置指定的 **CommandBarControl** 的宽度（以像素为单位）。可读写。



## 语法

express.**Width**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件的宽度。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.Width + " 像素")
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“WordArt”的命令栏的最后一个控件的宽度。*/
function test() {
    let cbControls = ActiveWorkbook.CommandBars.Item("WordArt").Controls
    alert(cbControls.Item(cbControls.Count).Width + " 像素")
}
```
