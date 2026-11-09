# DisplayUnitLabel.FormulaR1C1

返回或设置对象的公式，使用宏语言中的 R1C1 样式表示法。可读/写 **String** 类型。



## 语法

express.**FormulaR1C1**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例设置以宏语言的 R1C1 表示的活动文档上第一个内嵌图表的数值轴的单位标签的公式。*/
function test() {
    let displayUnitLabel = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.FormulaR1C1 = "example3"
}
```


```JavaScript
/*本示例显示以宏语言的 R1C1 表示的第一个文档上第一个形状中图表的数值轴的单位标签的公式。*/
function test() {
    let displayUnitLabel = Application.Documents.Item(1).Shapes.Item(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.FormulaR1C1)
}
```
