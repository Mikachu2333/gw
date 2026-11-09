# PlotArea.Position

返回或设置图表上绘制区域的位置。可读/写 **XlChartElementPosition** 类型。



## 语法

express.**Position**

express   一个代表 **PlotArea** 对象的变量。

## 类型

XlChartElementPosition

## 示例


```JavaScript
/*本示例显示 Chart1 中的绘图区位置是否为xlChartElementPositionAutomatic。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    alert(plotArea.Position == xlChartElementPositionAutomatic)
}
```


```JavaScript
/*下例将 Sheet1 上第一个图表的绘图区位置设置成xlChartElementPositionCustom。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    plotArea.Position = xlChartElementPositionCustom
}
```
