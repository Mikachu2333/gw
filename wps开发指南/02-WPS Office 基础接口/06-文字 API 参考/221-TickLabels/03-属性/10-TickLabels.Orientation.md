# TickLabels.Orientation

返回或设置文本方向。可读/写 **Long** 类型。



## 语法

express.**Orientation**

express   一个代表 **TickLabels** 对象的变量。

## 类型

XlTickLabelOrientation

## 说明


该属性的值可以是介于 –90 至 90 度之间的整数或 **[XlTickLabelOrientation](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTickLabelOrientation)** 常量之一。



## 示例


```JavaScript
/*本示例显示活动文档上第一个内嵌图表的数值轴刻度线标签的文本方向是否为xlTickLabelOrientationAutomatic。*/
function test() {
    let tickLabels = ActiveDocument.InlineShapes.Item(1).Chart.Axes(xlValue).TickLabels
    alert(tickLabels.Orientation == xlTickLabelOrientationAutomatic)
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中图表的类别轴刻度线标签的文本方向。*/
function test() {
    let tickLabels = Documents.Item(1).Shapes.Item(1).Chart.Axes(xlCategory).TickLabels
    tickLabels.Orientation = xlTickLabelOrientationVertical
}
```
