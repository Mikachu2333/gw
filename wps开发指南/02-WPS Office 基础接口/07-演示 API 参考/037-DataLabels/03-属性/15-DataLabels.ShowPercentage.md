# DataLabels.ShowPercentage

如果为 **True** ，则在图表中显示数据标签的百分比值。如果为 **False** ，则隐藏该百分比值。可读/写 **Boolean** 类型。



## 语法

express.**ShowPercentage**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表上第一个数据系列的数据标签的百分比数值设置为可见。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).DataLabels().ShowPercentage = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个数据系列的数据标签的百分比数值是否可见。*/
function test() {
    let dataLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).DataLabels()
    alert(dataLabels.ShowPercentage)
}
```
