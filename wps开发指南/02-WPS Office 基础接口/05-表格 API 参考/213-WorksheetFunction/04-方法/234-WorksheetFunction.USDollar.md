# WorksheetFunction.USDollar

将数字转换为文本格式并应用货币符号。方法的名称（及其应用的货币符号）取决于语言设置。



## 语法

express.**USDollar(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 对包含数字的单元格的引用，或求值结果为数值的公式。 |
| Arg2 | 必选 | number（double 精度） | 小数点右边的位数。如果 _Arg2_ 为负数，则数字向小数点的左边舍入。如果省略小数，则假定其值为 2。 |

## 返回值

String

## 说明


 **USDollar** 方法使用货币格式将数值转换成文本，并将小数四舍五入到指定的位数。使用的格式为 ($#,##0.00\_);($#,##0.00)。

使用 **Format Cells** 命令设置包含数字的单元格的格式与直接使用 **DOLLAR** 方法设置数字的格式之间的主要区别在于：DOLLAR 将其结果转换为文本，使用 **Format Cells** 命令设置格式的数字仍为数字。您可以继续在公式中使用由 **DOLLAR** 设置了格式的数字，因为 ET 在计算时会将以文本值形式输入的数字转换为数字。



## 示例以下示例以货币格式显示第一个数字，并保留到小数点右边两位 ($1,234.57)。



```JavaScript
=DOLLAR(A2, 2)
```


```JavaScript
/*本示例演示使用 USDollar 方法将数字转换为文本格式并应用货币符号，并分别赋值给B4和B5单元格。*/
function test() {
    Range("B4").Value2 = WorksheetFunction.USDollar(100.336, 2)
    Range("B5").Value2 = WorksheetFunction.USDollar(100.1212, -1)
}
```


```JavaScript
/*本示例为C1和D1单元格赋值，使用 USDollar 方法将数字转换为文本格式并应用货币符号。*/
function test() {
    Range("C1").Value2 = 2.35484
    Range("D1").Value2 = 2
    alert(WorksheetFunction.USDollar(Range("C1").Value2, Range("D1").Value2))
}
```
