# QueryTable.SourceConnectionFile

返回或设置一个 **String** 值，它指明用于创建查询表的 ET 数据连接文件或类似文件。可读写。



## 语法

express.**SourceConnectionFile**

express   一个代表 **QueryTable** 对象的变量。

## 类型

string

## 说明


来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。可以使用 **ListObject** 的 **QueryTable** 属性访问 **SourceConnectionFile** 属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **SourceConnectionFile** 属性。



## 示例


```JavaScript
/*本示例显示创建第一张工作表上查询表“ExternalData_1”的数据连接文件。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item("ExternalData_1")
    alert(qyTable.SourceConnectionFile)
}
```


```JavaScript
/*此示例在第一张工作表上新增查询表，并设置其数据连接文件。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Worksheets.Item(1).QueryTables.Add(connection, Range("I1"), "SELECT * FROM `student`")
    qyTable.SourceConnectionFile = "D:\\我的数据源\\test1.accdb student.odc"
    qyTable.Refresh()
}
```
