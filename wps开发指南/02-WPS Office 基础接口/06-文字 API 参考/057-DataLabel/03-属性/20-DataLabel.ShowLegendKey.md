# DataLabel.ShowLegendKey

如果数据标签图例项标示可见，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ShowLegendKey**

express   一个代表 **DataLabel** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的第一个系列的第一个数据标签的值和图例项标示设置为可见。*/
function test() {
    let inlineshp = ActiveDocument.InlineShapes(1)
    if (inlineshp.HasChart) {
        let datalabel = inlineshp.Chart.SeriesCollection(1).DataLabels(1)
        datalabel.ShowLegendKey = true
        datalabel.ShowValue = true
    }
}
```


```JavaScript
/*本示例判断第一个文档上第一个形状中图表的第二个数据系列的第二个数据点的数据标签的图例项标示是否可见，并通知用户。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(2)
    if (point.DataLabel.ShowLegendKey) {
        alert("数据标签的图例项标示可见")
    } else {
        alert("数据标签的图例项标示不可见")
    }
}
```
