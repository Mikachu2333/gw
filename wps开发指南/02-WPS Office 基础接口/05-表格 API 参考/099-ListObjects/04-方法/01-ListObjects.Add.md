# ListObjects.Add

创建新的列表对象。



## 语法

express.**Add(SourceType, Source, LinkSource, XlListObjectHasHeaders, Destination, TableStyleName)**

express   一个代表 **ListObjects** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| SourceType | 可选 | XlListObjectSourceType | 表示查询的来源类型。 |
| Source | 可选 | any | 当 SourceType 为 **xlSrcRange** 时，它是代表数据源的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。如果省略该参数，Source 的默认值将是列表区域检测代码返回的区域。当 SourceType 为 **xlSrcExternal** 时，它是一个 String 值数组，用于指定与数据源的连接，包含以下元素： 0 ― SharePoint 网站的 URL 1 ― ListName 2 ― ViewGUID，当 SourceType = **xlSrcQuery** 时，接受 ODBC 或 OLEDB 连接字符串 (这也适用于 **xlSrcExternal** ) 。当 SourceType = **xlSrcModel** 时，接受 WorkbookConnection 对象 (请参阅 **[TableObject](#TODO)** ，例如) 。 |
| LinkSource | 可选 | any | Boolean 型。表示外部数据源是否链接到 **ListObject** 对象。如果 SourceType 为 **xlSrcExternal** ，则默认值为 **True** 。如果 SourceType 为 **xlSrcRange** ，则此参数无效，如果不省略它，将会返回一个错误。 |
| XlListObjectHasHeaders | 可选 | XlYesNoGuess | 一个 **XlYesNoGuess** 常量，它指示正在导入的数据是否有列标签。如果 Source 没有标题，ET 将自动生成标题，默认值： **xlGuess** 。 |
| Destination | 可选 | any | 一个 **Range** 对象，作用是将一个单元格引用指定为新列表对象左上角的目标区域。如果 **Range** 对象引用多个单元格，则会产生错误。当 SourceType 设置为 **xlSrcExternal** 时，必须指定 Destination 参数。如果 SourceType 设置为 **xlSrcRange** ，则忽略 Destination 参数。目标区域所在的工作表必须是包含 expression 所指定的 **ListObjects** 集合的工作表。新列的插入位置将是 Destination 以适应新列表。因此，现有数据不会被覆盖。 |
| TableStyleName | 可选 | any | **[TableStyle](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/TableStyle/obj)** 的名称；例如“TableStyleLight1”。 |

## 返回值

一个 ListObject 对象，它代表新的列表对象。

## 说明


当列表有标题时，第一行单元格将转换为 **Text** （如果还未被设为文本）。转换将基于单元格的可见文本。这意味着，如果有一个日期值，该日期值的 **Date** 格式随区域设置的更改而更改，则对列表的转换可能产生不同的结果，具体取决于当前的系统区域设置。而且，如果标题行中有两个单元格包含相同的可见文本，则会追加递增的 **Integer** 以使每个列标题唯一。



## 示例


```JavaScript
/*本示例在活动工作簿上第一张工作表中新增一个列表，并设置该列表关联的查询表的命令字符串。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = ActiveWorkbook.Worksheets.Item(1).ListObjects.Add(xlSrcExternal, connection, true, xlGuess, Range("I1")).QueryTable
    qyTable.CommandText = "SELECT * FROM `student`"
    qyTable.Refresh()
}
```


```JavaScript
/*本示例在第一张工作表中新增一个列表，并设置该列表的表样式。*/
function test() {
    let listObj = Application.Worksheets.Item(1).ListObjects.Add(xlSrcRange, Range("A1:D5"))
    listObj.TableStyle = "TableStylePreset6_Accent1"
}
```
