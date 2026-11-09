# TickLabels.Font

返回一个 **[Font](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Font/obj)** 对象，它代表指定对象的字体。



## 语法

express.**Font**

express   一个代表 **TickLabels** 对象的变量。

## 类型

Font

## 示例


```JavaScript
/*下例将 Sheet1 上的第一个图表分类轴刻度线标签的字体设为加粗。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.Font.Bold = true
}
```


```JavaScript
/*以下示例将 Chart1 上数值轴刻度线标签的字体大小设为 13 磅。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Font.Size = 13
}
```
