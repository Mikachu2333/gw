# Workbook 对象

代表一个 ET 工作簿。

## 说明


 **Workbook** 对象是 [Workbooks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/obj) 集合的成员。 **[Workbooks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbooks/obj)** 集合包含 ET 中当前打开的所有 **Workbook** 对象。


## 示例
使用 **Workbooks** (*index*)（其中 *index* 是工作簿名称或索引号）可返回一个 **Workbook** 对象。下例激活工作簿一。



```JavaScript
/*以下示例激活第一个工作簿。*/
function test() {
    Application.Workbooks.Item(1).Activate()
}
```
编号指示创建或打开工作簿的顺序。`Workbooks(1)` 是创建的第一个工作簿，而 `Workbooks(Workbooks.Count)`Workbooks 是最后一个。激活某工作簿并不更改其索引号。所有工作簿均包括在索引计数中，即便是隐藏工作簿也是如此。

[Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Name) 属性返回工作簿名称。您不能通过使用此属性来设置该名称；如果您需要更改该名称，请使用 [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAs) 方法，将该工作簿保存为其他名称。

下例激活名为“Cogs.xls”的工作簿（该工作簿必须已经在 ET 中打开）中的 Sheet1。



```JavaScript
Workbooks("Cogs.xls").Worksheets("Sheet1").Activate()
```
 **ActiveWorkbook** 属性返回当前处于活动状态的工作簿。下例设置活动工作簿作者的名称。



```JavaScript
/*以下示例设置活动工作簿作者的名称。*/
function test() {
    Application.ActiveWorkbook.Author = "Jean Selva"
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [AcceptAllChanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/AcceptAllChanges) | 接受指定共享工作簿中的所有更改。 |
| [Activate](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Activate) | 激活与工作簿相关的第一个窗口。 |
| [ApplyTheme](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ApplyTheme) | 将指定的主题应用于当前工作簿。 |
| [BreakLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/BreakLink) | 将链接到其他 ET 源或 OLE 源的公式转换为值。 |
| [ChangeFileAccess](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ChangeFileAccess) | 更改工作簿的访问权限。本方法需要从磁盘加载工作簿的更新版本。 |
| [ChangeLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ChangeLink) | 将链接从某一文档更改到另一文档。 |
| [Close](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Close) | 关闭对象。 |
| [Colors](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Colors) | 返回或设置工作簿调色板中的颜色。调色板有 56 项，每项以一个 RGB 值表示。 **Variant** 类型，可读/写。 |
| [DeleteNumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/DeleteNumberFormat) | 从工作簿中删除一个自定义数字格式。 |
| [ExclusiveAccess](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ExclusiveAccess) | 指定当前用户对共享清单中的工作簿进行独占访问。 |
| [ExportAsFixedFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ExportAsFixedFormat) | **ExportAsFixedFormat** 方法用于将工作簿发布为 PDF 或 XPS 格式。 |
| [FollowHyperlink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/FollowHyperlink) | 如果已经下载指定文档，则显示缓冲区中的该文档。否则，本方法对指定超链接进行处理以下载目标文档，然后将该文档在适当的应用程序中显示出来。 |
| [HighlightChangesOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/HighlightChangesOptions) | 控制共享工作簿更改的显示方式。 |
| [LinkSources](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/LinkSources) | 返回工作簿中链接的数组。数组中的名称为链接的文档名、版本名、DDE 或 OLE 服务器名。如果工作簿中无链接，则返回 **Empty** 。 |
| [NewWindow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/NewWindow) | 新建一个窗口或者创建指定窗口的副本。返回值类型为Window。 |
| [PivotCaches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PivotCaches) | 返回一个 **[PivotCaches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PivotCaches/obj)** 集合，该集合表示指定工作簿中的所有数据透视表缓存。只读。 |
| [PrintOut](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PrintOut) | 打印对象。 |
| [PrintPreview](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PrintPreview) | 按对象打印后的外观效果显示对象的预览。 |
| [Protect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Protect) | 保护工作簿使其不被修改。 |
| [ProtectSharing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ProtectSharing) | 保存工作簿并设置共享保护。 |
| [RefreshAll](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/RefreshAll) | 刷新指定工作簿中的所有外部数据区域和数据透视表。 |
| [RejectAllChanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/RejectAllChanges) | 取消指定共享工作簿中的所有更改。 |
| [RunAutoMacros](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/RunAutoMacros) | 运行附属于指定工作簿的 Auto\_Open、Auto\_Close、Auto\_Activate 或 Auto\_Deactivate 宏。保留本方法是为了保持向后兼容性。在新的 JavaScript 代码中，应使用 Open、Close、Activate 方法和 Deactivate 事件取代上述宏。 |
| [Save](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Save) | 保存对指定工作簿所做的更改。 |
| [SaveAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAs) | 在另一不同文件中保存对工作簿所做的更改。 |
| [SaveAsXMLData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveAsXMLData) | 将已映射到指定 XML 架构映射的数据导出到 XML 数据文件中。 |
| [SaveCopyAs](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveCopyAs) | 将指定工作簿的副本保存到文件，但不修改内存中的打开工作簿。 |
| [SendMail](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SendMail) | 使用已安装的邮件系统发送工作簿。 |
| [SetPasswordEncryptionOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SetPasswordEncryptionOptions) | 使用密码来设置对工作簿进行加密的选项。 |
| [ToggleFormsDesign](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ToggleFormsDesign) | **ToggleFormsDesign** 方法用于在使用表单控件时将 ET 切换到设计模式。 |
| [Unprotect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Unprotect) | 取消工作表或工作簿的保护。如果工作表或工作簿不是受保护的，则此方法不起作用。 |
| [UnprotectSharing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/UnprotectSharing) | 关闭共享保护功能并保存工作簿。 |
| [UpdateFromFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/UpdateFromFile) | 如果磁盘上的工作簿版本比内存中的当前工作簿副本新，则用磁盘上保存的工作簿文件更新只读工作簿。如果载入工作簿之后，磁盘上的副本无改变，则不必重新载入内存中的副本。 |
| [UpdateLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/UpdateLink) | 更新 ET 链接、DDE 链接或 OLE 链接。 |
| [XmlImport](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/XmlImport) | 将 XML 数据文件导入当前工作簿。 |
| [XmlImportXml](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/XmlImportXml) | 导入先前已被加载到内存的 XML 数据流。ET 使用找到的第一个符合需要的映射；如果未指定目标区域，则 ET 将自动列出该数据。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [ActiveChart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ActiveChart) | 返回一个 **[Chart](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Chart/obj)** 对象，它代表活动图表（嵌入式图表或图表工作表）。嵌入式图表在被选中或激活时被认为是活动的。当没有图表处于活动状态时，此属性返回 **null** 。 |
| [ActiveSheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ActiveSheet) | 返回一个对象，它代表活动工作簿中或指定的窗口或工作簿中的活动工作表（最上面的工作表）。如果没有活动的工作表，则返回 **null** 。 |
| [ActiveSlicer](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ActiveSlicer) | 返回一个对象，该对象代表活动工作簿或指定工作簿中的活动切片器。如果没有切片器处于活动状态，则返回 **null** 。只读。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Application) | 如果不使用对象识别符，则该属性返回一个 [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Application/obj) 对象，该对象表示 ET 应用程序。如果使用对象识别符，则该属性返回一个表示指定对象（可对一个 OLE 自动操作对象使用本属性来返回该对象的应用程序）创建者的 **Application** 对象。只读。 |
| [AutoUpdateFrequency](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/AutoUpdateFrequency) | 以分钟为单位返回或设置对共享工作簿进行自动更新的时间间隔。 **Long** 类型，可读写。 |
| [AutoUpdateSaveChanges](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/AutoUpdateSaveChanges) | 如果共享工作簿自动更新时，对其所做的更改将传送到其他用户，则该值为 **True** 。如果不传送所做的更改（该工作簿还须与其他用户所做的更改保持同步），则该值为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [BuiltinDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/BuiltinDocumentProperties) | 返回一个 **[DocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/obj)** 集合，该集合表示指定工作簿的所有内置文档属性。只读。 |
| [CalculationVersion](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CalculationVersion) | 返回有关工作簿最近一次完全重新计算所使用的 ET 的版本信息。 **Long** 型，只读。 |
| [ChangeHistoryDuration](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ChangeHistoryDuration) | 返回或者设置共享工作簿的修订记录中所要显示修订信息的天数。 **Long** 类型，可读写。 |
| [Charts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Charts) | 返回一个 **[Charts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Charts/obj)** 集合，它代表指定工作簿中的所有图表工作表。 |
| [CheckCompatibility](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CheckCompatibility) | 控制在保存工作簿时是否自动运行兼容性检查器。可读/写 **Boolean** 类型。 |
| [CodeName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CodeName) | 返回对象的代码名。 **String** 型，只读。 |
| [CommandBars](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CommandBars) | 返回一个 **[CommandBars]** 对象，它代表 ET 命令栏。只读。 |
| [ConflictResolution](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ConflictResolution) | 返回或设置更新共享工作簿时解决冲突的方式。 **[XlSaveConflictResolution](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlSaveConflictResolution)** 类型，可读写。 |
| [Connections](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Connections) | **Connections** 属性在工作簿和 ODBC 或 OLEDB 数据源之间建立连接，并在不提示用户的情况下刷新数据。只读。 |
| [CreateBackup](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CreateBackup) | 如果保存文件时创建备份文件，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [CustomDocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CustomDocumentProperties) | 返回或设置一个 **[DocumentProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/DocumentProperties/obj)** 集合，该集合表示指定工作簿的所有自定义文档属性。 |
| [CustomViews](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CustomViews) | 返回一个 **[CustomViews](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/CustomViews/obj)** 集合，该集合表示工作簿的所有自定义视图。 |
| [CustomXMLParts](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/CustomXMLParts) | 返回一个 **[CustomXMLParts](/app-integration-dev/wps365/client/wpsoffice/jsapi/kso/CustomXMLParts/obj)** 集合，该集合代表 XML 数据存储区中的自定义 XML。只读。 |
| [Date1904](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Date1904) | 如果工作簿使用 1904 日期系统，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [DefaultPivotTableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/DefaultPivotTableStyle) | 从 **TableStyles** 集合中指定表样式，该表样式将用作数据透视表的默认样式。可读/写。 |
| [DefaultSlicerStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/DefaultSlicerStyle) | 从 **[TableStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyles/obj)** 对象中指定用作切片器默认样式的样式。可读/写。 |
| [DefaultTableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/DefaultTableStyle) | 指定 **TableStyles** 集合中用作默认 TableStyle 的表样式。可读/写 **Variant** 类型。 |
| [DisplayDrawingObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/DisplayDrawingObjects) | 返回或设置形状的显示方式。 **Long** 类型，可读写。 |
| [DisplayInkComments](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/DisplayInkComments) | 确定墨迹批注是否显示在工作簿中的 **Boolean** 值。 **Boolean** 类型，可读写。 |
| [DoNotPromptForConvert](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/DoNotPromptForConvert) | 返回或设置一个值，该值表示在工作簿包含 ET 2007 以前的 ET 版本所不支持的功能时，是否应该提示用户转换工作簿。可读/写 **Boolean** 类型。 |
| [EnableAutoRecover](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/EnableAutoRecover) | 根据规定的时间间隔保存全部格式的已更改文件。 **Boolean** 类型，可读写。 |
| [EnvelopeVisible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/EnvelopeVisible) | 如果显示电子邮件标题和信封工具栏，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Excel4MacroSheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Excel4MacroSheets) | 返回一个 **[Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj)** 集合，它代表指定工作簿中所有的 ET 4.0 宏表。只读。 |
| [Excel8CompatibilityMode](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Excel8CompatibilityMode) | **Excel8CompatibilityMode** 属性向开发人员提供了一种查看工作簿是否在兼容模式下的方法。只读 **Boolean** 类型。 |
| [FileFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/FileFormat) | 返回工作簿的文件格式和/或类型。[XlFileFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlFileFormat)类型，只读。 |
| [Final](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Final) | 返回或设置一个 **Boolean** 类型的值，该值指示工作簿是否是最终的。可读/写 **Boolean** 类型。 |
| [ForceFullCalculation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ForceFullCalculation) | 返回指定的工作簿是否处于强制计算模式，或者将其设置为强制计算模式。可读/写。 |
| [FullName](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/FullName) | 返回对象的名称（以字符串表示），包括其磁盘路径。 **String** 型，只读。 |
| [FullNameURLEncoded](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/FullNameURLEncoded) | 返回一个 **String** 值，该值表示对象名称（包括其磁盘路径）。只读。 |
| [HasPassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/HasPassword) | 如果指定工作簿有密码保护，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [HasVBProject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/HasVBProject) | 返回一个 **Boolean** 类型的值，该值代表工作簿是否具有附加的 VBA 项目。只读 **Boolean** 类型。 |
| [HighlightChangesOnScreen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/HighlightChangesOnScreen) | 如果将指定共享工作簿的更改在屏幕上突出显示，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IconSets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/IconSets) | 此属性用于基于 **IconSet** 集合中的单元格图标对工作簿中的数据进行筛选。只读。 |
| [InactiveListBorderVisible](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/InactiveListBorderVisible) | 一个 **Boolean** 值，指定当列表不处于活动状态时，此列表（列表：包含相关数据的一系列行，或使用 “创建列表” 命令作为数据表指定给函数的一系列行。）的边框是否可见。如果边框可见，则返回 **True** 。 **Boolean** 类型，可读写。 |
| [IsAddin](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/IsAddin) | 如果指定工作簿作为加载宏运行，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [IsInplace](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/IsInplace) | 如果指定工作簿正在适当位置上进行编辑，则该值为 **True** 。如果该工作簿已在 ET 中打开，并准备进行编辑，则该值为 **False** 。 **Boolean** 类型，只读。 |
| [KeepChangeHistory](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/KeepChangeHistory) | 如果对共享工作簿启用了修订记录功能，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ListChangesOnNewSheet](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ListChangesOnNewSheet) | 如果在单个工作表中显示共享工作簿的更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [MultiUserEditing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/MultiUserEditing) | 如果工作簿以共享列表方式打开，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Name) | 返回一个 **String** 值，它代表对象的名称。 |
| [Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Names) | 返回一个 **[Names](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Names/obj)** 集合，它代表指定工作簿的所有名称（包括所有指定工作表的名称）。 **Names** 对象，只读。 |
| [Password](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Password) | 返回或设置在打开指定工作簿时必须提供的密码。 **String** 类型，可读写。 |
| [PasswordEncryptionAlgorithm](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PasswordEncryptionAlgorithm) | 返回一个 **String** 类型的数值，该数值表示 ET 对指定的工作簿编写密码时使用的算法。只读。 |
| [PasswordEncryptionFileProperties](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PasswordEncryptionFileProperties) | 如果 ET 对受密码保护的指定工作簿的文件属性进行加密，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [PasswordEncryptionKeyLength](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PasswordEncryptionKeyLength) | 返回一个 **Long** 类型的数值，该数值表示在对指定工作簿加密时 ET 使用的算法的密钥长度。只读。 |
| [PasswordEncryptionProvider](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PasswordEncryptionProvider) | 返回一个 **String** 类型的字符串，该数值指定在对指定工作簿加密时 ET 使用的算法加密提供程序的名称。只读。 |
| [Path](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Path) | 返回一个 String 类型的值，该值代表此工作簿对象所表示的工作簿/文件的完整路径。 |
| [PersonalViewListSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PersonalViewListSettings) | 如果在共享工作簿的用户个人视图中包括列表的筛选和排序设置，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PersonalViewPrintSettings](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PersonalViewPrintSettings) | 如果在共享工作簿的用户个人视图中包括打印设置，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [PrecisionAsDisplayed](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PrecisionAsDisplayed) | 如果工作簿中的计算将按照屏幕显示的数字精度完成，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ProtectStructure](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ProtectStructure) | 如果工作簿中的工作表次序处于保护状态，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [ProtectWindows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ProtectWindows) | 如果工作簿窗口受保护，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/PublishObjects) | 返回 **[PublishObjects](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/PublishObjects/obj)** 集合。只读。 |
| [ReadOnly](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ReadOnly) | 如果对象以只读方式打开，则返回 **True** 。 **Boolean** 类型，只读。 |
| [ReadOnlyRecommended](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ReadOnlyRecommended) | 如果工作簿以建议只读方式保存，则该属性值为 **True** 。 **Boolean** 类型，只读。 |
| [RemovePersonalInformation](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/RemovePersonalInformation) | 如果能从指定的工作簿中删除个人信息，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [RevisionNumber](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/RevisionNumber) | 返回指定工作簿以共享清单方式打开后已保存的次数。如果该工作簿以独占模式打开，则该值为 0（零）。 **Long** 类型，只读。 |
| [SaveLinkValues](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SaveLinkValues) | 如果 ET 保存指定工作簿的外部链接值，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Saved](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Saved) | 如果指定工作簿从上次保存至今未发生过更改，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Sheets) | 返回一个 [Sheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Sheets/obj) 集合，它代表指定工作簿中所有工作表。 **Sheets** 对象，只读。 |
| [ShowConflictHistory](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ShowConflictHistory) | 如果“冲突的历史记录”工作表在作为共享列表打开的工作簿中可见，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [ShowPivotChartActiveFields](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ShowPivotChartActiveFields) | 此属性控制数据透视图筛选窗格的可见性。可读/写 **Boolean** 类型。 |
| [ShowPivotTableFieldList](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/ShowPivotTableFieldList) | 如果该属性值为 **True** （默认），则能显示数据透视表字段列表。 **Boolean** 类型，可读写。 |
| [SlicerCaches](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/SlicerCaches) | 表示与指定工作簿关联的切片器缓存的集合。 |
| [Styles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Styles) | 返回一个 **[Styles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Styles/obj)** 集合，该集合表示指定工作簿中的所有样式。只读。 |
| [TableStyles](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/TableStyles) | 返回当前工作簿的一个 **TableStyles** 集合对象，该对象引用当前工作簿中所使用的样式。只读。 |
| [TemplateRemoveExtData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/TemplateRemoveExtData) | 如果工作簿保存为模板时删除外部数据引用，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [Theme](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Theme) | 返回应用于当前工作簿的主题。只读。 |
| [UpdateLinks](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/UpdateLinks) | 返回或设置一个 **[XlUpdateLink](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlUpdateLinks)** 常量，该常量指示更新嵌入 OLE 链接的工作簿设置。可读写。 |
| [UpdateRemoteReferences](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/UpdateRemoteReferences) | 如果 ET 对工作簿中的远程引用进行更新，则该值为 **True** 。 **Boolean** 类型，可读写。 |
| [UserStatus](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/UserStatus) | 返回一个基为 1 的二维数组，该数组提供有关每一个以共享列表模式打开工作簿的用户的信息。 **Variant** 类型，只读。 |
| [WebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/WebOptions) | 返回一个 **[WebOptions](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/WebOptions/obj)** 集合，该集合中包含以网页格式保存文档或打开网页时 ET 所使用的工作簿级别属性。只读。 |
| [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Windows) | 返回一个 [Windows](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Windows/obj) 集合，它代表指定工作簿中所有窗口。 **Windows** 对象，只读。 |
| [Worksheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/Worksheets) | 返回一个 [Worksheets](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Worksheets/obj) 集合，它代表指定工作簿中所有工作表。 **Worksheets** 对象，只读。 |
| [WritePassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/WritePassword) | 为工作簿的写密码返回或设置一个 **String** 类型的数值。可读写。 |
| [WriteReserved](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/WriteReserved) | 如果指定工作簿是写保护的，则该属性的值为 **True** 。 **Boolean** 类型，只读。 |
| [WriteReservedBy](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/WriteReservedBy) | 返回当前对指定工作簿有写权限的用户的名称。 **String** 类型，只读。 |
| [XmlMaps](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/XmlMaps) | 返回一个 **XmlMaps** 集合，该集合表示已被添加到指定工作簿的架构映射。只读。 |
| [XmlNamespaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Workbook/member/XmlNamespaces) | 返回一个 **[XmlNamespaces](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/XmlNamespaces/obj)** 集合，该集合表示包含在指定工作簿中的 XML 命名空间。只读。 |