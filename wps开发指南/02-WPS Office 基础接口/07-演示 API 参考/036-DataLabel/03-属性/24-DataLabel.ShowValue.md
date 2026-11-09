# DataLabel.ShowValue

如果为 **True** ，则显示指定图表的数据标签值。如果为 **False** ，则隐藏这些值。可读/写 **Boolean** 类型。



## 语法

express.**ShowValue**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表上第二个数据系列的第一个数据标签的值设置为可见。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(2).DataLabels(1).ShowValue = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第三个数据点的数据标签是否展示值。*/
function test() {
    let point = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    alert(point.DataLabel.ShowValue)
}
```
