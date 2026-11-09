# AxisTitle.Top

返回或设置一个 **Double** 值，它代表从对象的上边缘到工作表第一行顶部或图表上的图表区顶部的距离（以磅为单位）。



## 语法

express.**Top**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*此示例显示图表工作表 Chart1 中图表的分类轴标题到图表区顶部的距离。*/
function test() {
    let axistitle = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory).AxisTitle
    alert(`分类轴到图表区顶部的距离：${axistitle.Top} 磅`)
}
```


```JavaScript
/*此示例将工作表 Sheet1 中第一张图表的数值轴标题到图表区顶部的距离设置为图表区高度的五分之一。*/
function test() {
    let chart = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart
    let axistitle = chart.Axes(xlValue).AxisTitle
    axistitle.Top = chart.ChartArea.Height / 5
}
```
