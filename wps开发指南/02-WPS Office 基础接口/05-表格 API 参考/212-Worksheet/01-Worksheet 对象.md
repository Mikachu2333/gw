# Worksheet 对象

代表一个工作表。

## 说明


 **Worksheet** 对象是 [Worksheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/obj) 集合的成员。 **Worksheets** 集合包含某个工作簿中所有的 **Worksheet** 对象。

 **Worksheet** 对象也是 [Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj) 集合的成员。 **Sheets** 集合包含工作簿中所有的工作表（图表工作表和工作表）。

使用 [Worksheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/obj)( *index*)（其中 *index* 是工作表索引号或名称）可返回一个 **Worksheet** 对象。


## 示例


```JavaScript
/*本示例隐藏活动工作簿中第一张工作表。*/
function test() {
    Application.Worksheets.Item(1).Visible = false
}
```
工作表索引号指示该工作表在工作簿的标签栏上的位置。`Worksheets(1)` 是工作簿中第一个（最左边的）工作表，而 `Worksheets(Worksheets.Count)` 是最后一个。所有工作表均包括在索引计数中，即便是隐藏工作表也是如此。

工作表名称显示在该工作表的标签上。使用 [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Name) 属性可设置或返回工作表名称。



```JavaScript
/*本示例提醒用户输入密码，并用该密码保护工作表Sheet1上的方案。*/
function test() {
    let strPassword = InputBox("Enter the password for the worksheet")
    Application.Worksheets.Item("Sheet1").Protect(strPassword, null, null, true)
}
```
当工作表处于活动状态时，可以使用ActiveSheet属性来引用它。



```JavaScript
/*本示例激活工作表 Sheet1，将页面方向设置为横向，然后打印该工作表。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.ActiveSheet.PageSetup.Orientation = xlLandscape
    Application.ActiveSheet.PrintOut()
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Activate) | 使当前工作表成为活动工作表。 |
| [Calculate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Calculate) | 计算所有打开的工作簿、工作簿中的某张特定工作表或工作表指定区域中的单元格，如下表所示。 |
| [ChartObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ChartObjects) | 返回一个对象，它代表工作表上的一个嵌入式图表（ **[ChartObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObject/obj)** 对象）或所有嵌入式图表的集合（ **[ChartObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ChartObjects/obj)** 对象）。 |
| [CheckSpelling](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/CheckSpelling) | 检查对象的拼写。 |
| [CircleInvalid](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/CircleInvalid) | 对工作表中的无效数据项进行圈释。 |
| [ClearArrows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ClearArrows) | 清除指定工作表的追踪箭头。使用审核功能可添加追踪箭头。 |
| [ClearCircles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ClearCircles) | 清除指定工作表的无效数据项的圈释。 |
| [Copy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Copy) | 将工作表复制到工作簿的另一位置。 |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Delete) | 删除对象。 |
| [Evaluate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Evaluate) | 将一个 ET 名称转换为一个对象或者一个值。 |
| [ExportAsFixedFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ExportAsFixedFormat) | 导出为指定格式的文件。 |
| [Move](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Move) | 将工作表移到工作簿中的其他位置。 |
| [OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/OLEObjects) | 返回一个对象，它代表图表或工作表上的单个 OLE 对象 ( **[OLEObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObject/obj)** ) 或所有 OLE 对象的集合（ **[OLEObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/OLEObjects/obj)** 集合）。只读。 |
| [Paste](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Paste) | 将“剪贴板”中的内容粘贴到工作表上。 |
| [PasteSpecial](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/PasteSpecial) | 以指定格式将剪贴板中的内容粘贴到工作表上。可用本方法从其他应用程序中粘贴数据，或以特定格式粘贴数据。 |
| [PivotTableWizard](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/PivotTableWizard) | 创建一个新的数据透视表。此方法不显示“数据透视表向导”，它不适用于 OLE DB 数据源。请使用 **[Add](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTables/member/Add)** 方法添加数据透视表缓存，然后创建基于该缓存的数据透视表。 |
| [PivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/PivotTables) | 返回一个对象，该对象表示工作表上的单个数据透视表（ **[PivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTable/obj)** 对象）或所有数据透视表的集合（ **[PivotTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotTables/obj)** 对象）。只读。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/PrintOut) | 打印对象。 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/PrintPreview) | 按对象打印后的外观效果显示对象的预览。 |
| [Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect) | 保护工作表使其不能被修改。 |
| [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Range) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象，它代表一个单元格或单元格区域。 |
| [ResetAllPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ResetAllPageBreaks) | 重新设置指定工作表上的所有分页符。 |
| [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/SaveAs) | 将对图表或工作表的更改保存到另一不同文件中。 |
| [Select](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Select) | 选择对象。 |
| [SetBackgroundPicture](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/SetBackgroundPicture) | 为工作表设置背景图形。 |
| [ShowAllData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ShowAllData) | 使当前筛选列表的所有行均可见。如果正在使用自动筛选，则本方法将下拉列表框内容改为“（全部）”。 |
| [ShowDataForm](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ShowDataForm) | 显示与指定工作表相关联的数据表单。 |
| [Unprotect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Unprotect) | 取消工作表或工作簿的保护。如果工作表或工作簿不是受保护的，则此方法不起作用。 |
| [XmlDataQuery](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/XmlDataQuery) | 返回一个代表映射到特定 XPath 的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。如果指定的 XPath 路径尚未映射到工作表，或者映射的区域为空，则返回 **null** 。 |
| [XmlMapQuery](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/XmlMapQuery) | 返回一个代表映射到特定 XPath 的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。如果指定的 XPath 路径尚未映射到工作表，则返回 **null** 。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Application) | 如果不使用对象识别符，则该属性返回一个 [Application ](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj)对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/AutoFilter) | 如果筛选已打开，则返回一个 **AutoFilter** 对象。只读。 |
| [AutoFilterMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/AutoFilterMode) | 如果当前在工作表上显示有“自动筛选”下拉箭头，则该值为 **True** 。本属性与 **FilterMode** 属性互相独立。 **Boolean** 类型，可读写。 |
| [Cells](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Cells) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)对象，它代表工作表中的所有单元格（不仅仅是当前使用的单元格）。 |
| [CircularReference](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/CircularReference) | 返回一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象，该对象表示工作表上包含第一个循环引用的区域，或返回 **null** （如果工作表上没有循环引用）。在继续执行计算之前，必须删除循环引用。 |
| [CodeName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/CodeName) | 返回对象的代码名。 **String** 型，只读。 |
| [Columns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Columns) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)对象，它代表活动工作表中的所有列。如果活动文档不是工作表，则 **Columns** 属性失效。 |
| [Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Comments) | 返回一个 **[Comments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Comments/obj)** 集合，该集合表示指定工作表的所有注释。只读。 |
| [ConsolidationFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ConsolidationFunction) | 返回当前合并计算所使用的函数代码。可以是 **[XlConsolidationFunction](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlConsolidationFunction)** 常量之一。 **Long** 类型，只读。 |
| [ConsolidationOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ConsolidationOptions) | 返回表示合并计算选项的三元素数组，如下表所示。某元素为 **True** 就表示设置了该选项。 **Variant** 类型，只读。 |
| [ConsolidationSources](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ConsolidationSources) | 返回一个字符串数组，这些字符串是工作表中当前合并计算的数据源的名称。如果工作表中没有合并计算，将返回 **undefined** 。 **Variant** 类型，只读。 |
| [CustomProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/CustomProperties) | 返回一个 **[CustomProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomProperties/obj)** 对象，该对象表示与工作表相关的标识符信息。 |
| [DisplayPageBreaks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/DisplayPageBreaks) | 如果显示指定工作表中的分页符（包括自动和手动分页符），则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DisplayRightToLeft](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/DisplayRightToLeft) | 如果指定工作表是从右到左显示（而非从左到右），则为 **True** 。如果对象从左到右显示，则为 **False** 。 **Boolean** 类型，可读写。 |
| [EnableAutoFilter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/EnableAutoFilter) | 如果当仅限于用户界面保护处于打开状态时，启用自动筛选箭头，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableCalculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/EnableCalculation) | 如果在必要的情况下 ET 自动重新计算工作表，则该值为 **True** 。如果 ET 不重新计算工作表，则该值为 **False** 。 **Boolean** 类型，可读写。 |
| [EnableFormatConditionsCalculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/EnableFormatConditionsCalculation) | 返回或设置是否在需要时自动计算条件格式。可读/写 **Boolean** 类型。 |
| [EnableOutlining](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/EnableOutlining) | 如果当仅限于用户界面保护处于打开状态时，启用分级显示符号，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnablePivotTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/EnablePivotTable) | 如果当仅限于用户界面保护处于打开状态时，启用数据透视表控件和操作，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [EnableSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/EnableSelection) | 返回或设置工作表中可被选择的内容。 **[XlEnableSelection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlEnableSelection)** 类型，可读写。 |
| [FilterMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/FilterMode) | 如果工作表处于筛选模式，则为 **True** 。只读 **Boolean** 类型。 |
| [Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Hyperlinks) | 返回 **[Hyperlinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Hyperlinks/obj)** 集合，它代表区域的超链接。 |
| [Index](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Index) | 返回 **Long** 值，它代表对象在其同类对象所组成的集合内的索引号。 |
| [ListObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ListObjects) | 返回工作表中 **[ListObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/obj)** 对象的集合。 **ListObjects** 集合，只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Names) | 返回一个 [Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)集合，它代表所有特定于工作表的名称（使用“WorksheetName!”前缀定义的名称）。 **Names** 对象，只读。 |
| [Next](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Next) | 返回代表下一个工作表的 [Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)对象。 |
| [Outline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Outline) | 返回一个 **[Outline](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Outline/obj)** 对象，该对象表示指定工作表的分级显示。只读。 |
| [PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/PageSetup) | 返回一个 **[PageSetup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PageSetup/obj)** 对象，它包含用于指定对象的所有页面设置。只读。 |
| [Previous](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Previous) | 返回代表上一个工作表的 [Worksheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/obj)对象。 |
| [PrintedCommentPages](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/PrintedCommentPages) | 返回将为当前工作表打印的批注页的数量。只读。 |
| [ProtectContents](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ProtectContents) | 如果工作表内容是受保护的，则为 **True** 。此属性保护单独的单元格。要打开内容保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法，并将 _Contents_ 参数设置为 **True** 。 **Boolean** 类型，只读。 |
| [ProtectDrawingObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ProtectDrawingObjects) | 如果形状是受保护的，则为 **True** 。要打开形状保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法，并将 _DrawingObjects_ 参数设置为 **True** 。 **Boolean** 类型，只读。 |
| [ProtectScenarios](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ProtectScenarios) | 如果工作表的方案处于保护状态，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Protection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protection) | 返回一个 [Protection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Protection/obj) 对象，该对象表示工作表的保护选项。 |
| [ProtectionMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ProtectionMode) | 如果启用了用户界面专用保护，则为 **True** 。要打开用户界面保护，请使用 **[Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Protect)** 方法，并将 _UserInterfaceOnly_ 参数设置为 **True** 。 **Boolean** 类型，只读。 |
| [QueryTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/QueryTables) | 返回 **[QueryTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTables/obj)** 集合，该集合表示指定工作表上的所有查询表。只读。 |
| [Rows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Rows) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象，它代表指定工作表中的所有行。 **Range** 对象，只读。 |
| [ScrollArea](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/ScrollArea) | 以 A1 样式的区域引用形式返回或设置允许滚动的区域。用户不能选定滚动区域之外的单元格。 **String** 类型，可读写。 |
| [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Shapes) | 返回一个 [Shapes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Shapes/obj)集合，它代表工作表上的所有形状。只读。 |
| [Sort](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Sort) | 返回 Sort 对象。只读属性。 |
| [StandardHeight](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/StandardHeight) | 以磅 （磅：指打印的字符的高度的度量单位。1 磅等于 1/72 英寸，或大约等于 1 厘米的 1/28。）为单位返回工作表中所有行的标准高度（默认值）。 **Double** 类型，只读。 |
| [StandardWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/StandardWidth) | 返回或设置工作表中所有列的标准列宽（默认值）。 **Double** 类型，可读写。 |
| [Tab](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Tab) | 返回一个工作表的 **[Tab](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Tab/obj)** 对象。 |
| [TransitionExpEval](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/TransitionExpEval) | 如果 ET 对工作表使用 Lotus 1-2-3 的表达式求值规则，则该属性的值为 **True** 。 **Boolean** 类型，可读写。 |
| [TransitionFormEntry](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/TransitionFormEntry) | 如果 ET 对工作表使用 Lotus 1-2-3 的公式输入规则，则该属性的值为 **True** 。 **Boolean** 类型，可读写。 |
| [Type](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Type) | 返回一个代表工作表类型的 [XlSheetType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSheetType)值。 |
| [UsedRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/UsedRange) | 返回一个 [Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj) 对象，该对象表示指定工作表上所使用的区域。只读。 |
| [Visible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheet/member/Visible) | 返回或设置一个 [XlSheetVisibility](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSheetVisibility) 值，它确定对象是否可见。 |