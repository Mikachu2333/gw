# AxisTitle.Left

以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。



## 语法

express.**Left**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一张内嵌图表的分类轴标题的左边缘到图表区左边缘的距离设置为 20 磅。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.Left = 20
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴标题的左边缘到图表区左边缘的距离。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Left)
}
```
