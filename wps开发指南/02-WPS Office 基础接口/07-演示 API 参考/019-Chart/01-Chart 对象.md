# Chart 对象

代表演示文稿中的图表。


## 示例


```JavaScript
/*本示例判断如果活动演示文稿的第一张幻灯片上第一个形状为图表，则更改图表上第一个系列的前景色。*/
function test() {
    let shape = ActivePresentation.Slides.Item(1).Shapes.Item(1)
    if (shape.HasChart) {
        shape.Chart.SeriesCollection(1).Format.Fill.ForeColor.RGB = RGB(255, 0, 0)
    }
}
```


```JavaScript
/*本示例将第一个演示文稿的第一张幻灯片中第二个图表的标题设置为“example”。*/
function test() {
    let chart = Presentations.Item(1).Slides.Item(1).Shapes.Item(2).Chart
    chart.ChartTitle.Text = "example"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [ApplyChartTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ApplyChartTemplate) | 将标准图表类型或自定义图表类型应用于图表。 |
| [ApplyDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ApplyDataLabels) | 将数据标签应用于图表中的所有系列。 |
| [ApplyLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ApplyLayout) | 应用功能区中显示的版式。 |
| [Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Axes) | 返回图表中的坐标轴集合。 |
| [ChartGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartGroups) | 返回一个对象，它代表图表中单个图表组或所有图表组的集合。 |
| [ChartWizard](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartWizard) | 修改给定图表的属性。可使用本方法快速设置图表的格式，而不必逐个设置所有属性。本方法是非交互式的，并且仅更改指定的属性。 |
| [ClearToMatchColorStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ClearToMatchColorStyle) | 清除指定图表上不遵循应用于图表的颜色样式的所有颜色。 |
| [ClearToMatchStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ClearToMatchStyle) | 清除图表元素格式以改为自动格式。 |
| [CopyPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/CopyPicture) | 将所选对象作为图片复制到剪贴板。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Delete) | 删除对象。 |
| [Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Export) | 以图形格式导出图表。 |
| [FullSeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/FullSeriesCollection) | 返回指定图表或指定序列中所有系列的集合。 |
| [HasAxis](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/HasAxis) | 返回或设置图表上显示的坐标轴。可读/写 **Variant** 类型。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Paste) | 将剪贴板中的图表数据粘贴到图表中。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Refresh) | 立即重新绘制指定的图表。 |
| [SaveChartTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/SaveChartTemplate) | 将自定义图表模板保存到可用图表模板的列表中。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Select) | 选择对象。 |
| [SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/SeriesCollection) | 返回图表中的所有系列。 |
| [SetBackgroundPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/SetBackgroundPicture) | 设置图表的背景图形。 |
| [SetElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/SetElement) | 设置图表上的图表元素。可读/写 **MsoChartElementType** 类型。 |
| [SetSourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/SetSourceData) | 设置图表的源数据范围。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AutoScaling](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/AutoScaling) | 如果 WPP 自动对三维图表进行缩放，使之与等效的二维图表的大小相近，则为 **True** 。 **[RightAngleAxes](#TODO)** 属性必须为 **True** 。可读/写 **Boolean** 类型。 |
| [ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartArea) | 返回图表的整个图表区。只读 **[ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartArea/obj)** 对象。 |
| [ChartColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartColor) | 返回或设置一个用于表示图表配色方案的整数。可读/写 **Variant** 类型。 |
| [ChartStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartStyle) | 返回或设置图表的图表样式。可读/写 **Variant** 类型。 |
| [ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartTitle) | 返回指定图表的标题。只读 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartTitle/obj)** 对象。 |
| [ChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ChartType) | 返回或设置图表类型。 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 类型，可读写。 |
| [DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/DataTable) | 返回图表模拟运算表。只读 **[DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/DataTable/obj)** 对象。 |
| [DepthPercent](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/DepthPercent) | 返回或设置三维图表的深度，以图表宽度的百分比表示（有效范围从 20% 到 2000%）。可读/写 **Long** 类型。 |
| [DisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/DisplayBlanksAs) | 返回或设置在图表中绘制空白单元格的方式。可以是 **[XlDisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayBlanksAs)** 常量之一。可读/写 **Long** 类型。 |
| [Format](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Format) | 返回 **[ChartFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/ChartFormat/obj)** 对象。只读。 |
| [HasDataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/HasDataTable) | 如果图表有模拟运算表，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasLegend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/HasLegend) | 如果图表有图例，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/HasTitle) | 如果坐标轴或图表有可见标题，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Legend) | 返回图表的图例。只读 **[Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Legend/obj)** 。 |
| [PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/PlotArea) | 返回图表的绘图区。只读 **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/PlotArea/obj)** 。 |
| [PlotBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/PlotBy) | 返回或设置列或行在图表中作为数据系列使用的方式。可读/写 **Long** 类型。 |
| [PlotVisibleOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/PlotVisibleOnly) | 如果仅绘制可见单元格，则该值为 **True** 。如果可见单元格和隐藏单元格都绘制，则该值为 **False** 。可读/写 **Boolean** 类型。 |
| [ShowDataLabelsOverMaximum](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/ShowDataLabelsOverMaximum) | 返回或设置一个值，该值指示当数值大于数值轴上的最大值时是否显示数据标签。可读/写 **Boolean** 类型。 |
| [Title](/app-integration-dev/wps365/client/wpsoffice/jsapi/wpp/Chart/member/Title) | 获取或设置一个代表图表标题的 **String** 。可读/写。 |