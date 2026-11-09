# AxisTitle.Top

返回或设置一个以磅为单位的距离，它代表从对象的上边缘到第一行顶部（在工作表上）或图表区顶部（在图表上）的距离。可读/写 **Double** 类型。



## 语法

express.**Top**

express   一个代表 **AxisTitle** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*本示例将活动文档中第一张图表的数值轴标题到图表区顶部的距离设置为图表区高度的五分之一。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    let axisTitle = chart.Axes(xlValue).AxisTitle
    axisTitle.Select()
    axisTitle.Top = chart.ChartArea.Height / 5
}
```


```JavaScript
/*本示例显示活动文档中第一张图表的分类轴标题到图表区顶部的距离。*/
function test() {
    let axisTitle = Application.ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlCategory).AxisTitle
    alert(`分类轴到图表区顶部的距离：${axisTitle.Top}磅`)
}
```
