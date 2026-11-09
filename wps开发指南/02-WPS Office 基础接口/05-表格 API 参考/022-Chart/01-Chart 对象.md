# Chart 对象

代表工作簿中的图表。

## 说明


此图表既可以是嵌入的图表（包含在 **[ChartObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/obj)** 对象中），也可以是单独的图表工作表。

示例部分中描述了以下用于返回 **Chart** 对象的属性和方法：

* **Charts** 方法
* **ActiveChart** 属性
* **ActiveSheet** 属性

 **Charts** 集合包含工作簿中每个图表工作表的 **Chart** 对象。使用 **Charts** ( *index*) 可以返回单个 **Chart** 对象，其中 index 为图表工作表的索引号或名称。图表索引号表示图表工作表在工作簿标签栏上的位置。*Charts(1)* 是工作簿中第一个（最左边的）图表；*Charts(Charts.Count)* 是最后一个（最右边的）图表。所有图表工作表均包括在索引计数中，即便是隐藏工作表也是如此。图表工作表名称显示在图表工作簿标签上。您可以使用 **[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Name)** 属性设置或返回图表名称。


## 示例


```JavaScript
/*本示例将图表工作表 Chart1 第一个数据系列设置为红色。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.SeriesCollection(1).Format.Fill.ForeColor.RGB = rgbRed
}
```


```JavaScript
/*本示例将图表工作表 Sales 移至活动工作簿的尾部。*/
function test() {
    let chart = Application.Charts.Item("Sales")
    chart.Move(null, Sheets.Item(Sheets.Count))
}
```
 **Chart** 对象也是 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合的成员，此集合包含工作簿中的所有工作表（图表工作表和工作表）。使用 **Sheets** (*index*) 可以返回单个工作表，其中 *index* 是工作表索引号或名称。

当图表是活动对象时，您可以使用 **ActiveChart** 属性引用它。如果用户选择了图表工作表，或者用 **Chart** 对象的 **[Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Activate)** 方法或 **ChartObject** 对象的 **[Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Activate)** 方法激活了它，则该图表工作表处于活动状态。



```JavaScript
/*本示例将图表工作表 Chart1 图表类型修改为折线图，并将图表标题修改为“January Sales”。*/
function test() {
    let chart = Application.Charts.Item("Chart1").ChartObjects(1).Chart
    chart.ChartType = xlLine
    chart.HasTitle = true
    chart.ChartTitle.Text = "January Sales"
}
```
如果用户选择了嵌入图表，或者用 **[Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/member/Activate)** 方法激活了包含该嵌入图表的 **[ChartObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/obj)** 对象，则该嵌入图表处于活动状态。通过使用 **ActiveChart** 属性，您可以编写能够引用嵌入图表或图表工作表（视哪一个处于活动状态而定）的 JavaScript 代码。



```JavaScript
/*本示例将工作表 Sheet1 中第一个内嵌图表的图表类型修改为折线图，然后将图表标题修改为“January Sales”。*/
function test() {
    let chart = Application.Worksheets.Item("Sheet1").ChartObjects(1).Chart
    chart.ChartType = xlLine
    chart.HasTitle = true
    chart.ChartTitle.Text = "January Sales"
}
```
当图表工作表为活动工作表时，可以使用 **ActiveSheet** 属性来引用它。



```JavaScript
/*本示例将 Chart1 图表工作表中系列 1 的内部颜色设置为蓝色。*/
function test() {
    let chart = Application.Charts.Item("chart1").ChartObjects(1).Chart
    chart.SeriesCollection(1).Format.Fill.ForeColor.RGB = rgbBlue
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Activate) | 使当前图表成为活动图表。 |
| [ApplyChartTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ApplyChartTemplate) | 将标准图表类型或自定义图表类型应用于图表。 |
| [ApplyDataLabels](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ApplyDataLabels) | 将数据标签应用到图表中的所有系列。 |
| [ApplyLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ApplyLayout) | 应用功能区中显示的版式。 |
| [Axes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Axes) | 返回一个代表图表上单个坐标轴或坐标轴集合的某个对象。 |
| [ChartGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartGroups) | 返回一个对象，该对象表示图表中单个图表组（ **[ChartGroup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroup/obj)** 对象）或所有图表组的集合（ **[ChartGroups](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartGroups/obj)** 对象）。返回的集合中包括每种类型的图表组。 |
| [ChartObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartObjects) | 返回一个对象，它代表工作表上的一个嵌入式图表（ **[ChartObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/obj)** 对象）或所有嵌入式图表的集合（ **[ChartObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/obj)** 对象）。 |
| [ChartWizard](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartWizard) | 修改给定图表的属性。可使用本方法快速设置图表的格式，而不必逐个设置所有属性。本方法是非交互式的，并且仅更改指定的属性。 |
| [ClearToMatchColorStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ClearToMatchColorStyle) | 清除指定图表上不遵循应用于图表的颜色样式的所有颜色。 |
| [ClearToMatchStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ClearToMatchStyle) | 清除图表元素格式以改为自动格式。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Copy) | 将工作表复制到工作簿的另一位置。 |
| [CopyPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/CopyPicture) | 将所选对象作为图片复制到剪贴板。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Delete) | 删除对象。 |
| [Evaluate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Evaluate) | 将一个 ET 名称转换为一个对象或者一个值。 |
| [Export](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Export) | 以图形格式导出图表。 |
| [FullSeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/FullSeriesCollection) | 启用检索 由 Index 参数指定的筛选出序列。 |
| [HasAxis](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/HasAxis) | 返回或设置图表上显示的坐标轴。 **Variant** 类型，可读写。 |
| [Location](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Location) | 将图表移动到新位置。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Move) | 将图表移到工作簿的另一位置。 |
| [OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/OLEObjects) | 返回一个对象，它代表图表或工作表上的单个 OLE 对象 ( **[OLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/obj)** ) 或所有 OLE 对象的集合（ **[OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/obj)** 集合）。只读。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Paste) | 将剪贴板中的图表数据粘贴到指定的图表中。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/PrintOut) | 打印对象。 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/PrintPreview) | 按对象打印后的外观效果显示对象的预览。 |
| [Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Protect) | 保护图表使其不被修改。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Refresh) | 立即重新绘制指定的图表。 |
| [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/SaveAs) | 将对图表或工作表的更改保存到另一不同文件中。 |
| [SaveChartTemplate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/SaveChartTemplate) | 向可用图表模板的列表添加自定义图表模板。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Select) | 选择对象。 |
| [SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/SeriesCollection) | 返回一个对象，它代表图表或图表组中的一个系列（ **[Series](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Series/obj)** 对象）或所有系列的集合（ **[SeriesCollection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/SeriesCollection/obj)** 集合）。 |
| [SetBackgroundPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/SetBackgroundPicture) | 为图表设置背景图形。 |
| [SetElement](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/SetElement) | 设置图表上的图表元素。可读/写 **MsoChartElementType** 类型。 |
| [SetSourceData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/SetSourceData) | 为指定图表设置源数据区域。 |
| [Unprotect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Unprotect) | 取消工作表或工作簿的保护。如果工作表或工作簿不是受保护的，则此方法不起作用。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个代表指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoScaling](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/AutoScaling) | 如果 ET 对三维图表进行缩放，使之与等效的二维图表的大小相近，则该属性值为 **True** 。 **[RightAngleAxes](#TODO)** 属性必须为 **True** 。 **Boolean** 类型，可读写。 |
| [ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartArea) | 返回一个 **[ChartArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartArea/obj)** 对象，该对象表示图表的整个图表区。只读。 |
| [ChartColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartColor) | 返回或设置一个 Integer 类型的值，该值代表图表的配色方案。 读/写。 |
| [ChartStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartStyle) | 返回或设置图表的图表样式。可读/写 **Variant** 类型。 |
| [ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartTitle) | 返回一个 **[ChartTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartTitle/obj)** 对象，该对象表示指定图表的标题。只读。 |
| [ChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ChartType) | 返回或设置图表类型。 **[XlChartType](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlChartType)** 类型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/DataTable) | 返回一个 **[DataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/DataTable/obj)** 对象，该对象表示图表的模拟运算表。只读。 |
| [DepthPercent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/DepthPercent) | 返回或设置三维图表的深度，以图表宽度的百分比表示（有效范围从 20% 到 2000%）。 **Long** 类型，可读写。 |
| [DisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/DisplayBlanksAs) | 返回或设置在图表中绘制空白单元格的方式。可以是 **[XlDisplayBlanksAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlDisplayBlanksAs)** 常量之一。 **Long** 类型，可读写。 |
| [HasDataTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/HasDataTable) | 如果图表有模拟运算表，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HasLegend](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/HasLegend) | 如果图表有图例，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [HasTitle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/HasTitle) | 如果坐标轴或图表有可见标题，则为 **True** 。 **Boolean** 类型，可读写。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Hyperlinks) | 返回一个 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** 集合，它代表图表的超链接。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Legend) | 返回一个 **[Legend](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Legend/obj)** 对象，该对象表示指定图表的图例。只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Next) | 返回代表下一个工作表的 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象。 |
| [PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/PageSetup) | 返回一个 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/obj)** 对象，它包含用于指定对象的所有页面设置。只读。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Parent) | 返回指定对象的父对象。只读。 |
| [PivotLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/PivotLayout) | 返回一个 **[PivotLayout](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotLayout/obj)** 对象，该对象表示数据透视表中字段的位置以及数据透视图中坐标轴的位置。只读。 |
| [PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/PlotArea) | 返回一个 **[PlotArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PlotArea/obj)** 对象，该对象表示图表的绘图区。只读。 |
| [PlotBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/PlotBy) | 返回或设置行或列在图表中作为数据系列使用的方式。可为以下 **[XlRowCol](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlRowCol)** 常量之一： **xlColumns** 或 **xlRows** 。 **Long** 类型，可读写。 |
| [PlotVisibleOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/PlotVisibleOnly) | 如果仅绘制可见单元格，则该值为 **True** 。如果可见单元格和隐藏单元格都绘制，则该值为 **False** 。 **Boolean** 类型，可读写。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Previous) | 返回代表上一个工作表的 **[Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)** 对象。 |
| [ProtectContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ProtectContents) | 如果工作表内容是受保护的，则为 **True** 。对于图表，这样会保护整个图表。要打开内容保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Protect)** 方法，并将 *Contents* 参数设置为 **True** 。 **Boolean** 类型，只读。 |
| [ProtectDrawingObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ProtectDrawingObjects) | 如果形状是受保护的，则为 **True** 。要打开形状保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Protect)** 方法，并将 *DrawingObjects* 参数设置为 **True** 。 **Boolean** 类型，只读。 |
| [ProtectionMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ProtectionMode) | 如果启用了用户界面专用保护，则为 **True** 。要打开用户界面保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Protect)** 方法，并将 *UserInterfaceOnly* 参数设置为 **True** 。 **Boolean** 类型，只读。 |
| [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Shapes) | 返回一个 **[Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)** 集合，它代表图表工作表上所有的形状。只读。 |
| [ShowAllFieldButtons](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ShowAllFieldButtons) | 返回或设置是否在数据透视图上显示所有字段按钮。可读/写。 |
| [ShowAxisFieldButtons](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ShowAxisFieldButtons) | 返回或设置是否要在数据透视图上显示坐标轴字段按钮。可读/写。 |
| [ShowDataLabelsOverMaximum](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ShowDataLabelsOverMaximum) | 返回或设置一个布尔值，该值表示在数值大于数值轴上的最大值时是否显示数据标签。可读/写 **Boolean** 类型。 |
| [ShowLegendFieldButtons](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ShowLegendFieldButtons) | 返回或设置是否要在数据透视图上显示图例字段按钮。可读/写。 |
| [ShowReportFilterFieldButtons](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ShowReportFilterFieldButtons) | 返回或设置是否要在数据透视图上显示报表筛选字段按钮。可读/写。 |
| [ShowValueFieldButtons](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/ShowValueFieldButtons) | 返回或设置是否要在数据透视图上显示值字段按钮。可读/写。 |
| [Tab](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Tab) | 为图表返回一个 **[Tab](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/obj)** 对象。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/member/Visible) | 返回或设置一个 **[XlSheetVisibility](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSheetVisibility)** 值，它确定对象是否可见。 |