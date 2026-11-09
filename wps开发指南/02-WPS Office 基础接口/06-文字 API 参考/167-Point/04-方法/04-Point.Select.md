# Point.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Point** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档的第一个内嵌图表的第一个系列的第一个数据点。*/
function test() {
    let point = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Points(1)
    point.Select()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的第二个数据系列的第三个数据点的名称为“S2P3”，则选中该数据点。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points(3)
    if (point.Name == "S2P3") {
        point.Select()
    }
}
```
