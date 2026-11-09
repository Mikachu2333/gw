# Axis.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **Axis** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例选中活动文档上第一张内嵌图表的数值轴。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlValue).Select()
    }
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的分类轴绘制数据点的顺序，并选中该分类轴。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    axis.ReversePlotOrder = true
    axis.Select()
}
```
