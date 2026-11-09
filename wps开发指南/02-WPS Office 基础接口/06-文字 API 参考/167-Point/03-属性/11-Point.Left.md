# Point.Left

返回一个值，该值代表从对象左边缘到图表区左边缘的距离（以磅为单位）。只读。



## 语法

express.**Left**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的第一个系列的第一个数据点的左边缘到图表区左边缘的距离。*/
function test() {
    let chart = ActiveDocument.InlineShapes.Item(1).Chart
    alert("数据点的左边缘到图表区左边缘的距离为：" + chart.SeriesCollection(1).Points(1).Left + " 磅")
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三系列的第一个数据点的左边缘到图表区左边缘的距离。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(1)
    alert(point.Left)
}
```
