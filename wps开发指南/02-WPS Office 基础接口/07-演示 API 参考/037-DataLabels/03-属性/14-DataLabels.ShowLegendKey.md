# DataLabels.ShowLegendKey

如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowLegendKey**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一张图表上第一个数据系列的数据标签的值和图例项标示设置为可见。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).DataLabels().ShowLegendKey = true
        shape.Chart.SeriesCollection(1).DataLabels().ShowValue = true
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的数据标签的图例项标示是否可见。*/
function test() {
    let dataLabels = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    alert(dataLabels.ShowLegendKey)
}
```
