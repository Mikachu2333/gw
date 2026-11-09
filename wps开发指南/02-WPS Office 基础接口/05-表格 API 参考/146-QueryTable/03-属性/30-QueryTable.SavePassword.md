# QueryTable.SavePassword

如果将 ODBC 连接字符串中的密码信息与指定查询一起保存，则为 **True** 。如果不保存密码信息，则该值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**SavePassword**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


此属性由数据透视表和查询表在 ODBC 和 OLEDB 查询中使用。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **SavePassword** 属性。

如果 **ListObject** 已连接到 SharePoint 列表，此属性将被忽略。



## 示例


```JavaScript
/*此示例在每次保存第一张工作表上查询表一时，都不保存 ODBC 连接字符串的密码信息。*/
function test() {
    Application.Worksheets.Item(1).QueryTables.Item(1).SavePassword = false
}
```


```JavaScript
/*本示例显示第一张工作表上包含单元格 B1 的查询表是否保存 ODBC 连接字符串中的密码信息。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.SavePassword)
}
```
