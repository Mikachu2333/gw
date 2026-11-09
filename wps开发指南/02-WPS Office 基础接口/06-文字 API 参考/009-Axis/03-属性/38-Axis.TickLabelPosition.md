# Axis.TickLabelPosition

说明指定坐标轴上刻度线标志的位置。可读/写 **[XlTickLabelPosition](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickLabelPosition)** 。



## 语法

express.**TickLabelPosition**

express   一个代表 **Axis** 对象的变量。

## 类型

XlTickLabelPosition

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的分类轴上的刻度线标签设置为高位（在图表之上）。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        let axis = inlineShape.Chart.Axes(xlCategory)
        axis.TickLabelPosition = xlTickLabelPositionHigh
    }
}
```


```JavaScript
/*本示例显示第一个文档中第一个图表的数值轴上的刻度线标签位置是否为图表的底部或左侧。*/
function test() {
    let axis = Documents.Item(1).InlineShapes(1).Chart.Axes(xlValue)
    alert(axis.TickLabelPosition == xlTickLabelPositionLow)
}
```
