# ChartArea.Height

返回或设置一个 **Double** 值，它代表对象的高度（以磅为单位）。



## 语法

express.**Height**

express   一个代表 **ChartArea** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例设置图表工作表 Chart1 的高度为 650 磅。*/
function test() {
    let chartarea = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea
    chartarea.Height = 650
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一个内嵌图表的高度。*/
function test() {
    let chartarea = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea
    alert(chartarea.Height)
}
```
