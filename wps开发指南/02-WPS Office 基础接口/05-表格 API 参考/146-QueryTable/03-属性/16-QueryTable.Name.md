# QueryTable.Name

返回或设置一个 **String** 值，它代表对象的名称。



## 语法

express.**Name**

express   一个代表 **QueryTable** 对象的变量。

## 类型

string

## 说明


下表列出了 **Name** 属性和相关属性的示例值，同时假设有一个具有唯一名称“\[Europe\].\[France\].\[Paris\]”的 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源，还有一个包含项名称“Paris”的非 OLAP 数据源。

| 属性      | 值（OLAP 数据源）                         | 值（非 OLAP 数据源）    |
| ------- | ----------------------------------- | ---------------- |
| **题注**  | Paris                               | Paris            |
| **名称**  | \[Europe\].\[France\].\[Paris\]（只读） | Paris            |
| **源名称** | \[Europe\].\[France\].\[Paris\]（只读） | （与 SQL 属性值相同，只读） |
| **值**   | \[Europe\].\[France\].\[Paris\]（只读） | Paris            |

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **Name** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*此示例在工作表 Sheet2 上新增查询表，并设置该查询表的名称。*/
function test() {
    let connection = "ODBC;DSN=MS Access Database;DBQ=D:\\示例\\test1.accdb;DefaultDir=D:\\示例\\;DriverId=25;FIL=MS Access;MaxBufferSize=2048;PageTimeout=5;"
    let qyTable = Application.Worksheets.Item("Sheet2").QueryTables.Add(connection, Range("A1"), "SELECT * FROM `student`")
    qyTable.Name = "ExternalData_3"
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示活动工作表上包含 B1 单元格的查询表的名称。*/
function test() {
    let qyTable = Application.ActiveSheet.Range("B1").QueryTable
    alert(`查询表的名称：${qyTable.Name}`)
}
```
