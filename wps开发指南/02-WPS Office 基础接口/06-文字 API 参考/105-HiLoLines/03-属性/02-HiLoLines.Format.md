# HiLoLines.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **HiLoLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动文档上第一个图表的第一个图表组的高低点连线的线条粗细设置为 3 磅。*/
function test() {
    let chartgroup = ActiveDocument.InlineShapes(1).Chart.ChartGroups(1)
    let chartformat = chartgroup.HiLoLines.Format
    chartformat.Line.Weight = 3
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第一个图表组的高低点连线的填充渐变样式是否为混合的。*/
function test() {
    let chartgroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    let chartformat = chartgroup.HiLoLines.Format
    alert(chartformat.Fill.GradientStyle == msoGradientMixed)
}
```
