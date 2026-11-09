# CommandBarControl.Left

获取指定的 **CommandBarControl** 相对于屏幕左边缘的水平位置（以像素为单位）。返回距离停靠区域左侧的距离。只读。



## 语法

express.**Left**

express   一个代表 **CommandBarControl** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，显示名为“Formatting”的命令栏的第一个控件相对于屏幕左边缘的水平位置。*/
function test() {
    let cbControl = Application.CommandBars.Item("Formatting").Controls.Item(1)
    alert(cbControl.Left + " 像素")
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿上名为“Chart”的命令栏的第一个控件相对于屏幕左边缘的水平位置。*/
function test() {
    let cbControl = ActiveWorkbook.CommandBars.Item("Chart").Controls.Item(1)
    alert(cbControl.Left + " 像素")
}
```
