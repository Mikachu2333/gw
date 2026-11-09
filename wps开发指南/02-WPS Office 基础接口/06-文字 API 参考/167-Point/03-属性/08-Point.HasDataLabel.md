# Point.HasDataLabel

如果数据点具有数据标签，则该属性值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasDataLabel**

express   一个代表 **Point** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例为活动文档中第一个内嵌图表的第三个系列的第四个数据点启用数据标签，并将该数据标签的颜色设置为蓝色。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let point = inlineShape.Chart.SeriesCollection(3).Points(4)
        point.HasDataLabel = true
        point.ApplyDataLabels(xlValue)
        point.DataLabel.Font.Color = RGB(0, 0, 255)
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第三系列的第一个数据点是否具有数据标签。*/
function test() {
    let point = Documents.Item(1).Shapes.Item(1).Chart.SeriesCollection(3).Points(1)
    alert(point.HasDataLabel)
}
```
