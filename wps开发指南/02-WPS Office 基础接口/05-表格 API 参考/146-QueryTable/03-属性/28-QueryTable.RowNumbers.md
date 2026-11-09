# QueryTable.RowNumbers

如果行号作为第一列添加到指定查询表，则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**RowNumbers**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


设置该属性为 **True** 并不会使行号立即显示。在查询表下一次刷新时行号将显示，而且在查询表每次刷新时将重新配置这些行号。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

可以使用 **ListObject** 的 **QueryTable** 属性访问 **RowNumbers** 属性。



## 示例


```JavaScript
/*本示例为第一张工作表上查询表“ExternalData_1”添加行号和字段名。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item("ExternalData_1")
    qyTable.RowNumbers = true
    qyTable.FieldNames = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上包含单元格 B1 的查询表是否在第一列展示行号。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.RowNumbers)
}
```
