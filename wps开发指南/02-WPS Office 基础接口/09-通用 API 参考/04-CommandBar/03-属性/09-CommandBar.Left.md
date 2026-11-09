# CommandBar.Left

设置或获取从对象左边缘算起 **CommandBar** 相对于屏幕的水平距离（以像素为单位）。可读写。



## 语法

express.**Left**

express   一个代表 **CommandBar** 对象的变量。

## 类型

number（int 精度）

## 说明


在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，将名为 WordArt 的命令栏从其固定位置沿窗口顶部移动窗口的左边。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    commandBar.Position = msoBarTop
    commandBar.RowIndex = 2
    commandBar.Left = 0
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中图表命令栏的左边缘相对于屏幕的水平距离。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(commandBar.Left + " 像素")
}
```
