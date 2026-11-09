# Axis.ReversePlotOrder

如果 WPS文字 绘制数据点的顺序为从后往前，则为 **True** 。可读/写 **Boolean** 类型。



## 语法

express.**ReversePlotOrder**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 说明


该属性不能用于雷达图。



## 示例


```JavaScript
/*本示例设置活动文档中的第一张内嵌图表的数值轴按照从后向前的顺序绘制数据点。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlValue).ReversePlotOrder = true
    }
}
```


```JavaScript
/*本示例判断第一个文档上第一个形状中图表的分类轴绘制数据点的顺序，并通知用户。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    if (axis.ReversePlotOrder) {
        alert("分类轴按照从后向前的顺序绘制数据点")
    } else {
        alert("分类轴按照从前向后的顺序绘制数据点")
    }
}
```
