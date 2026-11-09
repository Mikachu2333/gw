# QueryTable.SourceDataFile

返回或设置一个 **String** 值，它指明查询表的源数据文件。



## 语法

express.**SourceDataFile**

express   一个代表 **QueryTable** 对象的变量。

## 类型

string

## 说明


对于基于文件的数据源（如 Access）， **SourceDataFile** 属性包含源数据文件的完全限定路径。对于基于服务器的数据源（如 SQL Server），此属性设置为 **Null** 。如果通过编程方式更改 **Connection** 属性，则 **SourceDataFile** 属性设置为 **Null** 。  

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **SourceDataFile** 属性。



## 示例


```JavaScript
/*本示例显示创建第一张工作表上查询表“ExternalData_1”的源数据文件。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item("ExternalData_1")
    alert(qyTable.SourceDataFile)
}
```


```JavaScript
/*此示例在第一张工作表上新增查询表，并设置其源数据文件。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Worksheets.Item(1).QueryTables.Add(connection, Range("I1"), "SELECT * FROM `student`")
    qyTable.SourceDataFile = "D:\\示例\\test1.accdb"
    qyTable.Refresh()
}
```
