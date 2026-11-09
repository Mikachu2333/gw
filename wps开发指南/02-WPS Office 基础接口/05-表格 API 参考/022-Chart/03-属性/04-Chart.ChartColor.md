# Chart.ChartColor

返回或设置一个 Integer 类型的值，该值代表图表的配色方案。 读/写。



## 语法

express.**ChartColor**

express   一个代表 **Chart** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例设置工作表 Sheet1 中第一个内嵌图表的配色方案。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.ChartColor = 1
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 的配色方案。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    alert(chart.ChartColor)
}
```
