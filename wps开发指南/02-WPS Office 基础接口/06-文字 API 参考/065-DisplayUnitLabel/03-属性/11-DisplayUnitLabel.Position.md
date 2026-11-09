# DisplayUnitLabel.Position

返回或设置单位标签在图表坐标轴上的位置。可读/写 **[XlChartElementPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartElementPosition)** 。



## 语法

express.**Position**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

XlChartElementPosition

## 示例


```JavaScript
/*本示例显示是否自动设置活动文档第一个内嵌图表中数值轴上的单位标签的位置。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Position === xlChartElementPositionAutomatic)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的数值轴的单位标签在图表坐标轴上的位置设置为xlChartElementPositionCustom。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Position = xlChartElementPositionCustom
}
```
