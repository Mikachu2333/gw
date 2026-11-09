# ChartArea 对象

代表图表的图表区。

## 说明


图表区包含绘图区在内的所有内容。但是， **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlotArea/obj)** 对象有自己的格式设置，所以对绘图区进行格式设置不会对图表区进行格式设置。

使用 **[ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartArea)** 属性可返回 **ChartArea** 对象。


## 示例


```JavaScript
/*本示例对活动演示文稿的第一张幻灯片中第一个图表的图表区禁用边框。*/
function test() {
    let chart = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart
    chart.ChartArea.Format.Line.Visible = false
}
```


```JavaScript
/*本示例设置第一个演示文稿的第一张幻灯片上第一个图表的图表区的宽度和高度。*/
function test() {
    let chartArea = Presentations.Item(1).Slides.Item(1).Shapes.Item(1).Chart.ChartArea
    chartArea.Width = 400
    chartArea.Height = 300
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Clear](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Clear) | 清除整个对象。 |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/ClearFormats) | 清除对象的格式设置。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Copy) | 将 **ChartArea** 对象复制到剪贴板。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Height) | 以磅为单位返回或设置对象的高度。可读/写 **Double** 类型。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Left) | 以磅为单位返回或设置对象左边缘至图表区左边缘的距离。可读/写 **Double** 类型。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Name) | 返回对象的名称。只读 **String** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Shadow) | 返回或设置一个值，该值确定对象是否具有阴影。可读/写 **Boolean** 类型。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Top) | 返回或设置一个以磅为单位的距离，它代表从对象的上边缘到图表区顶部（在图表上）的距离。可读/写 **Double** 类型。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/member/Width) | 以磅为单位返回或设置对象的宽度。可读/写 **Double** 类型。 |