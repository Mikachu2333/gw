# DataLabels.ShowBubbleSize

如果为 **True** ，则在图表中显示数据标签的气泡大小。如果为 **False** ，则隐藏气泡大小。可读/写 **Boolean** 类型。



## 语法

express.**ShowBubbleSize**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表上第一个数据系列的数据标签的气泡大小设置为可见。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).DataLabels().ShowBubbleSize = true
    }
}
```


```JavaScript
/*本示例判断第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的数据标签的气泡大小是否可见，并通知用户。*/
function test() {
    let dataLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels()
    if (dataLabels.ShowBubbleSize) {
        alert("数据标签的气泡大小可见")
    } else {
        alert("数据标签的气泡大小不可见")
    }
}
```
