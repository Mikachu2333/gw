# Chart.DisplayBlanksAs

返回或设置在图表中绘制空白单元格的方式。可以是 **[XlDisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayBlanksAs)** 常量之一。可读/写 **Long** 类型。



## 语法

express.**DisplayBlanksAs**

express   一个代表 **Chart** 对象的变量。

## 类型

XlDisplayBlanksAs

## 示例


```JavaScript
/*本示例设置活动演示文稿的第一张幻灯片上第一张图表不绘制空白单元格。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.DisplayBlanksAs = xlNotPlotted
    }
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第二张图表中空白单元格的绘制方式是否为xlInterpolated。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    alert(chart.DisplayBlanksAs == xlInterpolated)
}
```
