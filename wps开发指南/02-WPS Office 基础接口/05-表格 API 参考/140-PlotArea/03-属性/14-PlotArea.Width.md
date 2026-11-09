# PlotArea.Width

返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示 Chart1 中绘图区的宽度。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    alert(plotArea.Width)
}
```


```JavaScript
/*下例将 Sheet1 上第一个图表绘图区的宽度设置为400磅。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    plotArea.Width = 400
}
```
