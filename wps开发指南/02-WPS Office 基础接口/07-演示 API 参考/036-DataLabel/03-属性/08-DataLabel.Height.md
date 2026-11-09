# DataLabel.Height

返回对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一张图表中第二个数据系列的第四个数据标签的高度为80磅。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(2).DataLabels(4).Height = 80
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的第二个数据点的数据标签的高度。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(2)
    alert(point.DataLabel.Height)
}
```
