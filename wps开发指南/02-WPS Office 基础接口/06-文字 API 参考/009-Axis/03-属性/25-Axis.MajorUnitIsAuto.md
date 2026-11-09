# Axis.MajorUnitIsAuto

如果 WPS 计算数值轴的主要单位，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MajorUnitIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


设置 **MajorUnit** 属性会将该属性设置为 **False** 。



## 示例


```JavaScript
/*本示例自动设置活动文档的第一张内嵌图表的数值轴的主要和次要刻度单位。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        axis.MajorUnitIsAuto = true
        axis.MinorUnitIsAuto = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴的主要单位是否由WPS计算。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    alert(axis.MajorUnitIsAuto)
}
```
