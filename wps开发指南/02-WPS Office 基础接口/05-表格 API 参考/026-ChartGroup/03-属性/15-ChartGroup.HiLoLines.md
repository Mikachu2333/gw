# ChartGroup.HiLoLines

返回 **[HiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/obj)** 对象，该对象表示折线图上一个数据系列高低点连线。仅应用于折线图。只读。



## 语法

express.**HiLoLines**

express   一个代表 **ChartGroup** 对象的变量。

## 类型

HiLoLines

## 示例


```JavaScript
/*本示例显示 Chart1 中第一个图表组的高低线，并对其线型、粗细和颜色进行设置。本示例应在具有三组类似股市行情（盘高－盘低－收盘）数据系列的二维折线图上运行。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasHiLoLines = true
    let border = chartgroup.HiLoLines.Border
    border.LineStyle = xlContinuous
    border.Weight = xlMedium
    border.ColorIndex = 3
}
```


```JavaScript
/*本示例判断如果工作表 Sheet1 第一个内嵌图表中第一个图表组未显示高低线，则开启该图表组的高低线，并将其颜色设置为黄色。*/
function test() {
    let chartgroup = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.ChartGroups(1)
    if (chartgroup.HasHiLoLines == false) {
        chartgroup.HasHiLoLines = true
        chartgroup.HiLoLines.Border.Color = RGB(255, 255, 0)
    }
}
```
