# ChartGroup 对象

代表图表中用同一格式绘制的一个或多个系列。

## 说明


一张图表包含一个或多个图表组，每个图表组包含一个或多个 **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Series/obj)** 对象，每个系列包含一个或多个 **[Points](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Points/obj)** 对象。例如，单张图表可以既包含折线图图表组（其中包含用折线图格式绘制的所有系列），又包含条形图图表组（其中包含用条形图格式绘制的所有系列）。 **ChartGroup** 对象为 **[ChartGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroups/obj)** 集合的成员。

可以使用 **ChartGroups** (_Index_)（其中 _index_ 是图表组的索引号）返回单个 **ChartGroup** 对象。


## 示例


```JavaScript
/*本示例向活动文档中第一个图表的第一个图表组添加垂直线。*/
function test() {
    let chartGroup = ActiveDocument.InlineShapes.Item(1).Chart.ChartGroups(1)
    chartGroup.HasDropLines = true
}
```


```JavaScript
/*本示例为第一个文档上第一个形状中雷达图的第一个图表组应用雷达图轴标签，然后设置其颜色。*/
function test() {
    let chartGroup = Application.Documents.Item(1).Shapes.Item(1).Chart.ChartGroups(1)
    chartGroup.HasRadarAxisLabels = true
    chartGroup.RadarAxisLabels.Font.Color = RGB(255, 0, 0)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [CategoryCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/CategoryCollection) | 返回图表组中的所有可见类别或指定的可见类别。 |
| [FullCategoryCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/FullCategoryCollection) | 返回图表组中的所有类别或指定的类别，无论是否可见或筛选掉。 |
| [SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/SeriesCollection) | 返回图表组中的所有系列。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/AxisGroup) | 返回坐标轴组的类型。可读/写 **[XlAxisGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlAxisGroup)** 。 |
| [BubbleScale](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/BubbleScale) | 返回或设置指定图表组中气泡的比例因子。可读/写 **Long** 类型。 |
| [DoughnutHoleSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/DoughnutHoleSize) | 返回或设置圆环图图表组的内径大小。可读/写 **Long** 类型。 |
| [DownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/DownBars) | 返回折线图中的跌柱线。只读 **[DownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DownBars/obj)** 对象。 |
| [DropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/DropLines) | 返回折线图或面积图上系列的垂直线。只读 **[DropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DropLines/obj)** 对象。 |
| [FirstSliceAngle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/FirstSliceAngle) | 以度为单位返回或设置饼图或圆环图的第一扇区的角度（从垂直方向顺时针计算）。可读/写 **Long** 类型。 |
| [GapWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/GapWidth) | 对于条形图和柱形图，以条形或柱形宽度的百分比形式返回或设置条形簇或柱形簇之间的间距。对于复合饼图或复合条饼图，返回或设置图表的主要部分和从属部分之间的间距。可读/写 **Long** 类型。 |
| [HasDropLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HasDropLines) | 如果折线图或者面积图中有垂直线，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasHiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HasHiLoLines) | 如果折线图有高低点连线，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasRadarAxisLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HasRadarAxisLabels) | 如果雷达图有坐标轴标签，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasSeriesLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HasSeriesLines) | 如果堆积柱形图或堆积条形图有系列线，或者复合饼图或复合条饼图在两个部分之间有连接线，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HasUpDownBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HasUpDownBars) | 如果折线图中有涨跌柱线，则为 **True** 。可读/写 **Boolean** 类型。 |
| [HiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/HiLoLines) | 返回折线图上一个系列的高低点连线。只读 **[HiLoLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/HiLoLines/obj)** 对象。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/Index) | 返回对象在其同类对象所组成的集合内的索引号。只读 **Long** 类型。 |
| [Overlap](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/Overlap) | 指定放置条形图和柱形图的方式。可读/写 **Long** 类型。 |
| [RadarAxisLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/RadarAxisLabels) | 返回指定图表组的雷达图轴标签。只读 **[TickLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/TickLabels/obj)** 对象。 |
| [SecondPlotSize](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/SecondPlotSize) | 以主饼图部分的百分比形式返回或设置复合饼图或复合条饼图中从属部分的大小。可读/写 **Long** 类型。 |
| [SeriesLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/SeriesLines) | 返回二维堆积条形图、二维堆积柱形图、复合饼图、复合条饼图的系列线。只读 **[SeriesLines](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/SeriesLines/obj)** 对象。 |
| [ShowNegativeBubbles](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/ShowNegativeBubbles) | 如果在图表组中显示表示负值的气泡，则为 **True** 。可读/写 **Boolean** 类型。 |
| [SizeRepresents](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/SizeRepresents) | 返回或设置气泡图上气泡大小所代表的含义。可读/写 **Long** 类型。 |
| [SplitType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/SplitType) | 返回或设置在复合饼图或复合条饼图中拆分两部分的方式。可读/写 **[XlChartSplitType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartSplitType)** 。 |
| [SplitValue](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/SplitValue) | 返回或设置拆分复合饼图或复合条饼图的两部分的临界值。可读/写 **Variant** 类型。 |
| [UpBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/UpBars) | 返回折线图的涨柱线。只读 **[UpBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/UpBars/obj)** 对象。 |
| [VaryByCategories](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartGroup/member/VaryByCategories) | 如果 WPS文字 为每个数据标记指定不同的颜色或图案，则为 **True** 。可读/写 **Boolean** 类型。 |