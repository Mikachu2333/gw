# Series 对象

代表图表上的系列。

## 说明


 **Series** 对象是 **SeriesCollection** 集合的成员。

使用 **SeriesCollection** (*index*)（其中 *index*是系列索引号或名称）可返回一个 **Series** 对象。下例设置 Sheet1 上嵌入式图表一中第一个系列的内部颜色。

系列索引号指明了系列添加到图表中的顺序。`SeriesCollection(1)` 是第一个添加到图表中的系列，而 `SeriesCollection(SeriesCollection.Count)`是最后一个添加到图表中的系列。


## 示例


```JavaScript
/*下面的示例设置工作表 Sheet1 上嵌入的第一个图表中第一个数据系列的内部颜色。*/
function test() {
    Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart.SeriesCollection(1).Interior.Color = RGB(255, 0, 0)
}
```


```JavaScript
/*此示例显示图表工作表 Chart1 上的第二个数据系列的名称。*/
function test() {
    let series2 = Application.Charts.Item("Chart1").ChartObjects(1).Chart.SeriesCollection(2)
    alert(series2.Name)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/ApplyDataLabels) | 向系列应用数据标签。 |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/ClearFormats) | 清除对象的格式设置。 |
| [DataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/DataLabels) | 返回代表数据系列中单个数据标签（ **DataLabel** 对象）或所有数据标签的集合（ **DataLabels** 集合）的对象。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Delete) | 删除对象。 |
| [ErrorBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/ErrorBar) | 将误差线应用于系列。 **Variant** 类型。 |
| [Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Points) | 返回一个对象，该对象表示数据系列中单个数据点（ **Point** 对象）或所有数据点的集合（ **Points** 集合）。只读 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Select) | 选择对象。 |
| [Trendlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Trendlines) | 返回一个对象，该对象表示单个趋势线（ **Trendline** 对象）或所有趋势线的集合（ **Trendlines** 集合）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Application) | 如果不使用对象识别符，则该属性返回一个 **Application** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [ApplyPictToEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/ApplyPictToEnd) | 如果图片应用于系列中数据点或所有数据点之后，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ApplyPictToFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/ApplyPictToFront) | 如果图片应用于系列中数据点或所有数据点之前，则为 **True** 。 **Boolean** 类型，可读写。 |
| [ApplyPictToSides](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/ApplyPictToSides) | 如果将图片应用于系列中某个数据点或所有数据点的旁边，则为 **True** 。 **Boolean** 类型，可读写。 |
| [AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/AxisGroup) | 返回或设置指定系列的组。可读/写。 |
| [BubbleSizes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/BubbleSizes) | 返回或设置一个字符串，该字符串引用包含气泡图 x 值、y 值和大小数据的工作表单元格。在返回单元格引用时，它将返回以 A1 样式注释描述单元格的字符串。要为气泡图设置大小数据，必须使用 R1 样式注释。仅适用于气泡图。 **Variant** 类型，可读写。 |
| [ChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/ChartType) | 返回或设置图表类型。 **XlChartType** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [ErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/ErrorBars) | 返回一个 **ErrorBars** 对象，该对象表示数据系列中的误差线。只读。 |
| [Explosion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Explosion) | 返回或设置饼图或圆环图的扇区的分离程度值。如果没有分离，则返回 0（零），即扇区的中心与饼图中心重合。 **Long** 型，可读写。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Format) | 返回 **ChartFormat** 对象。只读。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Formula) | 返回或设置一个 **String** 值，它代表 A1 样式表示法和宏语言中的对象的公式。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/FormulaLocal) | 返回或设置指定对象的公式，使用用户语言 A1 格式引用。 **String** 型，可读写。 |
| [FormulaR1C1](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/FormulaR1C1) | 返回或设置指定对象的公式，使用宏语言 R1C1 格式符号表示。 **String** 型，可读写。 |
| [FormulaR1C1Local](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/FormulaR1C1Local) | 返回或设置指定对象的公式，使用用户语言 R1C1 格式符号表示。 **String** 型，可读写。 |
| [Has3DEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Has3DEffect) | 如果数据系列有三维外观，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/HasDataLabels) | 如果数据系列具有数据标签，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HasErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/HasErrorBars) | 如果数据系列有误差线，该值为 **True** 。该属性对三维图表无效。 **Boolean** 类型，可读写。 |
| [HasLeaderLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/HasLeaderLines) | 如果数据系列有引导线，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [InvertColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/InvertColor) | 返回或设置系列中负数据点的填充色。可读/写 |
| [InvertIfNegative](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/InvertIfNegative) | 如果指定项与一个负数相对应时 ET 就将其反色，则为 **True** 。 **Boolean** 类型，可读写。 |
| [IsFiltered](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/IsFiltered) | 此设置控制是否已从图表中筛选出序列。 默认值为 **False** 。 读/写 **Boolean** 。 |
| [LeaderLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/LeaderLines) | 返回一个 **LeaderLines** 对象，该对象表示系列的引导线。只读。 |
| [MarkerBackgroundColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/MarkerBackgroundColor) | 将数据标志的背景色设置为 RGB 值或返回对应的颜色索引值。仅适用于折线图、散点图和雷达图。 **Long** 型，可读写。 |
| [MarkerBackgroundColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/MarkerBackgroundColorIndex) | 返回或设置数据标志的背景色，表示为当前调色板中的索引或下列 **XlColorIndex** 常量之一： **xlColorIndexAutomatic** 或 **xlColorIndexNone** 。仅适用于折线图、散点图和雷达图。 **Long** 类型，可读写。 |
| [MarkerForegroundColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/MarkerForegroundColor) | 将数据标志的背景色设置为 RGB 值或返回对应的颜色索引值。仅适用于折线图、散点图和雷达图。 **Long** 型，可读写。 |
| [MarkerForegroundColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/MarkerForegroundColorIndex) | 返回或设置数据标志的前景色，表示为当前调色板中的索引或下列 **XlColorIndex** 常量之一： **xlColorIndexAutomatic** 或 **xlColorIndexNone** 。仅适用于折线图、散点图和雷达图。 **Long** 类型，可读写。 |
| [MarkerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/MarkerSize) | 返回或设置数据标志的大小，以磅（磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位。可以是 2 到 72 之间的一个值。 **Long** 型，可读写。 |
| [MarkerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/MarkerStyle) | 返回或设置折线图、散点图或雷达图中数据点或数据系列的数据标志样式。 **XlMarkerStyle** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Parent) | 返回指定对象的父对象。只读。 |
| [PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/PictureType) | 返回或设置一个 **XlChartPictureType** 值，它代表在柱形或条形图上图片的显示方式。 |
| [PictureUnit2](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/PictureUnit2) | 如果 **PictureType** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位。否则忽略此属性。可读/写 **Double** 类型。 |
| [PlotOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/PlotOrder) | 返回或设置图表组中选定数据系列的绘制顺序。 **Long** 类型，可读写。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Shadow) | 返回或设置一个 **Boolean** 值，它确定对象是否有阴影。 |
| [Smooth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Smooth) | 如果折线图或散点图有平滑线，则为 **True** 。仅适用于折线图和散点图。可读写。 |
| [Values](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/Values) | 返回或设置一个 **Variant** 值，它代表系列中所有值的集合。 |
| [XValues](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/member/XValues) | 返回或设置图表系列中 x 值的数组。 **XValues** 属性可设置为工作表区域或数值数组，但不能为二者的组合。 **Variant** 类型，可读写。 |