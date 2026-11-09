# LeaderLines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **LeaderLines** 对象的变量。

## 返回值

void

## 示例


```JavaScript
/*本示例删除活动文档中第一个图表的第一个数据系列的引导线。*/
function test() {
    let series = Application.ActiveDocument.InlineShapes(1).Chart.SeriesCollection(1)
    series.LeaderLines.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的第一个数据系列的引导线为虚线，则删除引导线。*/
function test() {
    let series = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    if (series.LeaderLines.Border.LineStyle == xlDash) {
        series.LeaderLines.Delete()
    }
}
```
