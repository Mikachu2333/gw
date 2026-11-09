# WorksheetFunction.TDist

返回学生 t 分布的百分点（概率），其中数值 (x) 是 t 的计算值（将计算其百分点）。t 分布用于小样本数据集的假设检验。使用此函数可以代替 t 分布的临界值表。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [T\_Dist\_RT](#TODO)、[T\_Dist](#TODO) 和 [T\_Dist\_2T](#TODO) 方法。



## 语法

express.**TDist(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | x - 用于计算分布的值。 |
| Arg2 | 必选 | number（double 精度） | Degrees\_freedom - 表示自由度数的整数。 |
| Arg3 | 必选 | number（double 精度） | Tails - 指定要返回的分布的尾数。如果 tails = 1，则 TDIST 将返回单尾分布。如果 tails = 2，则 TDIST 将返回双尾分布。 |

## 返回值

Double

## 说明


* 如果任一参数为非数值型，则 TDIST 将返回错误值 #VALUE!。
* 如果 degrees\_freedom < 1，则 TDIST 将返回错误值 #NUM!。
* 参数 degrees\_freedom 和 tails 将被截尾取整。
* 如果 tails 不为 1 或 2，则 TDIST 将返回错误值 #NUM!。
* 如果 x < 0，则 TDIST 将返回错误值 #NUM!。
* 如果 tails = 1，则 TDIST 的计算公式为 TDIST = P( X>x )，其中 X 为服从 t 分布的随机变量。如果 tails = 2，则 TDIST 的计算公式为 TDIST = P(|X| > x) = P(X > x or X < -x)。
* 因为不允许 x < 0，当 x < 0 时要使用 TDIST，应该注意 TDIST(-x,df,1) = 1 – TDIST(x,df,1) = P(X > -x) 和 TDIST(-x,df,2) = TDIST(x df,2) = P(|X| > x)。



## 示例


```JavaScript
/*本示例使用 TDist 方法计算学生 t 分布的百分点（概率），并分别赋值给D2和D3单元格。*/
function test() {
    Range("D2").Value2 = WorksheetFunction.TDist(0.55, 10, 1)
    Range("D3").Value2 = WorksheetFunction.TDist(20, 1.23, 2)
}
```


```JavaScript
/*本示例为E1等单元格分别赋值，使用 TDist 方法计算学生 t 分布的百分点（概率）。*/
function test() {
    Range("E1").Value2 = 2
    Range("E2").Value2 = 16
    Range("F1").Value2 = 1
    alert(WorksheetFunction.TDist(Range("E1").Value2, Range("E2").Value2, Range("F1").Value2))
}
```
