# WorksheetFunction.LogNormDist

返回 x 的对数累积分布函数，其中 ln(x) 是服从参数 mean 和 standard\_dev 的正态分布。使用此函数可以分析经过对数变换的数据。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [LogNorm\_Dist](#TODO) 方法。



## 语法

express.**LogNormDist(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | x - 用于计算函数的值。 |
| Arg2 | 必选 | number（double 精度） | mean - ln(x) 的平均值。 |
| Arg3 | 必选 | number（double 精度） | standard\_dev - ln(x) 的标准偏差。 |

## 返回值

Double

## 说明


* 如果任一参数是非数字型，则 LOGNORMDIST 返回错误值 #VALUE!。
* 如果 x ≤ 0 或 standard\_dev ≤ 0，则 LOGNORMDIST 返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 LogNormDist 方法分别计算数值10和100的对数累积分布函数，并分别赋值给C2和C3单元格。*/
function test() {
    Range("C2").Value2 = WorksheetFunction.LogNormDist(10, 21.3, 0.8)
    Range("C3").Value2 = WorksheetFunction.LogNormDist(100, 111, 5)
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，使用 LogNormDist 方法计算单元格C1的对数累积分布函数。*/
function test() {
    Range("C1").Value2 = 12
    Range("C2").Value2 = 11
    Range("C3").Value2 = 10
    alert(WorksheetFunction.LogNormDist(Range("C1").Value2, Range("C2").Value2, Range("C3").Value2))
}
```
