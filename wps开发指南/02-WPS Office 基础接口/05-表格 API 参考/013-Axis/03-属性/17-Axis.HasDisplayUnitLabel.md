# Axis.HasDisplayUnitLabel

如果由 **DisplayUnit** 或 **DisplayUnitCustom** 属性指定的标签显示在指定坐标轴上，则该属性值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasDisplayUnitLabel**

express   一个代表 **Axis** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中数值轴上的单位设置为 500，但隐藏单位标志。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue)
    axis.DisplayUnit = xlCustom
    axis.DisplayUnitCustom = 500
    axis.HasTitle = true
    axis.AxisTitle.Caption = "Rebate Amounts"
    axis.HasDisplayUnitLabel = false
}
```


```JavaScript
/*本示例将工作表 Sheet1 中第一个图表的数值轴上的单位设置为 10，并显示单位标志是否可见。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.DisplayUnit = xlCustom
    axis.DisplayUnitCustom = 10
    alert(axis.HasDisplayUnitLabel)
}
```
