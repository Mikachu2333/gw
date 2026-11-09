# DisplayUnitLabel.FormulaLocal

获取或设置一个 **String** 值，该值以用户的语言使用 A1 样式表示法来表示对象的公式。可读/写。



## 语法

express.**FormulaLocal**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 说明


有关 A1 样式表示法的详细信息，请参阅操作方法：使用 A1 表示法引用单元格和区域。



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中数值轴上的单位标签设置为工作表 Sheet1 中 B5 单元格的内容。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.FormulaLocal = "=Sheet1!$B$5"
}
```


```JavaScript
/*下例显示 Sheet1 上的第一个图表数值轴上的单位标签的公式。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.FormulaLocal)
}
```
