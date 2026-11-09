# AxisTitle.Shadow

返回或设置一个确定对象是否有阴影的值。 **Boolean** 类型，可读/写。



## 语法

express.**Shadow**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例关闭活动文档中第一个内嵌图表的分类轴标题的阴影。*/
function test() {
    let axistitle = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axistitle.Shadow = false
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的数值轴标题是否有阴影。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Shadow)
}
```
