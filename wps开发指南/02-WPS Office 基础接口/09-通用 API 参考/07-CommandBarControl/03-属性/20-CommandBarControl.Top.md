# CommandBarControl.Top

获取指定的 **CommandBarControl** 顶边到屏幕顶边的距离（以像素为单位）。只读。



## 语法

express.**Top**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件顶边到屏幕顶边的距离。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.Top + " 像素")
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“WordArt”的命令栏的最后一个控件顶边到屏幕顶边的距离。*/
function test() {
    let cbControls = ActiveWorkbook.CommandBars.Item("WordArt").Controls
    alert(cbControls.Item(cbControls.Count).Top + " 像素")
}
```
