# ChartTitle.Top

返回或设置一个 **Double** 值，它代表从对象的上边缘到图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **ChartTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例将图表工作表 Chart1 中图表标题设置为可见，并显示标题到图表顶部的距离。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.HasTitle = true
    alert(`标题到顶部的距离为 ${chart.ChartTitle.Top} 磅`)
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一张图表的图表标题到图表顶部的距离是否为 6 磅。*/
function test() {
    let charttitle = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartTitle
    alert(charttitle.Top == 6)
}
```
