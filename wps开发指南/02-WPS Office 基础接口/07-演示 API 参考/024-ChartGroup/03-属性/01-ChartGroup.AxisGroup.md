# ChartGroup.AxisGroup

返回坐标轴组的类型。可读/写 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。



## 语法

express.**AxisGroup**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

XlAxisGroup

## 示例


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片上第一张图表的第一个图表组的坐标轴组是否为次坐标轴组。*/
function test() {
    let chartgroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    alert(chartgroup.AxisGroup == xlSecondary)
}
```


```JavaScript
/*此示例设置活动演示文稿的第一张幻灯片上第二张图表的第一个图表组的坐标轴组为主坐标轴组。*/
function test() {
    let chartgroup = ActivePresentation.Slides.Item(1).Shapes.Item(2).Chart.ChartGroups(1)
    chartgroup.AxisGroup = xlPrimary
}
```
