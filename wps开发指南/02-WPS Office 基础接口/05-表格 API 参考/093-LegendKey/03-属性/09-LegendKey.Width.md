# LegendKey.Width

返回一个 **Double** 值，它代表对象的宽度（以磅为单位）。



## 语法

express.**Width**

express   一个代表 **LegendKey** 对象的变量。

## 类型

number（double 精度）

## 示例


```JavaScript
/*下例显示 Sheet1 中的第一个图表的第二个图例项的图例标示的宽度。*/
function test() {
    let legend = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Legend
    alert(legend.LegendEntries(2).LegendKey.Width)
}
```


```JavaScript
/*本示例显示 Chart1 上第一个图例项的图例标示的宽度。*/
function test() {
    let legend = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Legend
    alert(legend.LegendEntries(1).LegendKey.Width)
}
```
