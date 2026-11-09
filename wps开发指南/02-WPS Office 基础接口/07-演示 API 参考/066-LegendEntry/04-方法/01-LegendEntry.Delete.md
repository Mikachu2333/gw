# LegendEntry.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **LegendEntry** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动演示文稿的第一张幻灯片中第一个图表的第一个图例项。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Legend.LegendEntries().Item(1).Delete()
    }
}
```


```JavaScript
/*本示例删除第一个演示文稿的第一张幻灯片中第一个图表的第二个图例项。*/
function test() {
    Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.Legend.LegendEntries().Item(2).Delete()
}
```
