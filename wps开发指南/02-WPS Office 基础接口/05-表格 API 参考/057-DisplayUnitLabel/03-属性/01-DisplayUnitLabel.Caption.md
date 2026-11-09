# DisplayUnitLabel.Caption

返回或设置一个 **String** 值，它代表显示单位标志文本。



## 语法

express.**Caption**

express   一个代表 **DisplayUnitLabel** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*以下示例将 Chart1 上数值轴上显示标签的标题设置为“Millions”。*/
function test() {
    let displayUnitLabel = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    displayUnitLabel.Caption = "Millions"
}
```


```JavaScript
/*下例显示 Sheet1 上的第一个图表数值轴上单位标签的标题。*/
function test() {
    let displayUnitLabel = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue).DisplayUnitLabel
    alert(displayUnitLabel.Caption)
}
```
