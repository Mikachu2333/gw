# Axis.TickLabelPosition

说明指定坐标轴上刻度线标志的位置。 **[XlTickLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickLabelPosition)** 类型，可读写。



## 语法

express.**TickLabelPosition**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTickLabelPosition

## 说明


| **XlTickLabelPosition** 可为以下 **XlTickLabelPosition** 常量之一。 |
| ---------------------------------------------------------- |
| **xlTickLabelPositionLow**                                 |
| **xlTickLabelPositionNone**                                |
| **xlTickLabelPositionHigh**                                |
| **xlTickLabelPositionNextToAxis**                          |



## 示例


```JavaScript
/*本示例将图表工作表 Chart1 中分类轴的刻度线标签设置为高位（在图表之上）。*/
function test() {
    let axis = Application.Charts.Item("Chart1").ChartObjects(1).Chart.Axes(xlCategory)
    axis.TickLabelPosition = xlTickLabelPositionHigh
}
```


```JavaScript
/*本示例关闭工作表 Sheet1 中第一张图表的数值轴的刻度线。*/
function test() {
    let axis = Application.Sheets.Item("Sheet1").ChartObjects(1).Chart.Axes(xlValue)
    axis.TickLabelPosition = xlTickLabelPositionNone
}
```
