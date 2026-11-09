# QueryTable.MaintainConnection

如果从刷新数据开始直至关闭工作簿，都一直保留指向指定数据源的连接，则为 **True** 。默认值是 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**MaintainConnection**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


只有当查询表或数据透视表缓存的 **QueryType** 属性值为 **xlOLEDBQuery** 时，才可以设置 **MaintainConnection** 属性。

如果预计会频繁对服务器进行查询，则可将此属性设置为 **True** ，这样能减少重新连接的时间因而可提高性能。将此属性设置为 **False** ，将会关闭一个打开的连接。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **MaintainConnection** 属性。



## 示例


```JavaScript
/*此示例关闭活动工作表上新增查询表一直指向数据源的连接。*/
function test() {
    let connection = "OLEDB;Provider=Microsoft.ACE.OLEDB.12.0;User ID=Admin;Data Source=D:\\示例\\example1.xlsx;Mode=Share Deny Write;Extended Properties='HDR=YES';Jet OLEDB:Engine Type=37;Jet OLEDB:Database Locking Mode=0;Jet OLEDB:Global Partial Bulk Ops=2;Jet OLEDB:Global Bulk Transactions=1;Jet OLEDB:Create System Database=False;Jet OLEDB:Encrypt Database=False;Jet OLEDB:Don't Copy Locale on Compact=False;Jet OLEDB:Compact Without Replica Repair=False;Jet OLEDB:SFP=False;Jet OLEDB:Support Complex Data=False;Jet OLEDB:Bypass UserInfo Validation=False;Jet OLEDB:Limited DB Caching=False;Jet OLEDB:Bypass ChoiceField Validation=False"
    let qyTable = ActiveSheet.QueryTables.Add(connection, Range("I1"), "SELECT * FROM `Sheet1$`")
    qyTable.Refresh()
    qyTable.MaintainConnection = false
}
```


```JavaScript
/*本示例显示活动工作表上包含 B1 单元格的查询表是否一直保留指向数据源的连接。*/
function test() {
    alert(Application.ActiveSheet.Range("B1").QueryTable.MaintainConnection)
}
```
