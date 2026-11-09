# Axis.Width

以磅为单位返回对象的宽度。只读 **Double** 类型。



## 语法

express.**Width**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一张内嵌图表的数值轴的宽度。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue)
    alert(`数值轴的宽度：${axis.Width} 磅`)
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的分类轴的标题文本为“example_2”，则显示该分类轴的高度和宽度。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory)
    if (axis.AxisTitle.Caption == "example_2") {
        alert(`分类轴的宽度：${axis.Width} 磅\n分类轴的高度：${axis.Height} 磅`)
    }
}
```
