# Chart.HasTitle

如果坐标轴或图表有可见标题，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**HasTitle**

express   一个代表 **Chart** 对象的变量。

## 类型

boolean

## 说明


图表标题由 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/obj)** 对象代表。



## 示例


```JavaScript
/*本示例显示图表工作表 Chart1 的标题，并将标题的字体大小设为20。*/
function test() {
    let chart = Application.Charts.Item("Chart1")
    chart.HasTitle = true
    chart.ChartTitle.Font.Size = 20
}
```


```JavaScript
/*本示例设置第一张工作表第一个嵌入式图表的标题为不可见。*/
function test() {
    let chart = Application.Sheets.Item(1).ChartObjects(1).Chart
    chart.HasTitle = false
}
```
