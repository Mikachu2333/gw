# Series.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Series** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第一个系列删除*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(1).Delete()
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列删除*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(3).Delete()
    }
}
```
