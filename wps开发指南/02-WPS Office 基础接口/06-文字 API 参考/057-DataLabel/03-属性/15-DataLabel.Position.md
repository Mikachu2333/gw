# DataLabel.Position

返回或设置数据标签的位置。可读/写 **[XlDataLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDataLabelPosition)** 。



## 语法

express.**Position**

express   一个代表 **DataLabel** 对象的变量。

## 类型

XlDataLabelPosition

## 示例


```JavaScript
/*本示例设置活动文档中第一张内嵌图表的第一个系列的第一个数据标签的位置为xlLabelPositionCenter。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.SeriesCollection(1).HasDataLabels = true
    chart.SeriesCollection(1).DataLabels(1).Position = xlLabelPositionCenter
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的第三个数据点的数据标签的位置是否为xlLabelPositionRight。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    alert(point.DataLabel.Position == xlLabelPositionRight)
}
```
