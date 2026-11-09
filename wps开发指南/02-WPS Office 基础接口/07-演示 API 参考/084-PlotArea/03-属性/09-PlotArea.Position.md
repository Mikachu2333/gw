# PlotArea.Position

返回或设置图表上绘制区域的位置。可读/写 **[XlChartElementPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartElementPosition)** 。



## 语法

express.**Position**

express   一个代表 **PlotArea** 对象的变量。

## 类型

XlChartElementPosition

## 示例


```JavaScript
/*本示例显示活动演示文稿的第一张幻灯片上第一个图表的绘图区的位置是否为xlChartElementPositionAutomatic。*/
function test() {
    let plotArea = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    alert(plotArea.Position == xlChartElementPositionAutomatic)
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片上第一个图表的绘图区的位置设置为xlChartElementPositionCustom。*/
function test() {
    let plotArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.PlotArea
    plotArea.Position = xlChartElementPositionCustom
}
```
