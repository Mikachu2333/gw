# Gridlines.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Gridlines** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果活动文档中第一张内嵌图表的数值轴拥有主要网格线，则将其删除。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlValue)
        if (axis.HasMajorGridlines) {
            axis.MajorGridlines.Delete()
        }
    }
}
```


```JavaScript
/*本示例删除第一个文档上第一个形状中图表的类别轴中的次要网格线。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    axis.MinorGridlines.Delete()
}
```
