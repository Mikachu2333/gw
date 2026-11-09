# Series.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Series** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动文档中第一个图表的第一个系列的格式设置。*/
function test() {
    let series = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1)
    series.ClearFormats()
}
```


```JavaScript
/*本示例清除选中图表的第二个系列的格式设置。*/
function test() {
    Selection.InlineShapes.Item(1).Chart.SeriesCollection(2).ClearFormats()
}
```
