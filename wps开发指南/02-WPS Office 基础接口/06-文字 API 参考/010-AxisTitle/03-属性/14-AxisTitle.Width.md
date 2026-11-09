# AxisTitle.Width

返回对象的宽度（以磅为单位）。只读。



## 语法

express.**Width**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的分类轴标题的宽度。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    alert(`分类轴标题的宽度：${axisTitle.Width} 磅`)
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴标题的宽度。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Width)
}
```
