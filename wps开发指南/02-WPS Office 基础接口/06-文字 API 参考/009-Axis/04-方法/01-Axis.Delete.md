# Axis.Delete

删除对象。



## 语法

express.**Delete()**

express   一个代表 **Axis** 对象的变量。

## 返回值

any

## 示例


```JavaScript
/*本示例删除活动文档中第一张内嵌图表的数值坐标轴。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue)
    axis.Delete()
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的分类轴的标题文本为“example_2”，则删除该分类轴。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    if (axis.AxisTitle.Text == "example_2") {
        axis.Delete()
    }
}
```
