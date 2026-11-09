# QueryTables.Add

新建一个查询表。



## 语法

express.**Add(Connection, Destination, Sql)**

express   一个代表 **QueryTables** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Connection | 必选 | any | 查询表的数据源。可为以下情形之一： 一个包含 OLE DB 或 ODBC 连接字符串的字符串。ODBC 连接字符串的格式为“ODBC;<连接字符串>”。 一个 QueryTable 对象，该对象表示查询信息的初始复制源，包括连接字符串和 SQL 文本，但不包括 Destination 区域。指定 QueryTable 对象会导致 Sql 参数被忽略。 一个 ADO 或 DAO Recordset 对象。从 ADO 或 DAO 记录集中读取数据。ET 会保留该记录集，直到该查询表被删除或 SQL 连接发生更改。不能对产生的查询表进行编辑。 一个 Web 查询，“URL;”格式的字符串，其中“URL;”是必需的，但不进行本地化，字符串的其余部分作为 Web 查询的 URL。 数据查找程序。“FINDER;<数据查找程序文件路径>”格式的字符串，其中“FINDER;”是必需的，但不能本地化。字符串的其余部分为数据查找程序文件（\*.dqy 或 \*.iqy）的路径和名称。使用 Add 方法时将读取该文件；之后，对查询表的 Connection 属性的调用将相应地返回以“ODBC”或“URL”开头的字符串。 一个文本文件。“TEXT;<文本文件路径和名称>”格式的字符串，其中 TEXT 是必需的，但不能本地化。 |
| Destination | 必选 | Range | 查询表目标区域（生成的查询表的放置区域）左上角的单元格。目标区域必须位于 expression 指定的 QueryTables 对象所在的工作表中。 |
| Sql | 可选 | any | 在 ODBC 数据源上运行的 SQL 查询字符串。当使用的数据源为 ODBC 数据源时，该参数可选（如果不在此处指定该参数，则应该在查询表刷新之前使用查询表的 Sql 属性进行设置）。当将 QueryTable 对象、文本文件、ADO 或 DAO Recordset 对象指定为数据源时，不能使用该参数。 |

## 返回值

一个代表新查询表的 QueryTable 对象。

## 说明


由本方法创建的查询将在调用 **Refresh** 方法后运行。



## 示例


```JavaScript
/*此示例在第一张工作簿上第一张工作表上创建一个查询表。为了向后兼容，此示例保留了现有的列排序和筛选设置以及布局信息。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Workbooks.Item(1).Worksheets.Item(1).QueryTables.Add(connection, Range("A1"), "SELECT * FROM `student`")
    qyTable.Name = "Contact List"
    qyTable.FieldNames = true
    qyTable.RowNumbers = false
    qyTable.FillAdjacentFormulas = false
    qyTable.PreserveFormatting = true
    qyTable.RefreshOnFileOpen = false
    qyTable.BackgroundQuery = true
    qyTable.RefreshStyle = xlInsertDeleteCells
    qyTable.SavePassword = true
    qyTable.SaveData = true
    qyTable.AdjustColumnWidth = true
    qyTable.RefreshPeriod = 0
    qyTable.PreserveColumnInfo = true
    qyTable.Refresh(false)
}
```


```JavaScript
/*此示例向第一个工作簿中第一张工作表上新的查询表中导入固定宽度的文本文件。该文本文件的第一列为 5 个字符宽，作为文本导入。第二列为 4 个字符宽，被跳过。其余部分则导入第三列中，并对其应用常规格式。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(1, 9))
    qyTable.TextFileParseType = xlFixedWidth
    qyTable.TextFileFixedColumnWidths = [5, 4]
    qyTable.TextFileColumnDataTypes = [xlTextFormat, xlSkipColumn, xlGeneralFormat]
    qyTable.Refresh()
}
```


```JavaScript
/*此示例在活动工作表上新建查询表。*/
function test() {
    let sql = "SELECT * FROM `student`"
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = ActiveSheet.QueryTables.Add(connection, Range("A1"), sql)
    qyTable.Refresh()
}
```
