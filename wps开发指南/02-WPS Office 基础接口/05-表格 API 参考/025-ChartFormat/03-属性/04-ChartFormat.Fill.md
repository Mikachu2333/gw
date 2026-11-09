# ChartFormat.Fill

返回一个包含图表元素填充格式属性的父图表元素的 **[FillFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/FillFormat/obj)** 对象。只读。



## 语法

express.**Fill**

express   一个代表 **ChartFormat** 对象的变量。

## 类型

FillFormat

## 示例


```JavaScript
/*此示例设置图表工作表 Chart1 图表区的颜色为黄色。*/
function test() {
    let chartformat = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartArea.Format
    chartformat.Fill.ForeColor.RGB = RGB(255, 255, 0)
}
```


```JavaScript
/*此示例显示工作表 Sheet1 中第一个内嵌图表区的填充渐变样式是否为混合的。*/
function test() {
    let chartformat = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.ChartArea.Format
    alert(chartformat.Fill.GradientStyle == msoGradientMixed)
}
```
