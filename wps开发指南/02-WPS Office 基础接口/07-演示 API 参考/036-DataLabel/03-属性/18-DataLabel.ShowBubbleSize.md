# DataLabel.ShowBubbleSize

如果为 **True** ，则在图表中显示数据标签的气泡大小。如果为 **False** ，则隐藏气泡大小。可读/写 **Boolean** 类型。



## 语法

express.**ShowBubbleSize**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表上第一个系列的第一个数据点的数据标签设置为展示气泡大小。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        let datalabel = shape.Chart.SeriesCollection(1).Points(1).DataLabel
        datalabel.ShowBubbleSize = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第三个数据点的数据标签是否展示气泡大小。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    alert(point.DataLabel.ShowBubbleSize)
}
```
