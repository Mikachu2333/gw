# TickLabels.Orientation

返回或设置一个 **Long** 值，它代表文本方向。



## 语法

express.**Orientation**

express   一个代表 **TickLabels** 对象的变量。

## 类型

XlTickLabelOrientation

## 说明


此属性值可设为 -90 到 90 度之间的整数值或 **[XlTickLabelOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickLabelOrientation)** 常量之一。



## 示例


```JavaScript
/*以下示例将 Chart1 上数值轴的刻度线标签的文本方向设置为向下排列。*/
function test() {
    let tickLabels = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlValue).TickLabels
    tickLabels.Orientation = xlTickLabelOrientationDownward
}
```


```JavaScript
/*下例显示 Sheet1 上的第一个图表分类轴刻度线标签的文本方向是否由 ET 设置。*/
function test() {
    let tickLabels = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlCategory).TickLabels
    alert(tickLabels.Orientation == xlTickLabelOrientationAutomatic)
}
```
