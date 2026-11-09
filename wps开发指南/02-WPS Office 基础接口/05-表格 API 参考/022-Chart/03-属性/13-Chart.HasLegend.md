# Chart.HasLegend

如果图表有图例，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasLegend**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 的图例，然后将图例的字体颜色设为蓝色。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.HasLegend = true
    chart.Legend.Font.ColorIndex = 5
}
```


```JavaScript
/*本示例显示活动工作表第一个嵌入式图表是否有图例。*/
function test() {
    let chart = Application.ActiveSheet.ChartObjects(1).Chart
    alert(chart.HasLegend)
}
```
