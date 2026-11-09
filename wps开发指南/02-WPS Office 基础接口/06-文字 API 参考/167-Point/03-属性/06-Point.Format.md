# Point.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **Point** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例设置活动文档上第一个内嵌图表中第一个系列的第三个数据点的前景填充色和边框线粗细。*/
function test() {
    let point = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Points(3)
    point.Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    point.Format.Line.Weight = 5
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个系列的第二个数据点的填充类型是否为msoFillSolid。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(2)
    alert(point.Format.Fill.Type == msoFillSolid)
}
```
