# DataLabels.ShowLegendKey

如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowLegendKey**

express   一个代表 **DataLabels** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表上第一个数据系列的数据标签的值和图例项标示设置为可见。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).DataLabels().ShowLegendKey = true
        inlineShape.Chart.SeriesCollection(1).DataLabels().ShowValue = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的数据标签的图例项标示是否可见。*/
function test() {
    let dataLabels = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).DataLabels()
    alert(dataLabels.ShowLegendKey)
}
```
