# DataLabel.NumberFormatLinked

如果指定数字格式指向单元格（以便当单元格的格式更改时数据标签的格式也作相应的改动），则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**NumberFormatLinked**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一张图表的第二个系列的第一个数据标签的数字格式设置为指向单元格。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.SeriesCollection(2).DataLabels(1).NumberFormatLinked = true
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第三个数据系列的第三个数据点的数据标签的数字格式是否指向单元格。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(3)
    alert(point.DataLabel.NumberFormatLinked)
}
```
