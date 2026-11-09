# Series.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **Series** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动演示文稿上第一张幻灯片中第一个图表的第一个系列的格式设置。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).ClearFormats()
    }
}
```


```JavaScript
/*本示例清除第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的格式设置。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    shape.Chart.SeriesCollection(3).ClearFormats()
}
```
