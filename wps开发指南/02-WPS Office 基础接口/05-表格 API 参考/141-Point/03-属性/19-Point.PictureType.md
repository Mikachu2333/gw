# Point.PictureType

返回或设置一个 **[XlChartPictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartPictureType)** 值，它代表在柱形或条形图上图片的显示方式。



## 语法

express.**PictureType**

express   一个代表 **Point** 对象的变量。

## 类型

XlChartPictureType

## 示例


```JavaScript
/*此示例设置第一张工作表上第一个图表的第三个数据系列中第2个数据点图片的显示方式为xlStack。*/
function test() {
    let series = Application.Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(3)
    series.Points(2).PictureType = xlStack
}
```


```JavaScript
/*本示例显示 Chart1 中第二个数据系列的第9个数据点图片的显示方式是否为xlStretch。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    alert(series.Points(9).PictureType == xlStretch)
}
```
