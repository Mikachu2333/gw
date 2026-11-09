# Point 对象

代表图表系列中的单个数据点。

## 说明


 **Point** 对象是 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Points/obj)** 集合的成员。 **Points** 集合包含一个系列中所有的数据点。

使用 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Points)** (index)（其中 index 是数据点索引号）可返回一个 **Point** 对象。系列中的数据点从左至右编号。`Points(1)` 是最左边的数据点，而 `Points(Points.Count)` 是最右边的数据点。


## 示例


```JavaScript
/*下例为工作表一上嵌入式图表一中系列一中的第三个数据点设置标志样式。指定的系列必须是 2D 线、散点或雷达系列。*/
function test() {
    Worksheets.Item(1).ChartObjects(1).Chart.SeriesCollection(1).Points(3).MarkerStyle = xlDiamond
}
```


```JavaScript
/*本示例将 Chart1 中第一个数据系列的第4个数据点设置成有阴影。*/
function test() {
    let series = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(1)
    series.Points(4).Shadow = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/ApplyDataLabels) | 对数据点应用数据标签。 |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/ClearFormats) | 清除对象的格式设置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Delete) | 删除数据点所属的系列。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Select) | 选择对象。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ApplyPictToEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/ApplyPictToEnd) | 如果图片应用于系列中数据点或所有数据点之后，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ApplyPictToFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/ApplyPictToFront) | 如果图片应用于系列中数据点或所有数据点之前，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ApplyPictToSides](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/ApplyPictToSides) | 如果将图片应用于系列中某个数据点或所有数据点的旁边，则为 **True** 。 **Boolean** 类型，可读写。 |
| [DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/DataLabel) | 返回一个 **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataLabel/obj)** 对象，它代表与数据点相关的数据标签。只读。 |
| [Explosion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Explosion) | 返回或设置饼图或圆环图的扇区的分离程度值。如果没有分离，则返回 0（零），即扇区的中心与饼图中心重合。 **Long** 型，可读写。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Format) | 返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartFormat/obj)** 对象。只读。 |
| [Has3DEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Has3DEffect) | 如果数据点具有三维外观，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasDataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/HasDataLabel) | 如果数据点具有数据标签，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Height) | 返回对象的高度（以磅为单位）。只读。 |
| [InvertIfNegative](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/InvertIfNegative) | 如果指定项与一个负数相对应时 Kingsoft WPS表格 就将其反色，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Left) | 返回一个值，该值代表从对象左边缘到图表区左边缘的距离（以磅为单位）。只读。 |
| [MarkerBackgroundColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/MarkerBackgroundColor) | 将数据标志的背景色设置为 RGB 值或返回对应的颜色索引值。仅适用于折线图、散点图和雷达图。 **Long** 型，可读写。 |
| [MarkerBackgroundColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/MarkerBackgroundColorIndex) | 返回或设置数据标志的背景色，表示为当前调色板中的索引或下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量之一： **xlColorIndexAutomatic** 或 **xlColorIndexNone** 。仅适用于折线图、散点图和雷达图。 **Long** 类型，可读写。 |
| [MarkerForegroundColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/MarkerForegroundColor) | 将数据标志的背景色设置为 RGB 值或返回对应的颜色索引值。仅适用于折线图、散点图和雷达图。 **Long** 型，可读写。 |
| [MarkerForegroundColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/MarkerForegroundColorIndex) | 返回或设置数据标志的前景色，表示为当前调色板中的索引或下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量之一： **xlColorIndexAutomatic** 或 **xlColorIndexNone** 。仅适用于折线图、散点图和雷达图。 **Long** 类型，可读写。 |
| [MarkerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/MarkerSize) | 返回或设置数据标志的大小，以磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位。可以是 2 到 72 之间的一个值。 **Long** 型，可读写。 |
| [MarkerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/MarkerStyle) | 返回或设置折线图、散点图或雷达图中数据点或数据系列的数据标志样式。 **[XlMarkerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlMarkerStyle)** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Name) | 返回对象名称。只读。 |
| [PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/PictureType) | 返回或设置一个 **[XlChartPictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartPictureType)** 值，它代表在柱形或条形图上图片的显示方式。 |
| [PictureUnit2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/PictureUnit2) | 如果 **[PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/PictureType)** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位。否则忽略此属性。可读/写 **Double** 类型。 |
| [SecondaryPlot](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/SecondaryPlot) | 如果数据点位于复合饼图或复合条饼图中的第二个饼图或条形图上，则该值为 **True** 。仅适用于复合饼图或复合条饼图中的数据点。 **Boolean** 类型，可读写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Top) | 返回一个值，该值代表从对象上边缘到图表区上边缘的距离（以磅为单位）。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/member/Width) | 返回对象的宽度（以磅为单位）。只读。 |