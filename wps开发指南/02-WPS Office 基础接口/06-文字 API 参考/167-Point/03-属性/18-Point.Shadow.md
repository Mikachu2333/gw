# Point.Shadow

返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。



## 语法

express.**Shadow**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第二个系列的第一个数据点的阴影设置为可见。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(1)
    point.Shadow = true
}
```


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的第一个系列的第四个数据点是否带有阴影。*/
function test() {
    let point = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Points(4)
    alert(point.Shadow)
}
```
