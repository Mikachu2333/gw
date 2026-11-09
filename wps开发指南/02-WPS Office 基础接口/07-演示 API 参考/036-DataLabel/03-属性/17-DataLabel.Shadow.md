# DataLabel.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例将活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第一个数据标签设置为有阴影。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(1).DataLabels(1).Shadow = true
}
```


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片中第一个图表上的第二个数据系列的第四个数据标签是否有阴影。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let datalabel = shape.Chart.SeriesCollection(2).DataLabels().Item(4)
    alert(datalabel.Shadow)
}
```
