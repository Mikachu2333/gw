# DataLabel.Height

以磅为单位获取或设置对象的高度。 可读/写 **Double** 类型。



## 语法

express.**Height**

express   一个代表 **DataLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置活动文档上第一张内嵌图表中第二个数据系列的第四个数据标签的高度为80磅。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.SeriesCollection(2).DataLabels(4).Height = 80
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三个数据系列的第二个数据点的数据标签的高度。*/
function test() {
    let point = Application.Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(2)
    alert(point.DataLabel.Height)
}
```
