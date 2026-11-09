# QueryTable.Connection

返回或设置包含下列某项的字符串：允许 ET 连接到 OLE DB 数据源的 OLE DB 设置；允许 ET 连接到 ODBC 数据源的 ODBC 设置；允许 ET 连接到 Web 数据源的 URL；或者文本文件的名称或路径，或是指定某个数据库或 Web 查询的文件名称或路径。 **Variant** 型，可读写。



## 语法

express.**Connection**

express   一个代表 **QueryTable** 对象的变量。

## 类型

any

## 说明


设置 **Connection** 属性不会立即与数据源建立连接。必须使用 **Refresh** 方法建立连接并检索数据。

有关连接字符串语法的详细信息，请参阅 **QueryTables** 集合的 **Add** 方法。

另外，也可以通过选择 ActiveX 数据对象 (ADO) 库直接访问数据源。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **Connection** 属性。



## 示例


```JavaScript
/*此示例为第一张工作表上的查询表“ExternalData_1”提供新的 ODBC 连接信息，并设置其命令串。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item("ExternalData_1")
    qyTable.Connection = "ODBC;DSN=MS Access Database;DBQ=D:\\test1.accdb;DefaultDir=D:\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    qyTable.CommandText = "SELECT * FROM `student`"
    qyTable.Refresh()
}
```


```JavaScript
/*本示例设置工作表 Sheet1 上包含单元格 I1 的查询表的连接文件，并设置其命令串。*/
function test() {
    let qyTable = Application.Worksheets.Item("Sheet1").Range("I1").QueryTable
    qyTable.Connection = "TEXT;D:\\test3.txt"
    qyTable.Refresh()
}
```
