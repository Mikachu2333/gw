# HiLoLines.Format

返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。



## 语法

express.**Format**

express   一个代表 **HiLoLines** 对象的变量。

## 类型

ChartFormat

## 示例


```JavaScript
/*本示例将活动演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线的线条粗细设置为 3 磅。*/
function test() {
    let chartgroup = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    let chartformat = chartgroup.HiLoLines.Format
    chartformat.Line.Weight = 3
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第一个图表组的高低点连线的阴影的透明度。*/
function test() {
    let chartgroup = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    let chartformat = chartgroup.HiLoLines.Format
    alert(chartformat.Shadow.Transparency)
}
```
