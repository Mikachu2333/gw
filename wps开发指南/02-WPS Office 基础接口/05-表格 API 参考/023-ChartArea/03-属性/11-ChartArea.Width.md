# ChartArea.Width

返回或设置一个 **Double** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **ChartArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示工作表 Sheet1 中第一个内嵌图表图表区的宽度。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    alert(chartarea.Width)
}
```


```JavaScript
/*此示例设置图表工作表 Chart1 图表区的宽度为 600 磅。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    chartarea.Width = 600
}
```
