# SeriesLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **SeriesLines** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动文档中第一个图表的第一个图表组的系列线。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartGroups(1).SeriesLines.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的第一个图表组的系列线名称为“系列线 1”，则删除该系列线。*/
function test() {
    let seriesLines = Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1).SeriesLines
    if (seriesLines.Name == "系列线 1") {
        seriesLines.Delete()
    }
}
```
