# Axis.Top

返回从对象的上边缘到图表区的顶部（在图表上）的距离（以磅为单位），只读 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **Axis** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一张内嵌图表的分类轴的上边缘到图表区顶部的距离。*/
function test() {
    let axis = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory)
    alert(axis.Top)
}
```


```JavaScript
/*本示例判断如果第一个文档上第一个形状中图表的数值轴的标题文本为“example_1”，则显示该数值轴上边缘到图表区顶部的距离。*/
function test() {
    let axis = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue)
    if (axis.AxisTitle.Caption == "example_1") {
        alert(`数值轴上边缘到图表区顶部的距离：${axis.Top} 磅`)
    }
}
```
