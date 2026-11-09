# QueryTable.BackgroundQuery

如果查询表的查询是异步执行（在后台执行）的，则为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**BackgroundQuery**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


对于 OLAP（OLAP：为查询和报表（而不是处理事务）而进行了优化的数据库技术。OLAP 数据是按分级结构组织的，它存储在多维数据集而不是表中。） 数据源，此属性是只读的，并且始终返回 **False** 。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **BackgroundQuery** 属性。



## 示例


```JavaScript
/*此示例将活动工作表上新增查询表的查询设置为异步执行。*/
function test() {
    let connection = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\example1.xlsx;Mode=Share Deny Write;Extended Properties='HDR=YES';Jet OLEDB:Engine Type=37;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    let qyTable = ActiveSheet.QueryTables.Add(connection, Range("A1"), "SELECT * FROM `Sheet1$`")
    qyTable.BackgroundQuery = true
    qyTable.Refresh()
}
```


```JavaScript
/*此示例显示第一张工作表上第一张查询表的查询是否为异步执行。*/
function test() {
    alert(Worksheets.Item(1).QueryTables.Item(1).BackgroundQuery)
}
```
