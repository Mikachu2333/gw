# DataLabels.Position

返回或设置数据标签的位置。可读/写 **[XlDataLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDataLabelPosition)** 。



## 语法

express.**Position**

express   一个代表 **DataLabels** 对象的变量。

## 类型

XlDataLabelPosition

## 示例


```JavaScript
/*本示例将活动文档的第一张内嵌图表的第一个数据系列的数据标签的位置设置为xlLabelPositionCenter。*/
function test() {
    let dataLabels = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels()
    dataLabels.Position = xlLabelPositionCenter
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的数据标签的位置是否为xlLabelPositionRight。*/
function test() {
    let dataLabels = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    alert(dataLabels.Position == xlLabelPositionRight)
}
```
