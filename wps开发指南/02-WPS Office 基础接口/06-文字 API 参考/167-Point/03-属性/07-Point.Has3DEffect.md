# Point.Has3DEffect

如果数据点具有三维外观，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**Has3DEffect**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于气泡图。



## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表中第一个系列的第四个数据点是否具有三维外观。*/
function test() {
    let point = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Points(4)
    alert(point.Has3DEffect)
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第三系列的第二个数据点的三维外观设置为可见。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(2)
    point.Has3DEffect = true
}
```
