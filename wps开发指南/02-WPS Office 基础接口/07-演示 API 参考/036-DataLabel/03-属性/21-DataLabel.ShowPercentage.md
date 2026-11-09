# DataLabel.ShowPercentage

如果为 **True** ，则在图表中显示数据标签的百分比值。如果为 **False** ，则隐藏该百分比值。可读/写 **Boolean** 类型。



## 语法

express.**ShowPercentage**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*此示例显示活动演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第一个数据点关联的数据标签的百分比数值，此示例假定该图表为饼图。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Points(1).DataLabel.ShowPercentage = true
    }
}
```


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片中第一个图表的第一个数据系列的第四个数据点关联的数据标签是否展示百分比数值，此示例假定该图表为饼图。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    let datalabel = shape.Chart.SeriesCollection(1).Points(4).DataLabel
    alert(datalabel.ShowPercentage)
}
```
