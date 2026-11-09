# DataLabels.ShowValue

如果为 **True** ，则显示指定图表的数据标签值。如果为 **False** ，则隐藏这些值。可读/写 **Boolean** 类型。



## 语法

express.**ShowValue**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例使活动演示文稿的第一张幻灯片中第一个图表上第一个系列展示图表的数据标签值。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).DataLabels().ShowValue = true
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第一个图表上的第二个数据系列的数据标签值设置为不可见。*/
function test() {
    let datalabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    datalabels.ShowValue = false
}
```
