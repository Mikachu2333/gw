# Axis.TickLabelSpacing

返回或设置刻度线标签之间的分类数或系列数。可读/写 **Long** 类型。



## 语法

express.**TickLabelSpacing**

express   一个代表 **Axis** 对象的变量。

## 类型

number（int4 精度）

## 说明


该属性只适用于分类轴和系列轴。它可以是介于 1 到 31999 之间的值。

数值轴上刻度线标签间距总是由 WPS文字 进行计算。



## 示例


```JavaScript
/*本示例设置活动文档中第一张内嵌图表的分类轴上刻度线标签之间的分类数。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlCategory).TickLabelSpacing = 10
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的分类轴刻度线标签之间的分类数。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.TickLabelSpacing)
}
```
