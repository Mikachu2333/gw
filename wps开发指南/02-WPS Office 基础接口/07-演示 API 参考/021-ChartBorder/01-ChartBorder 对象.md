# ChartBorder 对象

代表对象的边框。

## 说明


大多数具有边框的对象都将边框作为单一实体处理，而不考虑其中包含多少幻灯片。整个边框必须作为一个整体单位返回。若要返回 **Border** 对象，请对带边框的特定对象使用 **Border** 属性（例如， **[TrendLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Trendline/obj)** 对象的 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Trendline/member/Border)** 属性）。


## 示例


```JavaScript
/*本示例更改活动演示文稿的第一张幻灯片上第一个图表的第一个数据系列中第一个趋势线的类型和线型。*/
function test() {
    let trendline = ActivePresentation.Slides.Item(1).Shapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.Type = xlLinear
    trendline.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例显示第一个演示文稿的第一张幻灯片上第一个图表的第二个数据系列的第一个趋势线的粗细是否为 xlHairline。*/
function test() {
    let shape = Presentations.Item(1).Slides.Item(1).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).Trendlines(1).Border.Weight == xlHairline)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/member/LineStyle) | 返回或设置边框的线型。可读/写 **[XlLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/enum/XlLineStyle)** 、 **xlGray25** 、 **xlGray50** 、 **xlGray75** 或 **xlAutomatic** 。 |
| [Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartBorder/member/Weight) | 返回或设置边框的粗细。可读/写 **[XlBorderWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlBorderWeight)** 类型。 |