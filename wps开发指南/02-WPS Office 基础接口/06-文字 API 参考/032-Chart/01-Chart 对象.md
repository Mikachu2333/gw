# Chart 对象

代表文档中的图表。

## 说明


“示例”部分介绍用于返回 **Chart** 对象的下列属性和方法：

* **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Chart)** 属性。
* **[AddChart](#TODO)** 方法。

 **[InlineShapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShapes/obj)** 集合包含与文档中的每个内嵌形状（包括图表）对应的对象。可以使用 **InlineShapes** (_Index_)（其中 _Index_ 是内嵌形状的索引号）返回单个 **InlineShape** 对象。可以使用 **[HasChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/HasChart)** 属性确定 **InlineShape** 对象是否代表图表。如果 **HasChart** 属性设置为 **True** ，则可以使用 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Chart)** 属性返回 **Chart** 对象。

您还可以使用 **[Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/InlineShape/member/Type)** 属性确定 **InlineShape** 对象是否代表图表。如果 **Type** 属性设置为 **WdInlineShapeChart** ，则内嵌形状代表图表。


## 示例


```JavaScript
/*本示例判断如果活动文档上第一个内嵌形状为图表，则此示例将更改图表上第一个系列的前景色。*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.Item(1)
    if (inlineShape.HasChart) {
        inlineShape.Chart.SeriesCollection(1).Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例在活动文档中新建一个折线图，并设置该图表的标题*/
function test() {
    let inlineShape = ActiveDocument.InlineShapes.AddChart2(null, xlLine)
    inlineShape.Chart.ChartTitle.Text = "example"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyChartTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ApplyChartTemplate) | 将标准图表类型或自定义图表类型应用于图表。 |
| [ApplyDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ApplyDataLabels) | 将数据标签应用于图表中的所有系列。 |
| [ApplyLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ApplyLayout) | 应用功能区中显示的版式。 |
| [Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/Axes) | 返回图表中的坐标轴集合。 |
| [ChartGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ChartGroups) | 返回代表单个图表组或所有图表组集合的某个对象。 |
| [ChartWizard](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ChartWizard) | 修改给定图表的属性。可使用本方法快速设置图表的格式，而不必逐个设置所有属性。本方法是非交互式的，并且仅更改指定的属性。 |
| [ClearToMatchColorStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ClearToMatchColorStyle) | 清除指定图表上不遵循应用于图表的颜色样式的所有颜色。 |
| [ClearToMatchStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ClearToMatchStyle) | 清除图表元素格式以改为自动格式。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/Delete) | 删除对象。 |
| [Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/Export) | 以图形格式导出图表。 |
| [FullSeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/FullSeriesCollection) | 返回指定图表或指定序列中所有系列的集合。 |
| [HasAxis](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/HasAxis) | 返回或设置图表上显示的坐标轴。可读/写 **Variant** 类型。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/Paste) | 将剪贴板中的图表数据粘贴到图表中。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/Refresh) | 立即重新绘制指定的图表。 |
| [SaveChartTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/SaveChartTemplate) | 向可用图表模板的列表中添加自定义图表模板。 |
| [SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/SeriesCollection) | 返回图表中的所有系列。 |
| [SetBackgroundPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/SetBackgroundPicture) | 设置图表的背景图形。 |
| [SetElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/SetElement) | 设置图表上的图表元素。可读/写 **MsoChartElementType** 类型。 |
| [SetSourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/SetSourceData) | 设置图表的源数据范围。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AutoScaling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/AutoScaling) | 如果 WPS 自动对三维图表进行缩放，使之与等效的二维图表的大小相近，则为 **True** 。 **[RightAngleAxes](#TODO)** 属性必须为 **True** 。可读/写 **Boolean** 类型。 |
| [ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ChartArea) | 返回图表的整个图表区。只读 **[ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartArea/obj)** 对象。 |
| [ChartColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ChartColor) | 返回或设置一个用于表示图表配色方案的整数。可读/写 **Variant** 类型。 |
| [ChartStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ChartStyle) | 返回或设置图表的图表样式。可读/写 **Variant** 类型。 |
| [ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ChartTitle) | 返回一个 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/ChartTitle/obj)** 对象，该对象表示指定图表的标题。只读。 |
| [ChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ChartType) | 返回或设置图表类型。 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 类型，可读写。 |
| [DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/DataTable) | 返回图表模拟运算表。只读 **[DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/DataTable/obj)** 对象。 |
| [DepthPercent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/DepthPercent) | 返回或设置三维图表的深度，以图表宽度的百分比表示（有效范围从 20% 到 2000%）。可读/写 **Long** 类型。 |
| [HasDataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/HasDataTable) | 如果图表有模拟运算表，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasLegend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/HasLegend) | 如果图表有图例，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/HasTitle) | 如果坐标轴或图表有可见标题，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/Legend) | 返回图表的图例。只读 **[Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Legend/obj)** 对象。 |
| [PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/PlotArea) | 返回图表的绘图区。只读 **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/PlotArea/obj)** 对象。 |
| [PlotBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/PlotBy) | 返回或设置列或行在图表中作为数据系列使用的方式。可读/写 **Long** 类型。 |
| [PlotVisibleOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/PlotVisibleOnly) | 如果仅绘制可见单元格，则该值为 **True** 。如果可见单元格和隐藏单元格都绘制，则该值为 **False** 。可读/写 **Boolean** 类型。 |
| [ShowDataLabelsOverMaximum](/app-integration-dev/wps365/client/wpsoffice/jsapi/wps/Chart/member/ShowDataLabelsOverMaximum) | 返回或设置表示在数值大于数值轴上的最大值时是否显示数据标签的值。可读/写 **Boolean** 类型。 |