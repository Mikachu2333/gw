# DataLabel.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **DataLabel** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*此示例将活动文档中第一张内嵌图表的第一个数据系列的第一个数据标签删除。*/
function test() {
    Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1).DataLabels(1).Delete()
}
```


```JavaScript
/*本示例删除第一个文档上第一个形状中图表的第二个数据系列的第三个数据标签。*/
function test() {
    let chart = Application.Documents.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(2).DataLabels(3).Delete()
}
```
