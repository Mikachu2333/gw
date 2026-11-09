# QueryTable.TextFileDecimalSeparator

返回或设置小数分隔符，在将文本文件导入查询表中时，ET 将使用小数分隔符。默认值为系统小数分隔符。 **String** 类型，可读写。



## 语法

express.**TextFileDecimalSeparator**

express   一个代表 **QueryTable** 对象的变量。

## 类型

string

## 说明


仅当查询表基于文本文件数据（ **QueryType** 属性设置为 **xlTextImport** ）并且该文件包含的小数位分隔符和千位分隔符与计算机上使用的不同（由于使用不同的语言设置）时，才使用此属性。

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

 **TextFileDecimalSeparator** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例保存工作表 Sheet1 上第一张查询表最初的小数分隔符，并将其设置为逗号，以准备将一个法语文本文件（举例）导入 ET 的美国英语版中。*/
function test() {
    let strDecSep = Application.Worksheets.Item("Sheet1").QueryTables.Item(1).TextFileDecimalSeparator
    Application.Worksheets.Item("Sheet1").QueryTables.Item(1).TextFileDecimalSeparator = ","
}
```


```JavaScript
/*本示例显示第一张工作表上包含 B1 单元格的查询表的小数分隔符。*/
function test() {
    let qyTable = Application.Worksheets.Item(1).Range("B1").QueryTable
    alert(qyTable.TextFileDecimalSeparator)
}
```
