# Chart.Legend

返回一个 **[Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/obj)** 对象，该对象表示指定图表的图例。只读。



## 语法

express.**Legend**

express   一个代表 **Chart** 对象的变量。

## 类型

Legend

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
/*本示例判断如果第一张工作表第一个嵌入式图表的图例可见，则将图例字体大小设为12。*/
function test() {
    let chart = Application.Sheets.Item(1).ChartObjects(1).Chart
    if (chart.HasLegend) {
        chart.Legend.Font.Size = 12
    }
}
```
