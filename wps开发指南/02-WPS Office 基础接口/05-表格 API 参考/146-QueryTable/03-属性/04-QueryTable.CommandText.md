# QueryTable.CommandText

返回或设置指定数据源的命令串。 **Variant** 型，可读写。



## 语法

express.**CommandText**

express   一个代表 **QueryTable** 对象的变量。

## 类型

any

## 说明


对于 OLE DB 源， **CommandType** 属性描述 **CommandText** 属性的值。

对于 ODBC 源，设置 **CommandText** 将导致刷新数据。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **CommandText** 属性。

包含相应查询表的工作表必须为活动状态，才可访问此属性。



## 示例


```JavaScript
/*此示例设置第一张工作簿上第一张工作表中第一张查询表的 ODBC 数据源的命令串。注意，该命令串是一个 SQL 语句。*/
function test() {
    let qyTable = Application.Workbooks.Item(1).Worksheets.Item(1).QueryTables.Item(1)
    qyTable.CommandType = xlCmdSql
    qyTable.CommandText = "SELECT * FROM `student` WHERE `age` < '12' "
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示活动工作表中第一张查询表的命令串。*/
function test() {
    alert(ActiveSheet.QueryTables.Item(1).CommandText)
}
```
