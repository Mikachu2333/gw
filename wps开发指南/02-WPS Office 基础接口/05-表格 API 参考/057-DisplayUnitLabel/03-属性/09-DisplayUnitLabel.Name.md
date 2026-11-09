# DisplayUnitLabel.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 中数值轴上的单位标签名称。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Name)
}
```


```JavaScript
/*下例显示 Sheet1 上的第一个图表数值轴上的单位标签名称。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Name)
}
```
