# QueryTable.TextFileThousandsSeparator

返回或设置向查询表中导入文本文件时 ET 所使用的千位分隔符。默认为系统千位分隔符。 **String** 类型，可读写。



## 语法

express.**TextFileThousandsSeparator**

express   一个代表 **QueryTable** 对象的变量。

## 类型

string

## 说明


仅当查询表基于文本文件数据（ **QueryTable** 属性设置为 **xlTextImport** ）时，尤其是当文件包含的小数位分隔符和千位分隔符与计算机上使用的不同（由于使用不同的语言设置）时，才使用此属性。

下表显示当使用不同分隔符向 ET 中导入文本时得到的不同结果。数字结果显示在最右边的列中。

| 系统小数分隔符 | 系统千位分隔符 | TextFileDecimalSeparator 值 | TextFileThousandsSeparator 值 | 导入的文本      | 单元格的值（数据类型）    |
| ------- | ------- | -------------------------- | ---------------------------- | ---------- | -------------- |
| 句号      | 逗号      | 逗号                         | 句号                           | 123.123,45 | 123,123.45（数字） |
| 句号      | 逗号      | 逗号                         | 逗号                           | 123.123,45 | 123.123,45（文本） |
| 逗号      | 句号      | 逗号                         | 句号                           | 123,123.45 | 123,123.45（数字） |
| 句号      | 逗号      | 句号                         | 逗号                           | 123 123.45 | 123 123.45（文本） |
| 句号      | 逗号      | 句号                         | 空格                           | 123 123.45 | 123,123.45（数字） |

如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **TextFileThousandsSeparator** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例保存工作表 Sheet1 上第一个查询表最初的千位分隔符，并将其设置为句号，以准备将法语文本文件（举例）导入 ET 的美国英语版中。*/
function test() {
    let strDecSep = Application.Worksheets.Item("Sheet1").QueryTables.Item(1).TextFileThousandsSeparator
    Application.Worksheets.Item("Sheet1").QueryTables.Item(1).TextFileThousandsSeparator = "."
}
```


```JavaScript
/*本示例显示活动工作表上包含 C2 单元格的查询表的千位分隔符。*/
function test() {
    let qyTable = Application.ActiveSheet.Range("C2").QueryTable
    alert(qyTable.TextFileThousandsSeparator)
}
```
