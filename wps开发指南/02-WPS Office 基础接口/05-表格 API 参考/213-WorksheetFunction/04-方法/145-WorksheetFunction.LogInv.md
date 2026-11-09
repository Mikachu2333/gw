# WorksheetFunction.LogInv

使用对数分布可分析经过对数变换的数据。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [LogNorm\_Inv](#TODO) 方法。



## 语法

express.**LogInv(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | probability - 与对数分布相关的概率。 |
| Arg2 | 必选 | number（double 精度） | mean - ln(x) 的平均值。 |
| Arg3 | 必选 | number（double 精度） | standard\_dev - ln(x) 的标准偏差。 |

## 返回值

Double

## 说明


* 如果任一参数是非数字型，则 LOGINV 返回错误值 #VALUE!。
* 如果 probability <= 0 或 probability >= 1，则 LOGINV 返回错误值 #NUM!。
* 如果 standard\_dev <= 0，则 LOGINV 返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例演示 LogInv 方法使用对数分布可分析经过对数变换的数据，并分别赋值给A2和A3单元格。*/
function test() {
    Range("A2").Value2 = WorksheetFunction.LogInv(0.263, 21.3, 2)
    Range("A3").Value2 = WorksheetFunction.LogInv(0.45, 11, 0.5)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，演示 LogInv 方法使用对数分布可分析经过对数变换的数据。*/
function test() {
    Range("A1").Value2 = 0.75
    Range("A2").Value2 = 100
    Range("A3").Value2 = 5
    alert(WorksheetFunction.LogInv(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2))
}
```
