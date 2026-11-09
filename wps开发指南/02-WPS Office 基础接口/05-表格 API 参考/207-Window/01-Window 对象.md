# Window 对象

代表窗口。

## 说明


许多工作表特征（如滚动条和标尺）实际上是窗口的属性。 **Window** 对象是 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/obj)** 集合的成员。 **Application** 对象的 **Windows** 集合包含应用程序中的所有窗口，而 **Workbook** 对象的 **[Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/obj)** 集合只包含指定工作簿中的窗口。

使用 **Windows** (*index*)（其中 *index* 是窗口名称或索引号）可返回一个 **Window** 对象。


## 示例


```JavaScript
/*本示例将第一个文档窗口最大化。*/
function test() {
    Application.Windows.Item(1).WindowState = xlMaximized
}
```
注意，活动窗口总是 `Windows(1)`。

窗口标题是窗口未处于最大化时窗口最上方标题栏中显示的文本。该标题还会显示在 **“窗口”** 菜单最下方的打开文件列表中。使用 **[Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Caption)** 属性可设置或返回窗口标题。更改窗口标题不会更改工作簿的名称。



```JavaScript
/*本示例为第一个窗口中显示的工作表关闭单元格网格线。*/
function test() {
    Application.Windows.Item(1).DisplayGridlines = false
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Activate) | 将窗口提到 z-次序的最前面。 |
| [ActivateNext](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ActivateNext) | 激活指定窗口，并将其移到窗口 z-次序的末尾。 |
| [ActivatePrevious](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ActivatePrevious) | 激活指定窗口，并将其移到窗口 z-次序的末尾。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Close) | 关闭对象。 |
| [LargeScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/LargeScroll) | 按页滚动窗口内容。 |
| [NewWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/NewWindow) | 新建一个窗口或者创建指定窗口的副本。 |
| [PointsToScreenPixelsX](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/PointsToScreenPixelsX) | 将横向度量值由以点（文档坐标）为单位转换为以屏幕像素（屏幕坐标）为单位。返回转变后的度量值（ **Long** 类型）。 |
| [PointsToScreenPixelsY](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/PointsToScreenPixelsY) | 将纵向度量值由以点（文档坐标）为单位转换为以屏幕像素（屏幕坐标）为单位。返回转变后的度量值（ **Long** 类型）。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/PrintOut) | 打印对象。 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/PrintPreview) | 按对象打印后的外观效果显示对象的预览。 |
| [RangeFromPoint](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/RangeFromPoint) | 返回位于指定屏幕坐标对的 **Shape** 或 **Range** 对象。 如果指定坐标处没有形状，则此方法返回 **null** 。 |
| [ScrollIntoView](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ScrollIntoView) | 滚动文档窗口，使指定矩形区域中的内容显示在文档窗口或窗格的左上角或右下角（取决于 _Start_ 参数值）。 |
| [ScrollWorkbookTabs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ScrollWorkbookTabs) | 滚动工作簿窗口下方的工作表标签。本方法不改变该工作簿中的活动工作表。 |
| [SmallScroll](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SmallScroll) | 按行或按列滚动窗口内容。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveCell](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ActiveCell) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表活动窗口（最上方的窗口）或指定窗口中的活动单元格。如果窗口中没有显示工作表，此属性无效。只读。 |
| [ActiveChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ActiveChart) | 返回一个 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，它代表活动图表（嵌入式图表或图表工作表）。嵌入式图表在被选中或激活时被认为是活动的。当没有图表处于活动状态时，此属性返回 **null** 。 |
| [ActivePane](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ActivePane) | 返回一个 **[Pane](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Pane/obj)** 对象，该对象表示窗口中的活动窗格。只读。 |
| [ActiveSheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ActiveSheet) | 返回一个对象，它代表活动工作簿中或指定的窗口或工作簿中的活动工作表（最上面的工作表）。如果没有活动的工作表，则返回 **null** 。 |
| [ActiveSheetView](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ActiveSheetView) | 返回一个对象，该对象代表指定窗口中活动工作表的视图。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Application) | 如果不使用对象识别符，则该属性返回一个 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **[Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)** 对象。只读。 |
| [AutoFilterDateGrouping](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/AutoFilterDateGrouping) | 如果用于日期分组的自动筛选器当前显示在指定的窗口中，则为 **True** 。可读/写 **Boolean** 类型。 |
| [Caption](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Caption) | 返回或设置一个 **Variant** 值，它代表文档窗口标题栏中显示的名称。 |
| [DisplayFormulas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayFormulas) | 如果窗口正显示公式，则为 **True** ；如果窗口正显示值，则为 **False** 。可读/写 **Boolean** 类型。 |
| [DisplayGridlines](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayGridlines) | 如果显示网格线，则为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayHeadings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayHeadings) | 如果同时显示行标题和列标题，则为 **True** ；如果未显示标题，则为 **False** 。可读/写 **Boolean** 类型。 |
| [DisplayHorizontalScrollBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayHorizontalScrollBar) | 如果显示水平滚动条，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayOutline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayOutline) | 如果显示分级显示符号，则为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayRightToLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayRightToLeft) | 如果指定的窗口或工作表是从右到左显示（而非从左到右），则为 **True** 。如果对象从左到右显示，则为 **False** 。 **Boolean** 类型，只读。 |
| [DisplayRuler](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayRuler) | 如果在指定窗口中显示标尺，则为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayVerticalScrollBar](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayVerticalScrollBar) | 如果显示垂直滚动条，则该属性值为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayWhitespace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayWhitespace) | 如果显示空白，则为 **True** 。可读/写 **Boolean** 类型。 |
| [DisplayWorkbookTabs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayWorkbookTabs) | 如果显示工作簿标签，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayZeros](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/DisplayZeros) | 如果显示零值，则为 **True** 。可读/写 **Boolean** 类型。 |
| [EnableResize](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/EnableResize) | 如果能够调整窗口大小，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [FreezePanes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/FreezePanes) | 如果拆分窗格被冻结，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [GridlineColor](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/GridlineColor) | 以 RGB 值返回或设置网格线颜色。 **Long** 类型，可读写。 |
| [GridlineColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/GridlineColorIndex) | 返回或设置网格线颜色，其值为当前调色板中的索引，或为下列 **[XlColorIndex](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/enum/XlColorIndex)** 常量。 |
| [Height](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Height) | 返回或设置一个 Double 值，它代表窗口的高度（以磅为单位）。 |
| [Hwnd](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Hwnd) | 返回一个 **Long** 类型的值，该值指示指定窗口的窗口句柄。 此为只读属性。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [Left](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Left) | 返回一个 **Double** 值，它代表从客户区左边缘到窗口左边缘的距离（以磅为单位）。 |
| [OnWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/OnWindow) | 返回或设置每当激活一个窗口时要运行的过程的名称。 **String** 型，可读写。 |
| [Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Panes) | 返回一个 **[Panes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Panes/obj)** 集合，该集合表示指定窗口中的所有窗格。只读。 |
| [RangeSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/RangeSelection) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示指定窗口中工作表上的选定单元格，即使工作表上一个图形对象是活动或选定的。只读。 |
| [ScrollColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ScrollColumn) | 返回或设置指定窗格或窗口最左边的列号。 **Long** 型，可读写。 |
| [ScrollRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/ScrollRow) | 返回或设置指定窗格或窗口最上面显示的行号。 **Long** 型，可读写。 |
| [SelectedSheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SelectedSheets) | 返回一个 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合，该集合表示指定窗口中所有选定工作表。只读。 |
| [Selection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Selection) | 返回一个指定窗口的Selection对象。 |
| [SheetViews](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SheetViews) | 返回指定窗口的 **[SheetViews](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SheetViews)** 对象。只读。 |
| [Split](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Split) | 如果指定窗口被拆分，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SplitColumn](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SplitColumn) | 返回或设置将指定窗口拆分成窗格处的列号（拆分线左侧的列数）。 **Long** 类型，可读写。 |
| [SplitHorizontal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SplitHorizontal) | 以磅（磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位返回或设置窗口水平拆分线的位置。 **Double** 类型，可读写。 |
| [SplitRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SplitRow) | 返回或设置将指定窗口拆分成窗格处的行号（拆分线以上的行数）。 **Long** 类型，可读写。 |
| [SplitVertical](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/SplitVertical) | 以磅（磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位返回或设置窗口垂直拆分线的位置。 **Double** 类型，可读写。 |
| [TabRatio](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/TabRatio) | 返回或设置工作簿中工作表标签区域的宽度与窗口水平滚动条的宽度比例（可为 0 到 1 之间的数字；默认值为 0.6）。 **Double** 类型，可读写。 |
| [Top](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Top) | 返回或设置一个 **Double** 值，它代表从窗口上边缘到可用区域（在菜单、任何停放在顶端的工具栏和编辑栏下方）上边缘的距离（以磅为单位）。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Type) | 返回一个代表窗口类型的 **[XlWindowType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlWindowType)** 值，只读。 |
| [UsableHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/UsableHeight) | 返回在应用程序窗口区域中一个窗口能占有的最大高度（以磅为单位）。 **Double** 型，只读。 |
| [UsableWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/UsableWidth) | 返回在应用程序窗口区域中一个窗口能占有的最大宽度（以磅为单位）。 **Double** 型，只读。 |
| [View](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/View) | 返回或设置在窗口中显示的视图。 **[XlWindowView](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlWindowView)** 类型，可读写。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Visible) | 返回或设置一个 **Boolean** 值，它确定对象是否可见。可读写。 |
| [VisibleRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/VisibleRange) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，它代表显示在窗口或窗格中的单元格区域。如果列或行只显示了一部分，则说明它是包括在区域之内的。只读。 |
| [Width](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Width) | 返回或设置一个 **Double** 值，它代表窗口的宽度（以磅为单位）。 |
| [WindowNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/WindowNumber) | 返回窗口号。例如，名称为“Book1.xls:2”的窗口，其窗口号为 2。大多数窗口的窗口号为 1。 **Long** 类型，只读。 |
| [WindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/WindowState) | 返回或设置窗口的状态。 **[XlWindowState](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlWindowState)** 类型，可读写。 |
| [Zoom](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Window/member/Zoom) | 返回或设置一个 **Variant** 值，它代表窗口的显示大小，以百分数表示（100 表示正常大小，200 表示双倍大小，以此类推）。 |