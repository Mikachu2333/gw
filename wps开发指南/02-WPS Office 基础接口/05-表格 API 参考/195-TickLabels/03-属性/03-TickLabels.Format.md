# TickLabels.Format

返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象。只读。



## 语法

express.**Format**

express   一个代表 **TickLabels** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*下例将 Sheet1 上的第一个图表分类轴刻度线标签的前景色设为蓝色。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.Format.Fill.ForeColor.RGB = RGB(0, 0, 255)
}
```


```JavaScript
/*以下示例将 Chart1 上数值轴刻度线标签的发光半径设置为2磅。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Format.Glow.Radius = 2
}
```
