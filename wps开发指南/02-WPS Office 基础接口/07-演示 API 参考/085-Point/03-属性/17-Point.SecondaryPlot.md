# Point.SecondaryPlot

如果数据点位于复合饼图或复合条饼图中的第二部分，则该值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**SecondaryPlot**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 说明


该属性仅应用于复合饼图或复合条饼图中的数据点。



## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片的第一个图表的第一个系列的第四个数据点移动到图表的第二部分。必须在复合饼图或复合条饼图上运行该示例。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Points(4).SecondaryPlot = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第三个数据点是否位于复合饼图中的第二部分。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    alert(point.SecondaryPlot)
}
```
