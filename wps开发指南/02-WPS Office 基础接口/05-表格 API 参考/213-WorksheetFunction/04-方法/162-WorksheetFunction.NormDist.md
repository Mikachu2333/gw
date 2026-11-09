# WorksheetFunction.NormDist

返回指定平均值和标准偏差的正态分布。此函数在统计方面应用范围广泛（包括假设检验）。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Norm\_Dist](#TODO) 方法。



## 语法

express.**NormDist(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | x - 需要计算其分布的数值。 |
| Arg2 | 必选 | number（double 精度） | mean - 分布的算术平均值。 |
| Arg3 | 必选 | number（double 精度） | standard\_dev - 分布的标准偏差。 |
| Arg4 | 必选 | boolean | cumulative - 一个决定函数形式的逻辑值。如果 cumulative 为 TRUE，则 NORMDIST 返回累积分布函数；如果为 FALSE，则返回概率密度函数。 |

## 返回值

Double

## 说明


* 如果 mean 或 standard\_dev 为非数字型，则 NORMDIST 返回错误值 #VALUE!。
* 如果 standard\_dev ≤ 0，则 NORMDIST 返回错误值 #NUM!。
* 如果 mean = 0，standard\_dev = 1，且 cumulative = TRUE，则 NORMDIST 返回标准正态分布，即 NORMSDIST。
* 如果 cumulative = TRUE，则公式为从负无穷大到公式中给定的 x 的积分。



## 示例


```JavaScript
/*本示例使用 NormDist 方法分别计算平均值300和标准偏差100、平均值10和标准偏差0.1的的正态分布，并分别赋值给B1和B2单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.NormDist(54, 300, 100, true)
    Range("B2").Value2 = WorksheetFunction.NormDist(0.98, 10, 10.1, false)
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，使用 NormDist 方法分别计算B2单元格中平均值和B3单元格中标准偏差的的正态分布。*/
function test() {
    Range("B1").Value2 = 100
    Range("B2").Value2 = 120
    Range("B3").Value2 = 13
    alert(WorksheetFunction.NormDist(Range("B1").Value2, Range("B2").Value2, Range("B3").Value2, true))
}
```
