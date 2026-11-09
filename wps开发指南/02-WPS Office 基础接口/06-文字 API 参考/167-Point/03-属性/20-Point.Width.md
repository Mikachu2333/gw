# Point.Width

返回对象的宽度（以磅为单位）。只读。



## 语法

express.**Width**

express   一个代表 **Point** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的第二个系列的第三个数据点的宽度。*/
function test() {
    let point = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(2).Points(3)
    alert(point.Width + " 磅")
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三个系列的所有数据点的宽度。*/
function test() {
    let points = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points()
    let str = ""
    for (let i = 1; i <= points.Count; i++) {
        str += `第${i}个数据点的宽度：${points.Item(i).Width} 磅\n`
    }
    alert(str)
}
```
