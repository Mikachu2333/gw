# DataLabel.ShowSeriesName

如果为 **True** ，则在图表中显示数据标签的系列名称。如果为 **False** ，则隐藏系列名称。可读/写 **Boolean** 类型。



## 语法

express.**ShowSeriesName**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表上第一个数据系列的第三个数据标签设置为展示系列名称。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).DataLabels(3).ShowSeriesName = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的第三个数据点的数据标签是否展示系列名称。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Points(3)
    alert(point.DataLabel.ShowSeriesName)
}
```
