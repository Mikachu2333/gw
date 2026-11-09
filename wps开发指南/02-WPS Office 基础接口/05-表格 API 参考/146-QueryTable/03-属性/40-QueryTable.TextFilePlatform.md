# QueryTable.TextFilePlatform

返回或设置正向查询表中导入的文本文件的原始格式。该属性确定在数据导入过程中使用何种代码页。 **XlPlatform** 类型，可读写。



## 语法

express.**TextFilePlatform**

express   一个代表 **QueryTable** 对象的变量。

## 类型

number（int4 精度）

## 说明


默认值是在 **“文本文件导入向导”** 的 **“文件原始格式”** 选项中的当前设置。

| **XlPlatform** 可为以下 **XlPlatform** 常量之一。 |
| ---------------------------------------- |
| **xlMacintosh**                          |
| **xlMSDOS**                              |
| **xlWindows**                            |

仅当查询表基于文本文件数据（ **QueryType** 属性设置为 **xlTextImport** ）时才使用该属性。

如果使用用户界面导入数据，则会将来自 Web 查询或文本查询的数据作为 **QueryTable** 对象导入，而将所有其他外部数据作为 **ListObject** 对象导入。

如果使用对象模型导入数据，则必须将来自 Web 查询或文本查询的数据作为 **QueryTable** 导入，同时可将所有其他外部数据作为 **ListObject** 或 **QueryTable** 导入。

 **TextFilePlatform** 属性只应用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例向第一个工作簿中第一张工作表上的查询表中导入一个 MS-DOS 文本文件，然后刷新该查询表。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(1, 9))
    qyTable.TextFilePlatform = xlMSDOS
    qyTable.TextFileParseType = xlDelimited
    qyTable.TextFileTabDelimiter = true
    qyTable.Refresh()
}
```


```JavaScript
/*本示例显示第一张工作表上包含 B1 单元格的查询表的文本文件的来源是否为 xlWindows。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.TextFilePlatform == xlWindows)
}
```
