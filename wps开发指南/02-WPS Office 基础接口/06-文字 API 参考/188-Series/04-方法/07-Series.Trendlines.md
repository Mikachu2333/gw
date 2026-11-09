# Series.Trendlines

返回系列的所有趋势线的集合。



## 语法

express.**Trendlines(Index)**

express   一个代表 **Series** 对象的变量。

## 返回值

一个代表系列中所有趋势线的 **[Trendlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendlines/obj)** 对象。

## 示例


```JavaScript
/*本示例向活动文档中第一个图表的第一个系列添加线性趋势线。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Trendlines().Add(xlLinear)
    }
}
```


```JavaScript
/*本示例将选中的第一个图表的第三个系列的第一条趋势线类型更改为xlMovingAvg。*/
function test() {
    let series = Selection.InlineShapes.Item(1).Chart.SeriesCollection(3)
    series.Trendlines(1).Type = xlMovingAvg
}
```
