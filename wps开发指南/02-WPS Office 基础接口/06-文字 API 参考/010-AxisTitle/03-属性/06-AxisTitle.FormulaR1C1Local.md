# AxisTitle.FormulaR1C1Local

返回或设置对象的公式，使用用户语言中的 R1C1 样式表示法。可读/写 **String** 类型。



## 语法

express.**FormulaR1C1Local**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例使用用户语言中的 R1C1 样式设置活动文档中第一张内嵌图表的分类轴标题的公式。*/
function test() {
    let axisTitle = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    axisTitle.FormulaR1C1Local = "example"
}
```


```JavaScript
/*本示例显示使用用户语言中的 R1C1 样式表示的第一个文档上第一个形状中图表的数值轴标题的公式。*/
function test() {
    let axisTitle = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).AxisTitle
    alert(axisTitle.FormulaR1C1Local)
}
```
