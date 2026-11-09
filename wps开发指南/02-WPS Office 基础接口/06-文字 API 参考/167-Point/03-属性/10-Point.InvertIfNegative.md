# Point.InvertIfNegative

如果对象与一个负数相对应时 WPS 就将其反色，则为 **True** 。可读/写 **Variant** 类型。



## 语法

express.**InvertIfNegative**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例设置活动文档中第一个内嵌图表的第二个系列的第二个数据点的负值将以相反的颜色进行显示。*/
function test() {
    let point = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).Points(2)
    point.InvertIfNegative = true
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的第三系列的第二个数据点的负值将以相反的颜色进行显示，并将该数据点的数据标签设置为可见。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(2)
    point.InvertIfNegative = true
    point.HasDataLabel = true
}
```
