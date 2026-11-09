# Point.PictureType

返回或设置一个指定图片在柱形图或条形图上的显示方式的值。可读/写 **[XlChartPictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartPictureType)** 。



## 语法

express.**PictureType**

express   一个代表 **Point** 对象的变量。

## 类型

XlChartPictureType

## 示例


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三个系列的第二个数据点的图片的展示方式是否为xlStretch。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(2)
    alert(point.PictureType == xlStretch)
}
```


```JavaScript
/*本示例将活动文档中第一个内嵌图表的第一个数据系列的第四个数据点的图片的显示方式设置为xlStackScale。*/
function test() {
    let series = ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1)
    series.Points(4).PictureType = xlStackScale
}
```
