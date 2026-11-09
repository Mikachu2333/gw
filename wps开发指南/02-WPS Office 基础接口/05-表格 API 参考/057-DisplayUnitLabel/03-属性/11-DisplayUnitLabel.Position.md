# DisplayUnitLabel.Position

返回或设置图表上单位标签的位置。可读/写 **[XlChartElementPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartElementPosition)** 类型。



## 语法

express.**Position**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

XlChartElementPosition

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中数值轴上的单位标签位置是否为自动设置。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Position == xlChartElementPositionAutomatic)
}
```


```JavaScript
/*下例为 Sheet1 上的第一个图表数值轴上的单位标签设置指定特定位置。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Position = xlChartElementPositionCustom
}
```
