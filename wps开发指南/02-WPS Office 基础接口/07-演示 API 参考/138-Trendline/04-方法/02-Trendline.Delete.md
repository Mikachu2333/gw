# Trendline.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第一条趋势线。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.Delete()
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一条趋势线，并通知用户。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Delete()
    alert("趋势线已删除")
}
```
