# Gridlines.Format

返回行、填充和效果的对象的格式。只读的 **ChartFormat** 。



## 语法

express.**Format**

express   一个代表 **Gridlines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例判断如果活动文档中第一张内嵌图表的数值轴拥有主要网格线，则将其线条粗细设置为 3 磅。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            axis.MajorGridlines.Format.Line.Weight = 3
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的类别轴中次要网格线的虚线样式是否为实线。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.MinorGridlines.Format.Line.DashStyle == msoLineSolid)
}
```
