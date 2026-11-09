# DataLabel.Top

返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中的第一个图表中第一个系列的数据标签设置为可见，然后显示第一个系列的第一个数据标签的上边缘到图表区顶部的距离，以磅为单位。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    shape.Chart.SeriesCollection(1).HasDataLabels = true
    alert(shape.Chart.SeriesCollection(1).DataLabels(1).Top)
}
```


```JavaScript
/*本示例先将第一个演示文稿的第一张幻灯片中的第一个图表中第二个系列的数据标签设置为可见，然后设置第二个系列的第一个数据标签的上边缘到图表区顶部的距离为50磅。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    shape.Chart.SeriesCollection(2).HasDataLabels = true
    shape.Chart.SeriesCollection(2).DataLabels(1).Top = 50
}
```
