# Gridlines.Border

返回对象的边框。只读 **ChartBorder** 对象。



## 语法

express.**Border**

express   一个代表 **Gridlines** 对象的变量。

## 类型

ChartBorder

## 示例


```JavaScript
/*本示例判断如果活动文档中第一张内嵌图表的数值轴拥有主要网格线，则将其线条样式设置为虚线。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            axis.MajorGridlines.Border.LineStyle = xlDash
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的类别轴中的次要网格线是否为中等粗细。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.MinorGridlines.Border.Weight == xlMedium)
}
```
