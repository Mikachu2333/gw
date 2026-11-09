# Axis.ScaleType

返回或设置数值轴的刻度类型。可读/写 **[XlScaleType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlScaleType)** 属性。



## 语法

express.**ScaleType**

express   一个代表 **Axis** 对象的变量。

## 类型

XlScaleType

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片中第一个图表的数值轴设置为使用对数刻度。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.Axes(xlValue).ScaleType = xlScaleLogarithmic
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片中第二个图表的数值轴的刻度类型是否为线性刻度。*/
function test() {
    let axis = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart.Axes(xlValue)
    alert(axis.ScaleType == xlScaleLinear)
}
```
