# QueryTable 对象

代表一个利用从外部数据源（如 SQL Server 或 Access 数据库）返回的数据生成的工作表表格。

## 说明


 **QueryTable** 对象是 **QueryTables** 集合的成员。


## 示例


```JavaScript
/*此示例开启对第一张工作表上新增查询表的列宽自动调整，并刷新该查询表。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Worksheets.Item(1).QueryTables.Add(connection, Range("I1"), "SELECT * FROM `student`")
    qyTable.AdjustColumnWidth = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示工作表 Sheet1 上包含 B1 单元格的查询表的查询类型是否为 xlOLEDBQuery。*/
function test() {
    let qyTable = Application.Worksheets.Item("Sheet1").Range("B1").QueryTable
    alert(qyTable.QueryType == xlOLEDBQuery)
}
```

{#objmember}

## 方法

| **名称** | **说明** |
| :------ | :------- |
| [Delete](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Delete) | 删除对象。 |
| [Refresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Refresh) | 更新外部数据区域 ( **QueryTable** )。 |
## 属性

| **名称** | **说明** |
| :------ | :------- |
| [AdjustColumnWidth](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/AdjustColumnWidth) | 如果每次刷新指定的查询表时列宽都会自动调整为最适合的宽度，则为 **True** 。如果每次刷新时列宽不进行自动调整，则为 **False** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [Application](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Application) | 如果不与对象识别符一起使用，则此属性返回代表 ET 应用程序的 **Application** 对象。如果与对象识别符一起使用，则此属性返回代表指定对象的创建者的 **Application** 对象（可对 OLE 自动操作对象使用此属性来返回该对象的应用程序）。只读。 |
| [BackgroundQuery](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/BackgroundQuery) | 如果查询表的查询是异步执行（在后台执行）的，则为 **True** 。 **Boolean** 类型，可读写。 |
| [CommandText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/CommandText) | 返回或设置指定数据源的命令串。 **Variant** 型，可读写。 |
| [CommandType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/CommandType) | 返回或设置备注部分的下表中列出的 **XlCmdType** 常量之一。返回或设置的常量用于描述 **CommandText** 属性的值。默认值为 **xlCmdSQL** 。 **XlCmdType** 类型，可读写。 |
| [Connection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Connection) | 返回或设置包含下列某项的字符串：允许 ET 连接到 OLE DB 数据源的 OLE DB 设置；允许 ET 连接到 ODBC 数据源的 ODBC 设置；允许 ET 连接到 Web 数据源的 URL；或者文本文件的名称或路径，或是指定某个数据库或 Web 查询的文件名称或路径。 **Variant** 型，可读写。 |
| [Creator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Creator) | 返回一个 32 位整数，该整数指示在其中创建此对象的应用程序。只读 **Long** 类型。 |
| [Destination](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Destination) | 返回查询表目标区域（查询结果表放置的区域）的左上角单元格。目标区域必须位于包含 **QueryTable** 对象的工作表中。 **Range** 类型，只读。 |
| [EnableEditing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/EnableEditing) | 如果允许用户对指定查询表进行编辑，则该值为 **True** ；如果用户只能刷新查询表，则该值为 **False** 。 **Boolean** 类型，可读写。 |
| [EnableRefresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/EnableRefresh) | 如果用户可刷新数据透视表高速缓存或查询表，则为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [FetchedRowOverflow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/FetchedRowOverflow) | 如果上次使用 **Refresh** 方法返回的行数比工作表中可用行数大，则该值为 **True** 。 **Boolean** 类型，只读。 |
| [FieldNames](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/FieldNames) | 如果数据源的字段名称作为返回数据的列标题显示，则该值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [FillAdjacentFormulas](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/FillAdjacentFormulas) | 如果每当查询表刷新时，指定查询表右侧的公式就自动更新，则该属性值为 **True** 。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [ListObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/ListObject) | 为 **QueryTable** 对象返回一个 **ListObject** 对象。 **ListObject** 对象类型，只读。 |
| [MaintainConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/MaintainConnection) | 如果从刷新数据开始直至关闭工作簿，都一直保留指向指定数据源的连接，则为 **True** 。默认值是 **True** 。 **Boolean** 类型，可读写。 |
| [Name](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Name) | 返回或设置一个 **String** 值，它代表对象的名称。 |
| [Parent](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Parent) | 返回指定对象的父对象。只读。 |
| [PostText](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/PostText) | 返回或设置用于 post 方法的字符串，post 方法用于向 Web 服务器输入数据以从 Web 查询中返回数据。 **String** 类型，可读写。 |
| [PreserveColumnInfo](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/PreserveColumnInfo) | 如果每次刷新查询表时，列排序、筛选和布局信息都会保留，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [PreserveFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/PreserveFormatting) | 如果将数据前五行的任何常用格式设置应用到查询表的新数据行，则为 **True** 。对未使用的单元格不进行格式设置。如果将应用到查询表的最新一次自动套用格式应用于新数据行，则属性为 **False** 。默认值是 **True** 。 |
| [QueryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/QueryType) | 表示 ET 填充查询表时所使用的查询类型。 **XlQueryType** 类型，只读。 |
| [RefreshOnFileOpen](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/RefreshOnFileOpen) | 如果每次打开工作簿时，数据透视表高速缓存或查询表自动更新，则为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [RefreshPeriod](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/RefreshPeriod) | 返回或设置两次刷新之间的时间间隔。 **Long** 型，可读写。 |
| [RefreshStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/RefreshStyle) | 返回或设置为了容纳查询返回的记录集中的行数而在指定工作表中插入或删除行时所使用的方式。 **XlCellInsertionMode** 类型。可读写。 |
| [Refreshing](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/Refreshing) | 如果指定的查询表正在进行后台查询，则为 **True** 。 **Boolean** 类型，只读。 |
| [ResultRange](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/ResultRange) | 返回一个 **Range** 对象，该对象代表指定查询表所覆盖的工作表区域。只读。 |
| [RobustConnect](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/RobustConnect) | 返回或设置数据透视表缓存与其数据源连接的方式。 **XlRobustConnect** 类型，可读写。 |
| [RowNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/RowNumbers) | 如果行号作为第一列添加到指定查询表，则该属性值为 **True** 。 **Boolean** 类型，可读写。 |
| [SaveData](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/SaveData) | 如果将查询表的数据随工作簿一起保存，则为 **True** 。如果仅保存查询表的定义，则为 **False** 。 **Boolean** 类型，可读写。 |
| [SavePassword](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/SavePassword) | 如果将 ODBC 连接字符串中的密码信息与指定查询一起保存，则为 **True** 。如果不保存密码信息，则该值为 **False** 。 **Boolean** 类型，可读写。 |
| [SourceConnectionFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/SourceConnectionFile) | 返回或设置一个 **String** 值，它指明用于创建查询表的 ET 数据连接文件或类似文件。可读写。 |
| [SourceDataFile](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/SourceDataFile) | 返回或设置一个 **String** 值，它指明查询表的源数据文件。 |
| [TextFileColumnDataTypes](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileColumnDataTypes) | 返回或设置一个有序的常量数组，用于指定文本文件中相应列的数据类型，而该文本文件则是正要导入查询表中的文本文件。每一列的默认常量为 **xlGeneral** 。 **Variant** 类型，可读写。 |
| [TextFileCommaDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileCommaDelimiter) | 如果将文本文件导入查询表中时，以逗号作为分隔符，则该值为 **True** 。如果以其他字符作为分隔符，则该值为 **False** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [TextFileConsecutiveDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileConsecutiveDelimiter) | 当向查询表中导入文本文件时，如果将连续分隔符看作是一个分隔符，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [TextFileDecimalSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileDecimalSeparator) | 返回或设置小数分隔符，在将文本文件导入查询表中时，ET 将使用小数分隔符。默认值为系统小数分隔符。 **String** 类型，可读写。 |
| [TextFileFixedColumnWidths](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileFixedColumnWidths) | 返回或设置一个整数数组，该数组对应于正要向查询表中导入的文本文件的列宽（按字符）。有效的宽度为 1 到 32767 个字符。 **Variant** 类型，可读写。 |
| [TextFileOtherDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileOtherDelimiter) | 返回或设置在向查询表中导入文本文件时用作分隔符的字符。默认值为 **null** 。 **String** 类型，可读写。 |
| [TextFileParseType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileParseType) | 返回或设置要导入查询表的文本文件中数据的列格式。 **XlTextParsingType** 类型，可读写。 |
| [TextFilePlatform](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFilePlatform) | 返回或设置正向查询表中导入的文本文件的原始格式。该属性确定在数据导入过程中使用何种代码页。 **XlPlatform** 类型，可读写。 |
| [TextFilePromptOnRefresh](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFilePromptOnRefresh) | 如果每次刷新查询表时都要指定导入文本文件的名称，则该属性值为 **True** 。 **“导入文本文件”** 对话框允许用户指定路径和文件名。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [TextFileSemicolonDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileSemicolonDelimiter) | 如果在将文本文件导入查询表时使用分号作为分隔符，并且 **TextFileParseType** 属性的值为 **xlDelimited** ，则为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [TextFileSpaceDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileSpaceDelimiter) | 如果向查询表中导入文本文件时，使用空格字符作为分隔符，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [TextFileStartRow](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileStartRow) | 返回或设置向查询表中导入文本文件时进行文本分列的起始行号。其有效值为 1 到 32767 之间的整数。默认值为 1。 **Long** 类型，可读写。 |
| [TextFileTabDelimiter](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileTabDelimiter) | 如果向查询表中导入文本文件时使用 Tab 作为分隔符，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [TextFileTextQualifier](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileTextQualifier) | 返回或设置向查询表中导入文本文件时的文本识别符。文本识别符用于指定包含的数据是文本格式。 **XlTextQualifier** 类型，可读写。 |
| [TextFileThousandsSeparator](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileThousandsSeparator) | 返回或设置向查询表中导入文本文件时 ET 所使用的千位分隔符。默认为系统千位分隔符。 **String** 类型，可读写。 |
| [TextFileTrailingMinusNumbers](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileTrailingMinusNumbers) | 如果为 **True** ，ET 会将导入的数字视为以 - (减) 符号开头的文本作为负号。 如果为 **False** ，则将导入的数字视为以 - 符号开头的文本作为文本。 **Boolean** 类型，可读写。 |
| [WebConsecutiveDelimitersAsOne](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WebConsecutiveDelimitersAsOne) | 当从网页的 HTML \<PRE\> 标记中向查询表导入数据时，如果将连续多个分隔符看作单个分隔符，并且数据将被分列，则该值为 **True** 。如果将连续多个分隔符看作多个分隔符，则该值为 **False** 。默认值是 **True** 。可读/写 **Boolean** 类型。 |
| [WebDisableDateRecognition](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WebDisableDateRecognition) | 向查询表中导入网页时，如果将类似日期的数据当作文本进行处理，则该值为 **True** 。如果使用了日期识别，则该值为 **False** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [WebDisableRedirections](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WebDisableRedirections) | 如果对 **QueryTable** 对象禁用 Web 查询重定向，则该属性的值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [WebFormatting](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WebFormatting) | 返回或设置一个值，该值确定向查询表中导入网页时网页中应用了多少格式设置（如果有）。 **XlWebFormatting** 类型，可读写。 |
| [WebPreFormattedTextToColumns](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WebPreFormattedTextToColumns) | 返回或设置向查询表中导入网页时，是否对网页 HTML \<PRE\> 标记内的数据进行分列。默认值为 **True** 。 **Boolean** 类型，可读写。 |
| [WebSelectionType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WebSelectionType) | 返回或设置一个值，该值决定是向查询表中导入整个网页、网页上的所有表格还是仅网页上的特定表格。 **XlWebSelectionType** 类型，可读写。 |
| [WebSingleBlockTextImport](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WebSingleBlockTextImport) | 向查询表中导入网页时，如果位于指定网页的 HTML \<PRE\> 标记中的数据是同时进行处理的，则该值为 **True** 。如果数据是以连续行的数据块方式导入的，以便能识别标题行，则该值为 **False** 。默认值为 **False** 。 **Boolean** 类型，可读写。 |
| [WebTables](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WebTables) | 向查询表中导入网页时，返回或设置由逗号分隔的表格名称或表格索引号的列表。 **String** 类型，可读写。 |
| [WorkbookConnection](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/WorkbookConnection) | 返回查询表所使用的 **WorkbookConnection** 对象。只读。 |