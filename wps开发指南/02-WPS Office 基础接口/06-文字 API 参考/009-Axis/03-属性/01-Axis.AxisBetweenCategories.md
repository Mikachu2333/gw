# Axis.AxisBetweenCategories

如果数值轴与分类坐标轴相交于分类之间，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**AxisBetweenCategories**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


该属性仅适用于分类轴，而不适用于三维图表。



## 示例


```JavaScript
/*本示例设置活动文档上第一张内嵌图表的数值轴与分类坐标轴相交于两个分类之间。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlCategory).AxisBetweenCategories = true
    }
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴与分类轴是否相交于两个分类之间。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.AxisBetweenCategories)
}
```
