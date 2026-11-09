# Series.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **Series** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将第一个文档上第一个图表的第二个数据系列的颜色设置为红色。*/
function test() {
    let series = Application.Documents.Item(1).InlineShapes(1).Chart.SeriesCollection(2)
    series.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例显示活动文档中第一个图表的第一个数据系列的线条粗细。*/
function test() {
    let series = ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1)
    alert(series.Format.Line.Weight + "磅")
}
```
