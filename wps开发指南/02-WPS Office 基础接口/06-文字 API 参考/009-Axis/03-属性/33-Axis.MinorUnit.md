# Axis.MinorUnit

返回或设置数值轴上的次要单位。 **Double** 类型，可读写。



## 语法

express.**MinorUnit**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 说明


设置该属性会将 **MinorUnitIsAuto** 属性设置为 **False** 。

使用 **TickMarkSpacing** 属性可设置分类轴上的刻度线间距。



## 示例


```JavaScript
/*本示例为活动文档中的第一张内嵌图表的数值轴设置主要和次要刻度单位。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.MajorUnit = 100
        axis.MinorUnit = 20
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴的次要单位。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(`数值轴的次要单位：${axis.MinorUnit}`)
}
```
