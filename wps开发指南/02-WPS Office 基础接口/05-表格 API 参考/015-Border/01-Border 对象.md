# Border 对象

代表对象的边框。

## 说明


大多数具有边框的对象（除 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 和 **[Style](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj)** 对象外）都将边框作为单一实体处理，而不管边框有几个边。整个边框必须作为一个整体单位返回。例如，使用 **[TrendLine](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlTrendlineType)** 对象的 **Border** 属性可返回此类对象的 **Border** 对象。


## 示例


```JavaScript
/*本示例更改活动图表中趋势线的类型和线型。*/
function test() {
    let trendline = Application.ActiveChart.SeriesCollection(1).Trendlines(1)
    trendline.Type = xlLinear
    trendline.Border.LineStyle = xlDash
}
```
[ **Range** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 和 [ **Style** ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/obj) 对象具有四个分立的边框：左边框、右边框、顶部边框和底部边框，这四个边框既可单独返回，也可作为一个组同时返回。使用 **Borders** 属性可返回 **Borders** 集合，该集合包含所有四个边框，并将这些边框视为一个单位。



```JavaScript
/*本示例向第一张工作表上的单元格 A1 右边缘的边框添加双边框。*/
function test() {
    Application.Worksheets.Item(1).Range("A1").Borders.Item(xlEdgeRight).LineStyle = xlDouble
}
```
使用 **Borders** (*index*)（其中 *index* 指定边框）可返回单个 **Border** 对象。



```JavaScript
/*本示例设置单元格区域 A1:G1 的底部边框的颜色。*/
function test() {
    Range("A1:G1").Borders.Item(xlEdgeBottom).Color = RGB(255, 0, 0)
}
```


```JavaScript
/*本示例将边框的 Weight 属性设置为 xlThick 会诱使 LineStyle 属性变为 xlSolid，尽管之前已将其设置为 xlDashDotDot 。*/
function test() {
    let border = Selection.Borders.Item(xlDiagonalDown)
    border.Color = RGB(255, 0, 0)
    alert("border.LineStyle = " + border.LineStyle)  //border.style = 1
    alert("Set border.style = xlDashDotDot")  //Set border.style = DashDotDot
    border.LineStyle  = xlDashDotDot
    alert("border.LineStyle = " + border.LineStyle)  //border.style = 5
    alert("Set border.weight = xlThick")  //Set border.weight = Thick
    border.weight = xlThick
    alert("border.LineStyle = " + border.LineStyle)  //border.style = 1
}
```
*Index* 可为以下 [XlBordersIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlBordersIndex) 常量之一： **xlDiagonalDown** 、 **xlDiagonalUp** 、 **xlEdgeBottom** 、 **xlEdgeLeft** 、 **xlEdgeRight** 、 **xlEdgeTop** 、 **xlInsideHorizontal** 或 **xlInsideVertical** 。


{#objmember}
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Application) | 如果不使用对象识别符，则该属性返回一个 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [Color](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Color) | 返回或设置对象的主要颜色，如注释部分中的表格所示。 **Variant** 型，可读写。 |
| [ColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/ColorIndex) | 返回或设置一个 **Variant** 值，它代表边框的颜色。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [LineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/LineStyle) | 返回或设置边框的线型。 **[XlLineStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlLineStyle)** 、 **xlGray25** 、 **xlGray50** 、 **xlGray75** 或 **xlAutomatic** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Parent) | 返回指定对象的父对象。只读。 |
| [ThemeColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/ThemeColor) | 返回或设置已应用的配色方案中的主题颜色，该配色方案与指定对象相关联。可读/写 **Variant** 类型。 |
| [TintAndShade](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/TintAndShade) | 返回或设置一个 **Single** ，使颜色变深或变浅。 |
| [Weight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Border/member/Weight) | 返回或设置一个 **[XlBorderWeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlBorderWeight)** 值，它代表边框的粗细。 |