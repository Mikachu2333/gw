# DataLabel.Width

返回或设置对象的宽度（以磅为单位）。可读写， **Double** 类型。



## 语法

express.**Width**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例先将活动文档中的第一张内嵌图表中第一个系列的数据标签设置为可见，然后设置第一个系列的第二个数据标签的宽度。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    inlineShape.Chart.SeriesCollection(1).HasDataLabels = true
    inlineShape.Chart.SeriesCollection(1).DataLabels(2).Width = 20
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三个数据系列的第二个数据点的数据标签的宽度。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(2)
    alert(`数据标签的宽度：${point.DataLabel.Width}`)
}
```
