# Axis.HasMinorGridlines

如果坐标轴有次要网格线，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**HasMinorGridlines**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


只有主要坐标轴组中的坐标轴才能有网格线。



## 示例


```JavaScript
/*本示例判断如果活动文档中第一张内嵌图表的数值轴拥有次要网格线，则将其线条样式设置为虚线。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        if (axis.HasMinorGridlines) {
            axis.MinorGridlines.Border.LineStyle = xlDash
        }
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的类别轴是否展示次要网格线。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.HasMinorGridlines)
}
```
