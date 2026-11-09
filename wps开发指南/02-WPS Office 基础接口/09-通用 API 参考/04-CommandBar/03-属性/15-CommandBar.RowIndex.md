# CommandBar.RowIndex

获取或设置一个命令栏相对于同一停靠区域中其他命令栏的停靠顺序。该属性值可以是大于零的整数，也可以是以下 **[MsoBarRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/MsoBarRow)** 常量之一： **msoBarRowFirst** 或 **msoBarRowLast** 。可读写。



## 语法

express.**RowIndex**

express   一个代表 **CommandBar** 对象的变量。

## 类型

number（int 精度）

## 说明


多个命令栏可享有同一行索引号，具有较低数值的命令栏先固定。如果存在两个或两个以上命令栏具有同一行索引号的情况，那么最后指定的命令栏在这一组中最先显示。

在某些 WPS Office 应用程序中，CommandBars 已被新的功能区用户界面取代。有关详细信息，请在帮助中搜索关键字“功能区”。



## 示例


```JavaScript
/*本示例运行于各组件，将名为“WordArt”的命令栏的位置调整到距离屏幕左边 140 像素的位置，并通过将其行索引号改为 msoBarRowFirst 使该命令栏最先固定。*/
function test() {
    let commandBar = Application.CommandBars.Item("WordArt")
    commandBar.Left = 140
    commandBar.RowIndex = msoBarRowFirst
}
```


```JavaScript
/*本示例运行于表格组件，显示活动工作簿中图表命令栏相对于同一停靠区域中其他命令栏的停靠顺序。*/
function test() {
    let commandBar = ActiveWorkbook.CommandBars.Item("Chart")
    alert(commandBar.RowIndex)
}
```
