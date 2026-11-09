# WorksheetFunction.GammaInv

返回 γ 累积分布函数的反函数。如果 p = GAMMADIST(x,...)，则 GAMMAINV(p,...) = x。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Gamma\_Inv](#TODO) 方法。



## 语法

express.**GammaInv(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | probability - 与 γ 分布相关联的概率。 |
| Arg2 | 必选 | number（double 精度） | alpha - 分布参数。 |
| Arg3 | 必选 | number（double 精度） | beta - 分布参数。如果 beta = 1，则 GAMMAINV 将返回标准 γ 分布。 |

## 返回值

Double

## 说明


可以使用此函数研究可能出现偏态分布的变量。

* 如果任一参数为文本，则 GAMMAINV 将返回错误值 #VALUE!。
* 如果 probability < 0 或 probability > 1，则 GAMMAINV 将返回错误值 #NUM!。
* 如果 alpha ≤ 0 或 beta ≤ 0，则 GAMMAINV 将返回错误值 #NUM!。

如果已给定概率值，则 GAMMAINV 使用 GAMMADIST(x, alpha, beta, TRUE) = probability 求解数值 x。因此，GAMMAINV 的精度取决于 GAMMADIST 的精度。GAMMAINV 使用迭代搜索技术。如果搜索在 64 次迭代之后没有收敛，则该函数将返回错误值 #N/A。



## 示例


```JavaScript
/*本示例使用 GammaInv 方法计算γ累积分布函数的反函数，并分别赋值给D1和D2单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.GammaInv(0, 0.6, 0.4)
    Range("D2").Value2 = WorksheetFunction.GammaInv(0.2, 6, 1)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 GammaInv 方法计算γ累积分布函数的反函数。*/
function test() {
    Range("B1").Value2 = 0.99
    Range("B2").Value2 = 0.5
    Range("B3").Value2 = 6
    alert(WorksheetFunction.GammaInv(Range("B1").Value2, Range("B2").Value2, Range("B3").Value2))
}
```
