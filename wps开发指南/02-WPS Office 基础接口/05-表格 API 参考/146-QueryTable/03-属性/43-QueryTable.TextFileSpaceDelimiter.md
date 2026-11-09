# QueryTable.TextFileSpaceDelimiter

如果向查询表中导入文本文件时，使用空格字符作为分隔符，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**TextFileSpaceDelimiter**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


仅当查询表基于文本文件数据（ **QueryType** 属性设置为 **xlTextImport** ）并且 **TextFileParseType** 属性的值为 **xlDelimited** 时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **TextFileSpaceDelimiter** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例将空格字符设置为第一个工作簿中第一张工作表上的查询表的分隔符，然后刷新该查询表。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(1, 7))
    qyTable.TextFileParseType = xlDelimited
    qyTable.TextFileSpaceDelimiter = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上第一张查询表是否将空格字符作为分隔符。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    alert(qyTable.TextFileSpaceDelimiter)
}
```
