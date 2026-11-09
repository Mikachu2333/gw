# LegendEntry.Left

返回一个 **Double** 值，它代表从对象左边缘到图表区左边缘的距离（以磅为单位）。



## 语法

express.**Left**

express   一个代表 **LegendEntry** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*下例显示 Sheet1 中的第一个图表的第三个图例项左边缘到图表区左边缘的距离。*/
function test() {
    let legend = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    alert(legend.LegendEntries(3).Left)
}
```


```JavaScript
/*下例显示 Chart1 上第二个图例项左边缘到图表区左边缘的距离。*/
function test() {
    let legend = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend
    alert(legend.LegendEntries(2).Left)
}
```
