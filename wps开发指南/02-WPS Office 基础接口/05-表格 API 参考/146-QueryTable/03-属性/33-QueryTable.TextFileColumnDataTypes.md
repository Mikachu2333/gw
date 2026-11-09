# QueryTable.TextFileColumnDataTypes

返回或设置一个有序的常量数组，用于指定文本文件中相应列的数据类型，而该文本文件则是正要导入查询表中的文本文件。每一列的默认常量为 **xlGeneral** 。 **Variant** 类型，可读写。



## 语法

express.**TextFileColumnDataTypes**

express   一个代表 **QueryTable** 对象的变量。

## 类型

any

## 说明


可以使用下表列出的 **xlColumnDataType** 常量来指定在数据导入过程中所使用的列数据类型或执行的操作。

| 常量                  | 说明          |
| ------------------- | ----------- |
| **xlGeneralFormat** | 概要          |
| **xlTextFormat**    | 文本          |
| **xlSkipColumn**    | 跳过列         |
| **xlDMYFormat**     | “日-月-年”日期格式 |
| **xlDYMFormat**     | “日-年-月”日期格式 |
| **xlEMDFormat**     | EMD 日期      |
| **xlMDYFormat**     | “月-日-年”日期格式 |
| **xlMYDFormat**     | “月-年-日”日期格式 |
| **xlYDMFormat**     | “年-日-月”日期格式 |
| **xlYMDFormat**     | “年-月-日”日期格式 |

仅当查询表基于文本文件数据（ **QueryType** 属性设置为 **xlTextImport** ）时，才使用此属性。

如果在含有多列的数组中指定了多个元素，则将忽略那些值。

只有在安装并选定了中国台湾地区语言时才可以使用 **xlEMDFormat** 。 **xlEMDFormat** 常量指定使用中国台湾地区纪元日期。

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **TextFileColumnDataTypes** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例向第一个工作簿中第一张工作表上的新查询表中导入一个固定宽度的文本文件。该文本文件的第一列为五个字符宽度，作为文本导入。第二列为四个字符宽度，被跳过。该文本文件的剩余部分被导入第三列，并对其应用常规格式。*/
function test() {
    let sheet = Application.Workbooks.Item(1).Worksheets.Item(1)
    let qyTable = sheet.QueryTables.Add("TEXT;D:\\示例\\test.txt", sheet.Cells.Item(1, 1))
    qyTable.TextFileParseType = xlFixedWidth
    qyTable.TextFileFixedColumnWidths = [5, 4]
    qyTable.TextFileColumnDataTypes = [xlTextFormat, xlSkipColumn, xlGeneralFormat]
    qyTable.Refresh()
}
```


```JavaScript
/*本示例设置活动工作表上新增查询表每一列的数据类型并刷新*/
function test() {
    let qyTable = ActiveSheet.QueryTables.Add("TEXT;D:\\示例\\test3.txt", Range("I1"))
    qyTable.TextFileColumnDataTypes = [xlTextFormat, xlGeneralFormat, xlDMYFormat, xlGeneralFormat]
    qyTable.Refresh()
}
```
