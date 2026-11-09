# Trendline.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档中第一个内嵌图表的第二个数据系列的第一条趋势线。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Select()
}
```


```JavaScript
/*此示例判断如果第一个文档上的第一个形状中图表的第一个数据系列的第一条趋势线的类型为xlMovingAvg，则选中该趋势线。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    if (trendline.Type == xlMovingAvg) {
        trendline.Select()
    }
}
```
