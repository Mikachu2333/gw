# CommandBar.Top

设置或获取指定的命令栏顶边到屏幕顶边的距离。对于固定命令栏，此属性返回或设置从命令栏到停靠区域顶部的距离。可读写。



## 语法

express.**Top**

express   一个代表 **CommandBar** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，新建名为“Custom”的浮动命令栏，并将该命令栏的左上角定位为距离屏幕左边 140 像素、距离屏幕顶部 100 像素。*/
function test() {
    let commandBar = Application.CommandBars.Add("Custom")
    commandBar.Position = msoBarFloating
    commandBar.Left = 140
    commandBar.Top = 100
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中图表命令栏到停靠区域顶部的距离。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(commandBar.Top + " 像素")
}
```
