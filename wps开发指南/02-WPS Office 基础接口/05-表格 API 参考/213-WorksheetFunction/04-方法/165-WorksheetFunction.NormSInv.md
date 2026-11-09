# WorksheetFunction.NormSInv

返回标准正态累积分布函数的反函数。该分布的平均值为 0，标准偏差为 1。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Norm\_S\_Inv](#TODO) 方法。



## 语法

express.**NormSInv(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | probability - 对应于正态分布的概率。 |

## 返回值

Double

## 说明


* 如果 probability 为非数字型，则 NORMSINV 返回错误值 #VALUE!。
* 如果 probability <= 0 或 probability >= 1，则 NORMSINV 将返回错误值 #NUM!。

如果已给定概率值，则 NORMSINV 将使用 NORMSDIST(z) = probability 求解数值 z。因此，NORMSINV 的精度取决于 NORMSDIST 的精度。



## 示例


```JavaScript
/*本示例使用 NormSInv 方法计算标准正态累积分布函数的反函数，并分别赋值给C3和C4单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.NormSInv(0.72)
    Range("D2").Value2 = WorksheetFunction.NormSInv(0.055)
}
```


```JavaScript
/*本示例为A1单元格赋值，使用 NormSInv 方法计算标准正态累积分布函数的反函数。*/
function test() {
    Range("A1").Value2 = 0.654
    alert(WorksheetFunction.NormSInv(Range("A1").Value2))
}
```
