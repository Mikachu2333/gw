# PlotArea.Name

返回一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **PlotArea** 对象的变量。

## 类型

string

## 示例


```JavaScript
/*本示例显示 Chart1 中的绘图区名称。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    alert(plotArea.Name)
}
```


```JavaScript
/*下例显示 Sheet1 上第一个图表的绘图区名称。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    alert(plotArea.Name)
}
```
