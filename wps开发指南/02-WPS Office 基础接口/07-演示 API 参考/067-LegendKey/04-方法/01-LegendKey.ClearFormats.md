# LegendKey.ClearFormats

清除对象的格式设置。



## 语法

express.**ClearFormats()**

express   一个代表 **LegendKey** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例清除活动演示文稿的第一张幻灯片中第一个图表的第一个图例项的图例项标示的格式设置。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).LegendKey.ClearFormats()
    }
}
```


```JavaScript
/*本示例清除第一个演示文稿的第一张幻灯片上第一个图表的最后一个图例项的图例项标示的格式设置。*/
function test() {
    let legendEntries = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    legendEntries.Item(legendEntries.Count).LegendKey.ClearFormats()
}
```
