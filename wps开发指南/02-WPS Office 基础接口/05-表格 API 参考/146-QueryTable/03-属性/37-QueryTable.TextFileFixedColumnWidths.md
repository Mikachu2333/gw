# QueryTable.TextFileFixedColumnWidths

返回或设置一个整数数组，该数组对应于正要向查询表中导入的文本文件的列宽（按字符）。有效的宽度为 1 到 32767 个字符。 **Variant** 类型，可读写。



## 语法

express.**TextFileFixedColumnWidths**

express   一个代表 **QueryTable** 对象的变量。

## 类型

any

## 说明


仅当查询表基于文本文件数据（ **QueryType** 属性设置为 **xlTextImport** ）并且 **TextFileParseType** 属性的值为 **xlFixedWidth** 时，才使用此属性。

必须指定一个有效的非负值列宽。如果指定的列超出了文本文件的宽度，则会忽略那些值。如果文本文件的宽度大于指定的列的总宽度，则文本文件的剩余部分将会导入到一个附加列中。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **TextFileFixedColumnWidths** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例向第一个工作簿中第一张工作表上的新查询表中导入一个固定宽度的文本文件。该文本文件的第一列为五个字符宽度，作为文本导入。第二列为四个字符宽度，被跳过。该文本文件的剩余部分被导入第三列，并对其应用常规格式。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(1, 9))
    qyTable.TextFileParseType = xlFixedWidth
    qyTable.TextFileFixedColumnWidths = [5, 4]
    qyTable.TextFileColumnDataTypes = [xlTextFormat, xlSkipColumn, xlGeneralFormat]
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示活动工作表上第一张查询表关联的文本文件的列宽（按字符）。*/
function test() {
    let qyTable = Application.ActiveSheet.QueryTables.Item(1)
    alert(qyTable.TextFileFixedColumnWidths.toString())
}
```
