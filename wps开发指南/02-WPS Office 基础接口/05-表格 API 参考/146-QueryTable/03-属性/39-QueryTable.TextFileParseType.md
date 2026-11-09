# QueryTable.TextFileParseType

返回或设置要导入查询表的文本文件中数据的列格式。 **XlTextParsingType** 类型，可读写。



## 语法

express.**TextFileParseType**

express   一个代表 **QueryTable** 对象的变量。

## 类型

XlTextParsingType

## 说明


| **XlTextParsingType** 可为以下 **XlTextParsingType** 常量之一。 |
| ------------------------------------------------------ |
| **xlFixedWidth** 表示将文件中的数据安排在固定宽度的列中。                   |
| **xlDelimited** 默认值表示文件由分隔符分隔。                          |

仅当查询表基于文本文件数据（ **QueryType** 属性设置为 **xlTextImport** ）时，才使用此属性。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **TextFileParseType** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例向第一个工作簿中第一张工作表上的新查询表中导入一个固定宽度的文本文件。该文本文件的第一列为五个字符宽度，作为文本导入。第二列为四个字符宽度，被跳过。该文本文件的剩余部分被导入第三列，并对其应用常规格式。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(9, 1))
    qyTable.TextFileParseType = xlFixedWidth
    qyTable.TextFileFixedColumnWidths = [5, 4]
    qyTable.TextFileColumnDataTypes = [xlTextFormat, xlSkipColumn, xlGeneralFormat]
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上包含 B1 单元格的查询表的列格式是否为 xlDelimited。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.TextFileParseType == xlDelimited)
}
```
