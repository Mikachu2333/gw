# QueryTable.TextFileConsecutiveDelimiter

当向查询表中导入文本文件时，如果将连续分隔符看作是一个分隔符，则该值为 **True** 。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**TextFileConsecutiveDelimiter**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


仅当查询表基于文本文件数据（ **[QueryType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/QueryType)** 属性设置为 **xlTextImport** ）并且 **[TextFileParseType](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/member/TextFileParseType)** 属性的值为 **xlDelimited** 时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **[QueryTable](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/QueryTable/obj)** 对象导入，而所有其他外部数据将作为 **[ListObject](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/ListObject/obj)** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **TextFileConsecutiveDelimiter** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例将第一个工作簿中第一张工作表上新增查询表的分隔符设置为空格字符，然后刷新该查询表。连续的空格被当作单个分隔符处理。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(1, 9))
    qyTable.TextFileParseType = xlDelimited
    qyTable.TextFileSpaceDelimiter = true
    qyTable.TextFileConsecutiveDelimiter = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上包含 A1 单元格的查询表是否将连续分隔符看作是一个分隔符。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("A1").QueryTable
    alert(qyTable.TextFileConsecutiveDelimiter)
}
```
