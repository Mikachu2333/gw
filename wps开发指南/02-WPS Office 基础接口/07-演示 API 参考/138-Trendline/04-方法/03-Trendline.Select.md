# Trendline.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Trendline** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一个图表的第二个数据系列的第一条趋势线。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Trendlines(1)
    trendline.Select()
}
```


```JavaScript
/*此示例判断如果第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第一条趋势线的类型为xlLinear，则选中该趋势线。*/
function test() {
    let trendline = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    if (trendline.Type == xlLinear) {
        trendline.Select()
    }
}
```
