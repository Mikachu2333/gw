# Series.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Series** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的第一个数据系列删除*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes(1).Chart
    chart.SeriesCollection(1).Delete()
}
```


```JavaScript
/*本示例将选中图表的第二个数据系列删除*/
function test() {
    let chart = Selection.InlineShapes.Item(1).Chart
    chart.SeriesCollection(2).Delete()
}
```
