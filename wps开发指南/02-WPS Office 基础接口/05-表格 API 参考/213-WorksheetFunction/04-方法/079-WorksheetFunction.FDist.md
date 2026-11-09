# WorksheetFunction.FDist

返回 F 概率分布。可以使用此函数确定两个数据集是否存在变化程度上的不同。例如，可以分析进入高校的男生、女生的考试分数，确定女生分数的变化程度是否与男生不同。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [F\_Dist\_RT](#TODO) 和 [F\_Dist](#TODO) 方法。



## 语法

express.**FDist(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | x - 用于计算函数的值。 |
| Arg2 | 必选 | number（double 精度） | degrees\_freedom1 - 分子的自由度。 |
| Arg3 | 必选 | number（double 精度） | degrees\_freedom2 - 分母的自由度。 |

## 返回值

Double

## 说明


* 如果任一参数为非数值型，则 FDIST 将返回错误值 #VALUE!。
* 如果 x 为负数，则 FDIST 将返回错误值 #NUM!。
* 如果 degrees\_freedom1 或 degrees\_freedom2 不是整数，则将被截尾取整。
* 如果 degrees\_freedom1 < 1 或 degrees\_freedom1 ≥ 10^10，则 FDIST 将返回错误值 #NUM!。
* 如果 degrees\_freedom2 < 1 或 degrees\_freedom2 ≥ 10^10，则 FDIST 将返回错误值 #NUM!。
* FDIST 的计算公式为 FDIST=P( F>x )，其中 F 为呈 F 分布且自由度为 degrees\_freedom1 和 degrees\_freedom2 的随机变量。



## 示例


```JavaScript
/*本示例分别赋值A1等单元格，使用 FDist 方法计算 F 概率分布结果。*/
function test() {
    Range("A1").Value2 = 2.5
    Range("A2").Value2 = 5
    Range("A3").Value2 = 10
    alert(WorksheetFunction.FDist(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2))
}
```


```JavaScript
/*本示例使用 FDist 方法计算 F 概率分布结果，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.FDist(0.05, 7, 12)
    Range("B2").Value2 = WorksheetFunction.FDist(1.5, 30, 40)
}
```
