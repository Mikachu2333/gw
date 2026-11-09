# DisplayUnitLabel.FormulaR1C1

获取或设置一个 **String** 值，该值以英语使用 R1C1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**FormulaR1C1**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中数值轴上的单位标签设置为工作表 Sheet1 中 C5 单元格的内容。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.FormulaR1C1 = "='Sheet1'!R5C3"
}
```


```JavaScript
/*下例显示 Sheet1 上的第一个图表数值轴上的单位标签的R1C1公式。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.FormulaR1C1)
}
```
