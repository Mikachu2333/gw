# DisplayUnitLabel.Select

选择对象。



## 语法

express.**Select()**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 返回值

Variant

## 示例


```JavaScript
/*本示例选中图表工作表 Chart1 中数值轴上的单位标签。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Select()
}
```


```JavaScript
/*下例选中 Sheet1 上的第一个图表数值轴上的单位标签。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Select()
}
```
