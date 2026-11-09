# QueryTable.TextFileStartRow

返回或设置向查询表中导入文本文件时进行文本分列的起始行号。其有效值为 1 到 32767 之间的整数。默认值为 1。 **Long** 类型，可读写。



## 语法

express.**TextFileStartRow**

express   一个代表 **QueryTable** 对象的变量。

## 类型

number（int4 精度）

## 说明


仅当查询表基于文本文件数据（ **QueryType** 属性设置为 **xlTextImport** ）时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **TextFileStartRow** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例将第一个工作簿中第一张工作表上查询表的文本分列起始行设置为第五行，然后刷新该查询表。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(1, 8))
    qyTable.TextFileParseType = xlDelimited
    qyTable.TextFileStartRow = 5
    qyTable.TextFileTabDelimiter = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上第一张查询表文本分列的起始行号。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).QueryTables.Item(1)
    alert(qyTable.TextFileStartRow)
}
```
