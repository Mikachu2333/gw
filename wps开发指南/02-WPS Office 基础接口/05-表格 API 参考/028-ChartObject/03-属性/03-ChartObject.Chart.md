# ChartObject.Chart

返回一个 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，该对象代表对象中包含的图表。只读。



## 语法

express.**Chart**

express   一个代表 **ChartObject** 对象的变量。

## 类型

Chart

## 示例


```JavaScript
/*本示例为工作表 Sheet1 上嵌入的第一个图表添加标题。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.HasTitle = true
    chart.ChartTitle.Text = "1995 Rainfall Totals by Month"
}
```


```JavaScript
/*本示例显示图表工作表 Chart1 的图表样式。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    alert(chart.ChartStyle)
}
```
