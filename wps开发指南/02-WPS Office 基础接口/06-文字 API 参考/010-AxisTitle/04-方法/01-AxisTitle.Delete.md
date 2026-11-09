# AxisTitle.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **AxisTitle** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例判断如果活动文档中第一个内嵌图表的分类轴标题为可见，则删除该分类轴标题。*/
function test() {
    let axis = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory)
    if (axis.HasTitle) {
        axis.AxisTitle.Delete()
    }
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的数值轴标题为“example_3”，则删除该标题。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    if (axisTitle.Caption == "example_3") {
        axisTitle.Delete()
    }
}
```
