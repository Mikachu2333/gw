# WorksheetFunction.HypGeomDist

返回超几何分布。在给定样本容量、样本总体成功次数和样本总体容量时，HYPGEOMDIST 返回样本取得给定成功次数的概率。使用 HYPGEOMDIST 可解决有限总体的问题，其中每个观察值或为成功或为失败，且其中给定样本容量的每一个子集有相等的发生概率。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [HypGeom\_Dist](#TODO) 方法。



## 语法

express.**HypGeomDist(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | sample\_s - 样本中成功的次数。 |
| Arg2 | 必选 | number（double 精度） | number\_sample - 样本的大小。 |
| Arg3 | 必选 | number（double 精度） | population\_s - 总体中成功的次数。 |
| Arg4 | 必选 | number（double 精度） | number\_population - 总体大小。 |

## 返回值

Double

## 说明


* 所有参数都将被截尾取整。
* 如果任一参数为非数值型，则 HYPGEOMDIST 将返回错误值 #VALUE!。
* 如果 sample\_s < 0 或 sample\_s 大于 number\_sample 或 population\_s 中的较小值，则 HYPGEOMDIST 将返回错误值 #NUM!。
* 如果 sample\_s 小于 0 或 (number\_sample - number\_population + population\_s) 中的较大值，则 HYPGEOMDIST 将返回错误值 #NUM!。
* 如果 number\_sample ≤ 0 或 number\_sample > number\_population，则 HYPGEOMDIST 将返回错误值 #NUM!。
* 如果 population\_s ≤ 0 或 population\_s > number\_population，则 HYPGEOMDIST 将返回错误值 #NUM!。
* 如果 number\_population ≤ 0，则 HYPGEOMDIST 将返回错误值 #NUM!。
HYPGEOMDIST 用于在有限总体中进行不退回抽样的概率计算。



## 示例


```JavaScript
/*本示例使用 HypGeomDist 方法计算超几何分布，并分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.HypGeomDist(0, 5, 1, 7)
    Range("A2").Value2 = WorksheetFunction.HypGeomDist(1, 2, 3, 5)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 HypGeomDist 方法计算超几何分布。*/
function test() {
    Range("B1").Value2 = 2
    Range("B2").Value2 = 12
    Range("B3").Value2 = 6
    Range("B4").Value2 = 24
    alert(WorksheetFunction.HypGeomDist(Range("B1").Value2, Range("B2").Value2, Range("B3").Value2, Range("B4").Value2))
}
```
