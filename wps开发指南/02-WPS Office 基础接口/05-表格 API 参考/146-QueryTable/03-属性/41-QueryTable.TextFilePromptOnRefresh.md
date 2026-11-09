# QueryTable.TextFilePromptOnRefresh

如果每次刷新查询表时都要指定导入文本文件的名称，则该属性值为 **True** 。 **“导入文本文件”** 对话框允许用户指定路径和文件名。默认值为 **False** 。 **Boolean** 类型，可读写。



## 语法

express.**TextFilePromptOnRefresh**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


仅当查询表基于文本文件数据（ **QueryType** 属性设置为 **xlTextImport** ）时才使用该属性。

如果该属性值为 **True** ，则第一次刷新查询表时，并不显示对话框。

在用户界面中，其默认值为 **True** 。

如果使用用户界面导入数据，则会将来自 Web 查询或文本查询的数据作为 **QueryTable** 对象导入，而将所有其他外部数据作为 **ListObject** 对象导入。

如果使用对象模型导入数据，则必须将来自 Web 查询或文本查询的数据作为 **QueryTable** 导入，同时可将所有其他外部数据作为 **ListObject** 或 **QueryTable** 导入。

 **TextFilePromptOnRefresh** 属性只应用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例在每次刷新第一个工作簿中第一张工作表上的查询表时，都提示用户输入文本文件的名称。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(1, 9))
    qyTable.TextFileParseType = xlDelimited
    qyTable.TextFilePromptOnRefresh = true
    qyTable.TextFileTabDelimiter = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上包含 B1 单元格的查询表每次刷新时是否需要指定导入文本文件的名称。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.TextFilePromptOnRefresh)
}
```
