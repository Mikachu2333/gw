# DataLabel.Left

以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一张图表中第一个数据系列的第四个数据标签左边缘至图表区左边缘的距离为1磅。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(1).DataLabels(4).Left = 1
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的第二个数据点的数据标签左边缘到图表区左边缘的距离。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(2)
    alert(point.DataLabel.Left)
}
```
