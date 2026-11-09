# LegendEntry.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **LegendEntry** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动演示文稿的第一张幻灯片中第一个图表的第一个图例项。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).Select()
    }
}
```


```JavaScript
/*本示例选中第一个演示文稿的第一张幻灯片中第一个图表的最后一个图例项。*/
function test() {
    let legendEntries = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries()
    legendEntries.Item(legendEntries.Count).Select()
}
```
