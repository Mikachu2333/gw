# ChartGroup 对象

代表图表中用同一格式绘制的一个或多个数据系列。

## 说明


一张图表包含一个或多个图表组，每个图表组包含一个或多个 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/obj)** 对象，每个数据系列包含一个或多个 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Point/obj)** 对象。例如，单张图表可能既包含折线图图表组（其中包含所有用折线图格式绘制的数据系列），也包含条形图图表组（其中包含所有用条形图格式绘制的数据系列）。 **ChartGroup** 对象是 **[ChartGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroups/obj)** 集合的成员。

使用 **ChartGroups** (*index*)（其中 *index* 是图表组的索引号）可以返回单个 **ChartGroup** 对象。

因为当特定图表组所用的图表格式更改时，该图表组的索引号可能会更改，所以使用命名图表组快捷方法之一来返回特定的图表组会更加容易。 **PieGroups** 方法返回图表中饼图图表组的集合， **LineGroups** 方法返回图表中折线图图表组的集合，依此类推。这些方法中的每一个都可以与索引号配合使用以返回单个 **ChartGroup** 对象，或不指定索引号而返回 **ChartGroups** 集合。


## 示例


```JavaScript
/*本示例开启图表工作表 Chart1 中第一个图表组的垂直线。*/
function test() {
    let chartgroup = Application.Charts.Item("Chart1").ChartObjects(1).Chart.ChartGroups(1)
    chartgroup.HasDropLines = true
}
```
如果图表已被激活，就可使用 **ActiveChart** 属性。



```JavaScript
/*本示例激活图表工作表 Chart1 ，并开启该图表中第一个图表组的垂直线。*/
function test() {
    Application.Charts.Item("Chart1").Activate()
    Application.ActiveSheet.ChartObjects(1).Chart.ChartGroups(1).HasDropLines = true
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [CategoryCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/CategoryCollection) | 返回一个对象，该对象表示图表组中 CategoryCollection 集合 (所有可见类别的集合) 。 |
| [FullCategoryCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/FullCategoryCollection) | 返回一个对象，该对象代表图表组中 CategoryCollection 集合（所有可见类别和筛选类别的集合）。 |
| [SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/SeriesCollection) | 返回一个对象，它代表图表或图表组中的一个系列（ **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/obj)** 对象）或所有系列的集合（ **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/obj)** 集合）。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/AxisGroup) | 返回或设置指定图表的组。可读/写。 |
| [BubbleScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/BubbleScale) | 返回或设置指定图表组中气泡的缩放比例。可为从 0（零）到 300 之间的整数，表示相对于默认大小的百分率。仅适用于气泡图。 **Long** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DoughnutHoleSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/DoughnutHoleSize) | 返回或设置圆环图图表组的内径大小。内径大小以图表大小的百分比表示，有效取值范围为 10% 到 90%。 **Long** 类型，可读写。 |
| [DownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/DownBars) | 返回一个 **[DownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DownBars/obj)** 对象，该对象表示折线图中的跌柱线。仅应用于折线图。只读。 |
| [DropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/DropLines) | 返回一个 **[DropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DropLines/obj)** 对象，该对象表示折线图或面积图上数据系列的垂直线。仅适用于折线图或面积图。只读。 |
| [FirstSliceAngle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/FirstSliceAngle) | 以度为单位返回或设置饼图或圆环图的第一扇区的角度（从垂直方向顺时针计算）。仅应用于饼图、三维饼图和圆环图。值的范围从 0 到 360。 **Long** 类型，可读写。 |
| [GapWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/GapWidth) | 对于条形图和柱形图：以条形或柱形宽度百分数的形式返回或设置条形簇或柱形簇之间的距离。对于饼图中的扇形和饼图中的条形：返回或设置图表的第一节和第二节之间的间距。 **Long** 类型，可读写。 |
| [HasDropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/HasDropLines) | 如果折线图或者面积图中有垂直线，则该值为 **True** 。仅应用于折线图和面积图。 **Boolean** 类型，可读写。 |
| [HasHiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/HasHiLoLines) | 如果折线图有高低点连线，则为 **True** 。仅应用于折线图。 **Boolean** 类型，可读写。 |
| [HasRadarAxisLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/HasRadarAxisLabels) | 如果雷达图有坐标轴标签，则该值为 **True** 。仅适用于雷达图。 **Boolean** 类型，可读写。 |
| [HasSeriesLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/HasSeriesLines) | 如果堆积柱形图或堆积条形图有系列线，或者复合饼图或复合条饼图在两个部分之间有连接线，则该属性值为 **True** 。仅适用于二维堆积柱形图、堆积条形图、复合饼图或复合条饼图。 **Boolean** 类型，可读写。 |
| [HasUpDownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/HasUpDownBars) | 如果折线图中有涨跌柱线，则该值为 **True** 。仅应用于折线图。 **Boolean** 类型，可读写。 |
| [HiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/HiLoLines) | 返回 **[HiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/HiLoLines/obj)** 对象，该对象表示折线图上一个数据系列高低点连线。仅应用于折线图。只读。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [Overlap](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/Overlap) | 指定放置条形和柱形的方式。取值范围在 -100 到 100 之间。仅应用于二维条形图和二维柱形图。 **Long** 类型，可读写。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/Parent) | 返回指定对象的父对象。只读。 |
| [RadarAxisLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/RadarAxisLabels) | 返回一个 **[TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TickLabels/obj)** 对象，该对象表示指定图表组的雷达图坐标轴标签。只读。 |
| [SecondPlotSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/SecondPlotSize) | 以主饼图大小的百分比形式返回或设置复合饼图或复合条饼图中第二部分的大小。可为 5 到 200 之间的值。 **Long** 类型，可读写。 |
| [SeriesLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/SeriesLines) | 返回一个 SeriesLines 对象，该对象代表 2D 堆积条形图、2D 堆积柱形图、饼图的饼图或条形图的系列线。 此为只读属性。 |
| [ShowNegativeBubbles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/ShowNegativeBubbles) | 如果在图表组中显示表示负值的气泡，则该值为 **True** 。仅对气泡图有效。 **Boolean** 类型，可读写。 |
| [SizeRepresents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/SizeRepresents) | 返回或设置气泡图中气泡的大小所表示的含义。可为以下 **[XlSizeRepresents](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlSizeRepresents)** 常量之一： **xlSizeIsArea** 或 **xlSizeIsWidth** 。 **Long** 类型，可读写。 |
| [SplitType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/SplitType) | 返回或设置在复合饼图或复合条饼图中拆分两部分的方式。 **[XlChartSplitType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartSplitType)** 类型，可读写。 |
| [SplitValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/SplitValue) | 返回或设置复合饼图或复合条饼图中分隔两部分的阈值。可读/写 **Variant** 类型。 |
| [UpBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/UpBars) | 返回 **[UpBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/UpBars/obj)** 对象，该对象表示折线图上的涨柱线。仅应用于折线图。只读。 |
| [VaryByCategories](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/member/VaryByCategories) | 如果 ET 对每个数据标志指定不同的颜色或模式，则该值为 **True** 。图表中必须只包含一个数据系列。 **Boolean** 类型，可读写。 |