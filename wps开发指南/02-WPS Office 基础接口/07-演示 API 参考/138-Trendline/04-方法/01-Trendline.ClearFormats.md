# Trendline.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一条趋势线的格式设置。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.ClearFormats()
}
```


```JavaScript
/*此示例清除第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的第一条趋势线的格式设置。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Trendlines(1)
    trendline.ClearFormats()
}
```
