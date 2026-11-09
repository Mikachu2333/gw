# ChartBorder 对象

代表对象的边框。

## 说明


大多数具有边框的对象都将边框作为单一实体处理，而不管边框有几个边。整个边框必须作为一个整体单位返回。要返回 **Border** 对象，请使用带边框的特定对象的 **Border** 属性（例如 **[TrendLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/obj)** 对象的 **[Border](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Trendline/member/Border)** 属性）。


## 示例


```JavaScript
/*本示例更改活动文档上第一个图表的第一个数据系列中第一个趋势线的类型和线型。*/
function test() {
    let trendline = ActiveDocument.InlineShapes.Item(1).Chart.SeriesCollection(1).Trendlines(1)
    trendline.Type = xlLinear
    trendline.Border.LineStyle = xlDash
}
```


```JavaScript
/*本示例显示第一个文档上第一个形状中图表的第二个数据系列的第一个趋势线的粗细是否为 xlHairline。*/
function test() {
    let shape = Documents.Item(1).Shapes.Item(1)
    alert(shape.Chart.SeriesCollection(2).Trendlines(1).Border.Weight == xlHairline)
}
```

{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/member/LineStyle) | 返回或设置边框的线型。可读/写 **[XlLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/enum/XlLineStyle)** 、 **xlGray25** 、 **xlGray50** 、 **xlGray75** 或 **xlAutomatic** 。 |
| [Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartBorder/member/Weight) | 返回或设置边框的粗细。可读/写 **[XlBorderWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlBorderWeight)** 。 |