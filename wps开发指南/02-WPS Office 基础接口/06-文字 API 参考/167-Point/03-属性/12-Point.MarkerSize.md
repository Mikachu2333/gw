# Point.MarkerSize

以磅为单位返回或设置数据标记的大小。可读/写 **Long** 类型。



## 语法

express.**MarkerSize**

express   一个代表 **Point** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性的值可以介于 2 到 72 之间。



## 示例


```JavaScript
/*本示例将活动文档中第一个内嵌图表的第一个系列的第一个数据点的数据标记大小设置为10磅。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    chart.SeriesCollection(1).Points(1).MarkerSize = 10
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三系列的第三个数据点的数据标记大小。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(3)
    alert(point.MarkerSize)
}
```
