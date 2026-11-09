# WorksheetFunction.BetaInv

返回指定的 Beta 分布的累积分布函数的反函数。即，如果 probability = BetaDist(x,...)，则 BetaInv(probability,...) = x。  

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 Beta\_Inv 方法。



## 语法

express.**BetaInv(Arg1, Arg2, Arg3, Arg4, Arg5)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 与 Beta 分布相关的概率。 |
| Arg2 | 必选 | number（double 精度） | 该分布的 Alpha 参数。 |
| Arg3 | 必选 | number（double 精度） | 该分布的 Beta 参数。 |
| Arg4 | 可选 | any | x 所属区间的可选下界。 |
| Arg5 | 可选 | any | x 所属区间的可选上界。 |

## 返回值

Double

## 说明


在项目计划中，如果已知预期完成时间和变化率，可以使用 beta 分布来建立可能完成时间的模型。  

* 如果任一参数是非数值的，BetaInv 就会生成一个错误值。
* 如果 alpha ≤ 0 或 beta ≤ 0，BetaInv 将生成一个错误值。
* 如果 probability ≤ 0 或 probability > 1，BetaInv 将生成一个错误值。
* 如果省略 A 或 B 的值，BetaInv 将使用标准累积 beta 分布，因此，A = 0，B = 1。

如果已知 probability 的值，BetaInv 将求出 x 值以使等式 BetaDist(x, alpha, beta, A, B) = probability 成立。因此，BetaInv 的精度取决于 BetaDist 的精度。BetaInv 使用迭代搜索技术。如果搜索在 100 次迭代之后尚未收敛，该函数将生成一个错误值。



## 示例


```JavaScript
/*本示例使用BetaInv方法计算指定的Beta分布的累积分布函数的反函数值，并将结果赋值于C4等单元格。*/
function test() {
    Range("C4").Value2 = Application.WorksheetFunction.BetaInv(0.7, 8, 12, 3, 4)
    Range("D4").Value2 = Application.WorksheetFunction.BetaInv(0.5, 5.5, 10.5, 2, 8)
    Range("E4").Value2 = Application.WorksheetFunction.BetaInv(0.4, 1, 3)
}
```


```JavaScript
/*本示例为F3等单元格分别赋值，并使用BetaInv方法计算指定的Beta分布的累积分布函数的反函数值。*/
function test() {
    Range("F3").Value2 = 0.2
    Range("F4").Value2 = 7
    Range("F5").Value2 = 10
    Range("F6").Value2 = 2
    Range("F7").Value2 = 6
    let betadist1 = Application.WorksheetFunction.BetaInv(Range("F3").Value2, Range("F4").Value2, Range("F5").Value2, Range("F6").Value2, Range("F7").Value2)
    alert(betadist1)
}
```
