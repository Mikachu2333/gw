# Series.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Series** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例将活动演示文稿上第一张幻灯片中第一个图表的第二个系列选中。*/
function test() {
    let Shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (Shape.HasChart) {
        Shape.Chart.SeriesCollection(2).Select()
    }
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列选中。*/
function test() {
    let Shape = Presentations.Item(1).Slides.Item(2).Shapes.Item(1)
    if (Shape.HasChart) {
        Shape.Chart.SeriesCollection(3).Select()
    }
}
```
