# Axis.ScaleType

返回或设置数值轴的刻度类型。可读/写 **[XlScaleType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlScaleType)** 。



## 语法

express.**ScaleType**

express   一个代表 **Axis** 对象的变量。

## 类型

XlScaleType

## 示例


```JavaScript
/*本示例将活动文档中第一个图表的数值轴设置为使用对数刻度。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.Axes(xlValue).ScaleType = xlScaleLogarithmic
    }
}
```


```JavaScript
/*本示例显示活动文档中第一个图表的数值轴的刻度类型是否为线性刻度。*/
function test() {
    let inlineShape = Application.ActiveDocument.InlineShapes(1)
    alert(inlineShape.Chart.Axes(xlValue).ScaleType == xlScaleLinear)
}
```
