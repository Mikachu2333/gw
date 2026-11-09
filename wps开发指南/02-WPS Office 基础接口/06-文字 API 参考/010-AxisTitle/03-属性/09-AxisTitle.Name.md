# AxisTitle.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示活动文档中第一个内嵌图表的数值轴标题的名称。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.Name)
}
```


```JavaScript
/*本示例在光标处插入第一个文档上第一个形状中图表的分类轴标题的名称。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    Selection.TypeText(axisTitle.Name)
}
```
