# Axis.BaseUnitIsAuto

如果由 Wps 为指定的分类轴选择适当的基本单位，则为 **True** 。默认值为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**BaseUnitIsAuto**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


不能对数值轴设置本属性。



## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的分类轴设置为使用基本单位由WPS自动选择的时间刻度。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlCategory)
        axis.CategoryType = xlTimeScale
        axis.BaseUnitIsAuto = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的类别轴是否由WPS选择适当的基本单位。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.BaseUnitIsAuto)
}
```
