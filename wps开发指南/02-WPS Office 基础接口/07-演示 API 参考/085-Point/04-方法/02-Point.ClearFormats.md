# Point.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Point** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片中第一个图表上第二个系列的第一个数据点的格式。*/
function test() {
    let point = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(1)
    point.ClearFormats()
}
```


```JavaScript
/*本示例清除第一个演示文稿的第一张幻灯片上第一个图表的第一个系列的所有奇数位的数据点的格式。*/
function test() {
    let series = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1)
    for (let i = 1; i <= series.Points().Count; i += 2) {
        series.Points(i).ClearFormats()
    }
}
```
