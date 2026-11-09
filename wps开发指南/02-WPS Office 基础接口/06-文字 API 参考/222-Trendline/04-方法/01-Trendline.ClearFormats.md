# Trendline.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动文档上第一个内嵌图表的第一个数据系列的第一条趋势线的格式设置。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.ClearFormats()
}
```


```JavaScript
/*此示例清除第一个文档上的第一个形状中图表的第三个数据系列的第一条趋势线的格式设置。*/
function test() {
    let trendline = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Trendlines(1)
    trendline.ClearFormats()
}
```
