# Axis.Crosses

返回或设置指定坐标轴与其他坐标轴相交的点。可读/写 **Long** 类型。



## 语法

express.**Crosses**

express   一个代表 **Axis** 对象的变量。

## 类型

XlAxisCrosses

## 说明


该属性不适用于雷达图。对于三维图表，该属性只适用于数值轴，表示由分类轴定义的平面与数值轴相交的位置。

该属性既可用于分类轴，也可用于数值轴。对于分类轴， **xlAxisCrossesMinimum** 将数值轴设置为在第一个分类处与之相交，而 **xlAxisCrossesMaximum** 将数值轴设置为在最后一个分类处与之相较。 **xlAxisCrossesMinimum** 和 **xlAxisCrossesMaximum** 是 **XlAxisCrosses** 枚举中的常量。

请注意，根据坐标轴的不同， **xlAxisCrossesMinimum** 和 **xlAxisCrossesMaximum** 可能有不同的含义。



## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的数值轴设置为与分类轴在最大 x 轴值处相交。*/
function test() {
    let axis = ActiveDocument.InlineShapes(1)
    if (axis.HasChart) {
        axis.Chart.Axes(xlCategory).Crosses = xlAxisCrossesMaximum
    }
}
```


```JavaScript
/*本示例使第一个文档上第一个形状中图表的数值轴与分类轴在该分类轴的相交位置由WPS设置，并通知用户。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    axis.Crosses = xlAxisCrossesAutomatic
    alert("数值轴与分类轴在分类轴的相交位置由WPS设置")
}
```
