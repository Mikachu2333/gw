# DataLabels.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **DataLabels** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的第一个数据系列的数据标签的线条宽度设置为 1.5 磅。*/
function test() {
    let dataLabels = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).DataLabels()
    dataLabels.Format.Line.Weight = 1.5
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的第三个数据系列的数据标签的前景色。*/
function test() {
    let dataLabels = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).DataLabels()
    dataLabels.Format.Fill.ForeColor.RGB = RGB(255, 0, 255)
}
```
