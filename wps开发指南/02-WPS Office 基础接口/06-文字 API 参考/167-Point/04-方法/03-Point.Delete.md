# Point.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Point** 对象的变量。

## 返回值

any

## 说明


删除 **[Point](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Point/obj)** 对象将删除整个数据系列。



## 示例


```JavaScript
/*本示例删除活动文档第一个内嵌图表的第三个系列。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes(1).Chart
    chart.SeriesCollection(3).Points(3).Delete()
}
```


```JavaScript
/*本示例删除第一个文档上第一个形状中图表的第二个系列。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(1)
    point.Delete()
}
```
