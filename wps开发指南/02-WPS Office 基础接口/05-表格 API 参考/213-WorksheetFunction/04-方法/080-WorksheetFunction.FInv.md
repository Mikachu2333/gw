# WorksheetFunction.FInv

返回 F 概率分布的反函数。如果 p = FDIST(x,...)，则 FINV(p,...) = x。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [F\_Inv\_RT](#TODO) 和 [F\_Inv](#TODO) 方法。



## 语法

express.**FInv(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | probability - 与 F 累积分布相关联的概率。 |
| Arg2 | 必选 | number（double 精度） | degrees\_freedom1 - 分子的自由度。 |
| Arg3 | 必选 | number（double 精度） | degrees\_freedom2 - 分母的自由度。 |

## 返回值

Double

## 说明


在 F 检验中，可以使用 F 分布比较两个数据集的变化程度。例如，可以分析美国、加拿大的收入分布，判断这两个国家的收入变化程度是否相似。

* 如果任一参数为非数值型，则 FINV 将返回错误值 #VALUE!。
* 如果 probability < 0 或 probability > 1，则 FINV 将返回错误值 #NUM!。
* 如果 degrees\_freedom1 或 degrees\_freedom2 不是整数，则将被截尾取整。
* 如果 degrees\_freedom1 < 1 或 degrees\_freedom1 ≥ 10^10，则 FINV 将返回错误值 #NUM!。
* 如果 degrees\_freedom2 < 1 或 degrees\_freedom2 ≥ 10^10，则 FINV 将返回错误值 #NUM!。

FINV 可以用于返回 F 分布的临界值。例如，ANOVA 计算的结果通常包含 F 统计值、F 概率和显著水平为 0.05 的 F 临界值等数据。若要返回 F 的临界值，请将显著水平参数用作为 FINV 的 probability 参数。

如果已给定概率值，则 FINV 使用 FDIST(x, degrees\_freedom1, degrees\_freedom2) = probability 求解数值 x。因此，FINV 的精度取决于 FDIST 的精度。FINV 使用迭代搜索技术。如果搜索在 64 次迭代之后没有收敛，则该函数将返回错误值 #N/A。



## 示例


```JavaScript
/*本示例使用 FInv 方法计算 F 概率分布的反函数结果，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.FInv(0.05, 10, 15)
    Range("B2").Value2 = WorksheetFunction.FInv(1, 5, 20)
}
```


```JavaScript
/*本示例分别赋值A1等单元格，使用 FInv 方法计算 F 概率分布的反函数结果。*/
function test() {
    Range("A1").Value2 = 0.99
    Range("A2").Value2 = 100
    Range("A3").Value2 = 999
    alert(WorksheetFunction.FInv(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2))
}
```
