# Point.Height

返回对象的高度（以磅为单位）。只读。



## 语法

express.**Height**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的第一个系列的第一个数据点的高度。*/
function test() {
    let point = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Points(1)
    alert(point.Height + " 磅")
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第三系列的所有数据点的高度添加到数组“arr”中，然后显示。*/
function test() {
    let points = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points()
    let arr = []
    for (let i = 1; i <= points.Count; i++) {
        arr.push(points.Item(i).Height)
    }
    alert(arr.toString())
}
```
