# DisplayUnitLabel.Left

返回或设置 **Double** 值，它代表从对象左边缘到工作表的 A 列左边缘或图表上的图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中数值轴上的单位标签左边缘到图表区左边缘的距离。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Left)
}
```


```JavaScript
/*下例将 Sheet1 上的第一个图表数值轴上的单位标签左边缘到图表区左边缘的距离设置为15磅。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Left = 15
}
```
