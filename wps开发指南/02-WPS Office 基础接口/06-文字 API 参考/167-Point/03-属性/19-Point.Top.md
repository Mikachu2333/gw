# Point.Top

返回一个值，该值代表从对象上边缘到图表区上边缘的距离（以磅为单位）。只读。



## 语法

express.**Top**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的第一个系列的第三个数据点的上边缘到图表区上边缘的距离。*/
function test() {
    let point = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Points(3)
    alert(point.Top + " 磅")
}
```


```JavaScript
/*本示例将第一个文档上第一个形状中图表的第二个系列的所有数据点的上边缘到图表区上边缘的距离插入到光标处。*/
function test() {
    let points = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(2).Points()
    for (let i = 1; i <= points.Count; i++) {
        Selection.TypeText(`第${i}个数据点的上边距：${points.Item(i).Top} 磅\n`)
    }
}
```
