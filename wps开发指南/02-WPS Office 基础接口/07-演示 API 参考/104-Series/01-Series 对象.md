# Series 对象

代表图表上的系列。

## 说明


 **Series** 对象是 **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/SeriesCollection/obj)** 集合的一个成员。

可以使用 **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/SeriesCollection)** (_Index_)（其中 _Index_ 是系列的索引号或名称）返回单个 **Series** 对象。

系列索引号指明了系列添加到图表中的顺序。`SeriesCollection(1)` 是第一个添加到图表中的系列，而 `SeriesCollection(SeriesCollection.Count)` 是最后一个添加到图表中的系列。


## 示例


```JavaScript
/*本示例设置活动演示文稿上第一张幻灯片中第一个图表的第一个系列的前景填充色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例将第一篇演示文稿上第二张幻灯片中第一个图表的第三个系列的边框样式设置为虚线。*/
function test() {
    let series = ActivePresentation.Slides.Item(2).Shapes.Item(1).Chart.SeriesCollection(3)
    series.Border.LineStyle = xlDash
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ApplyDataLabels) | 向系列应用数据标签。 |
| [ClearFormats](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ClearFormats) | 清除对象的格式设置。 |
| [DataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/DataLabels) | 返回一个代表系列中单个数据标签（ **[DataLabel](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabel/obj)** 对象）或所有数据标签集合（ **[DataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataLabels/obj)** 集合）的对象。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Delete) | 删除对象。 |
| [ErrorBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ErrorBar) | 将误差线应用于系列。 |
| [Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Points) | 返回系列中所有数据点的集合。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Select) | 选择对象。 |
| [Trendlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Trendlines) | 返回系列中所有趋势线的集合。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ApplyPictToEnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ApplyPictToEnd) | 如果图片应用于系列中的某个数据点或所有数据点之后，则为 **True** 。可读/写 **Boolean** 类型。 |
| [ApplyPictToFront](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ApplyPictToFront) | 如果图片应用于系列中的某个数据点或所有数据点之前，则为 **True** 。可读/写 **Boolean** 类型。 |
| [ApplyPictToSides](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ApplyPictToSides) | 如果将图片应用于系列中某个数据点或所有数据点的两侧，则为 **True** 。可读/写 **Boolean** 类型。 |
| [AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/AxisGroup) | 返回坐标轴组的类型。可读/写 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。 |
| [ChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ChartType) | 返回或设置图表类型。可读/写 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 。 |
| [ErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/ErrorBars) | 返回系列的误差线。只读 **[ErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ErrorBars/obj)** 。 |
| [Explosion](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Explosion) | 返回或设置饼图或圆环图的扇区的分离程度值。可读/写 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Format) | 返回对象的线条、填充和效果格式。只读 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 。 |
| [Formula](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Formula) | 用宏语言以 A1 样式表示法返回或设置对象的公式。可读/写 **String** 类型。 |
| [FormulaLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/FormulaLocal) | 返回或设置对象的公式，使用用户语言 A1 样式引用。可读/写 **String** 类型。 |
| [Has3DEffect](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Has3DEffect) | 如果系列有三维外观，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/HasDataLabels) | 如果系列有数据标签，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasErrorBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/HasErrorBars) | 如果系列有误差线，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasLeaderLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/HasLeaderLines) | 如果系列有引导线，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [InvertColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/InvertColor) | 返回或设置系列中的负数据点的填充颜色。可读写。 |
| [InvertIfNegative](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/InvertIfNegative) | 如果对象与一个负数相对应时 WPS 就将其反色，则该属性值为 **True** 。可读/写 **Variant** 类型。 |
| [LeaderLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/LeaderLines) | 返回系列的引导线。只读 **[LeaderLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/LeaderLines/obj)** 。 |
| [MarkerSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/MarkerSize) | 以磅为单位返回或设置数据标记的大小。可读/写 **Long** 类型。 |
| [MarkerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/MarkerStyle) | 返回或设置折线图、散点图或雷达图中数据点或系列的数据标记样式。可读/写 **[XlMarkerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlMarkerStyle)** 。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Name) | 返回或设置对象的名称。可读/写 **String** 类型。 |
| [PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/PictureType) | 返回或设置一个指定图片在柱形图或条形图上的显示方式的值。可读/写 **[XlChartPictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartPictureType)** 。 |
| [PictureUnit2](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/PictureUnit2) | 如果 **[PictureType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/PictureType)** 属性设置为 **xlStackScale** ，则返回或设置图表上每一个图片的单位；否则，将忽略此属性。可读/写 **Double** 类型。 |
| [PlotOrder](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/PlotOrder) | 返回或设置指定图表组中选定数据系列的绘制顺序。可读/写 **Long** 类型。 |
| [Shadow](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Shadow) | 返回或设置一个表示对象是否有阴影的值。可读/写 **Boolean** 类型。 |
| [Smooth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Smooth) | 如果为折线图或散点图启用曲线平滑，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Values](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/Values) | 返回或设置系列中所有值的集合。可读/写 **Variant** 类型。 |
| [XValues](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Series/member/XValues) | 返回或设置图表系列中 x 值的数组。可读/写 **Variant** 类型。 |