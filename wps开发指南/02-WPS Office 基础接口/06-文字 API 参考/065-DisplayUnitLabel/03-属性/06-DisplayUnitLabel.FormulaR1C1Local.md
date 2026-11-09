# DisplayUnitLabel.FormulaR1C1Local

返回或设置对象的公式，使用用户语言中的 R1C1 样式表示法。可读/写 **String** 类型。



## 语法

express.**FormulaR1C1Local**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置以用户语言中的 R1C1 样式表示的活动文档上第一个内嵌图表的数值轴的单位标签的公式。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.FormulaR1C1Local = "example4"
}
```


```JavaScript
/*本示例显示以用户语言中的 R1C1 样式表示的第一个文档上第一个形状中图表的数值轴的单位标签的公式。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.FormulaR1C1Local)
}
```
