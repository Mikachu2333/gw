# QueryTable.PreserveColumnInfo

如果每次刷新查询表时，列排序、筛选和布局信息都会保留，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**PreserveColumnInfo**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


只有当查询表使用数据库连接时，该属性才有效。

可以将该属性设置为 **False** ，以便与 ET 的早期版本兼容。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **PreserveColumnInfo** 属性。



## 示例


```JavaScript
/*本示例在第一张工作簿上第一张工作表中创建新的查询表，并保留其列排序、筛选和布局信息。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Workbooks.Item(1).Worksheets.Item(1).QueryTables.Add(connection, Range("A1"), "SELECT * FROM `student`")
    qyTable.Name = "Contact List"
    qyTable.FieldNames = true
    qyTable.RowNumbers = false
    qyTable.FillAdjacentFormulas = true
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
/*本示例显示工作表 Sheet1 上包含 B1 单元格的查询表刷新时，是否保留列排序、筛选和布局信息。*/
function test() {
    let qyTable = Application.Sheets.Item("Sheet1").Range("B1").QueryTable
    alert(qyTable.PreserveColumnInfo)
}
```
