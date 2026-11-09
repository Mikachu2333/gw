# ChartArea 对象

代表图表的图表区。

## 说明


图表区包含绘图区在内的一切内容。然而 **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/obj)** 对象可以具有自己的格式，因此设置绘图区的格式时不会设置图表区的格式。

使用 **[ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ChartArea)** 属性可返回 **ChartArea** 对象。


## 示例


```JavaScript
/*本示例对活动文档中第一个图表的图表区禁用边框。*/
function test() {
    let chart = Application.ActiveDocument.InlineShapes.Item(1).Chart
    chart.ChartArea.Format.Line.Visible = false
}
```


```JavaScript
/*本示例设置第一个文档上第一个形状中的图表的图表区的宽度和高度。*/
function test() {
    let chartArea = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Width = 400
    chartArea.Height = 300
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Clear) | 清除整个对象。 |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/ClearFormats) | 清除对象的格式设置。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartFormat/obj)** 。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Height) | 以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Left) | 以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Shadow) | 返回或设置一个值，该值确定对象是否具有阴影。可读/写 **Boolean** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Top) | 返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/member/Width) | 以磅为单位返回或设置对象的宽度。可读/写 **Double** 类型。 |