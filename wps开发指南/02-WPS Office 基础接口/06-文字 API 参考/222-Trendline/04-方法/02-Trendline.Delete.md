# Trendline.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动文档中第一个内嵌图表的第一个数据系列的第一条趋势线。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.Delete()
}
```


```JavaScript
/*本示例删除第一个文档上的第一个形状中图表的第二个数据系列的第一条趋势线，并通知用户。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Delete()
    alert("趋势线已删除")
}
```
