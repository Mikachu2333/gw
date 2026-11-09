# QueryTable.TextFileTrailingMinusNumbers

如果为 **True** ，ET 会将导入的数字视为以 - (减) 符号开头的文本作为负号。 如果为 **False** ，则将导入的数字视为以 - 符号开头的文本作为文本。 **Boolean** 类型，可读写。



## 语法

express.**TextFileTrailingMinusNumbers**

express   一个代表 **QueryTable** 对象的变量。

## 类型

boolean

## 说明


如果使用用户界面导入数据，来自 Web 查询或文本查询的数据将作为 **QueryTable** 对象导入，而所有其他外部数据将作为 **ListObject** 对象导入。

如果使用对象模型导入数据，来自 Web 查询或文本查询的数据必须作为 **QueryTable** 导入，而所有其他外部数据既可作为 **ListObject** 导入，也可作为 **QueryTable** 导入。

 **TextFileTrailingMinusNumbers** 属性仅适用于 **QueryTable** 对象。



## 示例


```JavaScript
/*本示例为 ET 确定包含单元格 B1 的查询表的设置，导入的数值对于以“-”符号开头的文本的处理方式。本示例假定在活动工作表上存在 QueryTable 对象。*/
function test() {
    // Determine setting for TextFileTrailingMinusNumbers
    if (Range("B1").QueryTable.TextFileTrailingMinusNumbers) {
        alert("Numbers imported as text that begin with a '-' symbol will be treated as a negative symbol.")
    } else {
        alert("Numbers imported as text that begin with a '-' symbol will not be treated as a negative symbol.")
    }
}
```


```JavaScript
/*本示例将活动工作表上包含 B3 单元格的查询表设置为数字开头的“-”符号按负号处理，并刷新该查询表。*/
function test() {
    let qyTable = Application.ActiveSheet.Range("B3").QueryTable
    qyTable.TextFileTrailingMinusNumbers = true
    qyTable.Refresh()
}
```
