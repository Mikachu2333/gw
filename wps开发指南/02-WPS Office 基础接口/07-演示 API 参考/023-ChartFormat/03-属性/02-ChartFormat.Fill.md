# ChartFormat.Fill

返回一个包含图表元素填充格式属性的父图表元素的 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/FillFormat/obj)** 对象。只读。



## 语法

express.**Fill**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*此示例将活动演示文稿的第一张幻灯片上第一张图表的图表区的前景色设置为红色。*/
function test() {
    let chartFormat = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    chartFormat.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*此示例显示第一个演示文稿的第一张幻灯片上第一张图表的图表区的渐变填充样式是否为混合的。*/
function test() {
    let chartFormat = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea.Format
    alert(chartFormat.Fill.GradientStyle == msoGradientMixed)
}
```
