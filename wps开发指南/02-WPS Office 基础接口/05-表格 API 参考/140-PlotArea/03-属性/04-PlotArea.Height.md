# PlotArea.Height

返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **PlotArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例显示 Chart1 中的绘图区的高度。*/
function test() {
    let plotArea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.PlotArea
    alert(plotArea.Height)
}
```


```JavaScript
/*下例将 Sheet1 上的第一个图表绘图区的高度设置为300磅。*/
function test() {
    let plotArea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.PlotArea
    plotArea.Height = 300
}
```
