# ChartGroup.Index

返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。



## 语法

express.**Index**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

number（int4 精度）

## 示例


```JavaScript
/*本示例显示工作表 Sheet1 第一个内嵌图表中第一个图表组的索引号。*/
function test() {
    let chartgroup = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    alert(chartgroup.Index)
}
```


```JavaScript
/*本示例判断如果图表工作表 Chart1 中第一个图表组的索引号为1，则开启该图表组中的垂直线。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    if (chartgroup.Index == 1) {
        chartgroup.HasDropLines = true
    }
}
```
