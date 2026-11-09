# WorksheetFunction.TInv

返回作为概率和自由度函数的学生 t 分布的 t 值。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [T\_Inv](#TODO) 和 [T\_Inv\_2T](#TODO) 方法。



## 语法

express.**TInv(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Probability - 与双尾学生 t 分布关联的概率。 |
| Arg2 | 必选 | number（double 精度） | degrees\_freedom - 代表分布的自由度数。 |

## 返回值

Double

## 说明


* 如果两个参数中的任意一个为非数值型，则 TINV 将返回错误值 #VALUE!。
* 如果 probability < 0 或 probability > 1，则 TINV 将返回错误值 #NUM!。
* 如果 degrees\_freedom 不是整数，则将被截尾取整。
* 如果 degrees\_freedom < 1，则 TINV 将返回错误值 #NUM!。
* TINV 返回 t 值，以使 P(|X| > t) = probability，其中 X 为服从 t 分布的随机变量，且 P(|X| > t) = P(X < -t or X > t)。
* 单尾 t 值可通过用两倍概率替换概率而求得。如果概率为 0.05 而自由度为 10，则双尾值由 TINV(0.05,10) 计算得到，它返回 2.28139。而同样概率和自由度的单尾值可由 TINV(2\*0.05,10) 计算得到，它返回 1.812462。
在某些表格中，概率被描述为 (1-p)。
如果已给定概率值，则 TINV 使用 TDIST(x, degrees\_freedom, 2) = probability 求解数值 x。因此，TINV 的精度取决于 TDIST 的精度。



## 示例


```JavaScript
/*本示例使用 TInv 方法计算作为概率和自由度函数的学生 t 分布的 t 值，并分别赋值给B2和B3单元格。*/
function test() {
    Range("B2").Value2 = WorksheetFunction.TInv(0.55, 100)
    Range("B3").Value2 = WorksheetFunction.TInv(0.2, 60.235)
}
```


```JavaScript
/*本示例为A2等单元格分别赋值，使用 TInv 方法计算作为概率和自由度函数的学生 t 分布的 t 值。*/
function test() {
    Range("A2").Value2 = 0.3
    Range("A3").Value2 = 4.3
    alert(WorksheetFunction.TInv(Range("A2").Value2, Range("A3").Value2))
}
```
