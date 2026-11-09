# WorksheetFunction.Clean

删除文本中的所有非打印字符。



## 语法

express.**Clean(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | string | 要从中删除非打印字符的任何工作表信息。 |

## 返回值

String

## 说明


对从其他应用程序导入的文本使用 Clean，以删除其中包含的您的操作系统无法打印的字符。例如，可以使用 Clean 删除一些经常出现在数据文件开头和结尾处、无法打印的低级计算机代码。

Clean函数设计用于从文本中删除 7 位 ASCII 代码中的前 32 个非打印字符（值 0 到值 31）。在 Unicode 字符集中，还有其他非打印字符（值 127、129、141、143、144 和 157）。Clean 函数本身并不会删除这些额外的非打印字符。



## 示例


```JavaScript
/*本示例为B3等单元格分别赋值，并使用Clean方法删除文本中的所有非打印字符。*/
function test() {
    Range("B3").Value2 = "月度\n报表"
    Range("B4").Value2 = "季度\s报表"
    Range("B5").Value2 = "年度\/报表"
    let clean1 = Application.WorksheetFunction.Clean(Range("B3").Value2)
    let clean2 = Application.WorksheetFunction.Clean(Range("B4").Value2)
    let clean3 = Application.WorksheetFunction.Clean(Range("B5").Value2)
    alert(clean1)
    alert(clean2)
    alert(clean3)
}
```


```JavaScript
/*本示例使用Clean方法删除文本中的所有非打印字符，并将结果赋值于F3等单元格。*/
function test() {
    Range("F3").Value2 = Application.WorksheetFunction.Clean("动\n物\n世\n界")
    Range("F4").Value2 = Application.WorksheetFunction.Clean("e\m\to")
}
```
