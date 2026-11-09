# ChartFormat.Fill

返回一个包含图表元素填充格式属性的父图表元素的 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/FillFormat/obj)** 对象。只读。



## 语法

express.**Fill**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*此示例将活动文档上第一张内嵌图表的图表区的前景色设置为红色。*/
function test() {
    let chartFormat = ActiveDocument.InlineShapes(1).Chart.ChartArea.Format
    chartFormat.Fill.ForeColor.RGB = RGB(255, 0, 0)
}
```


```JavaScript
/*此示例显示活动文档上第一张内嵌图表的图表区的渐变填充样式是否为混合的。*/
function test() {
    let chartFormat = ActiveDocument.InlineShapes(1).Chart.ChartArea.Format
    alert(chartFormat.Fill.GradientStyle == msoGradientMixed)
}
```
