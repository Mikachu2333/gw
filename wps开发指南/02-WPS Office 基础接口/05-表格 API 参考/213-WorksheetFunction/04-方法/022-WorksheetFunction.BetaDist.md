# WorksheetFunction.BetaDist

返回 Beta 累积分布函数。  

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 Beta\_Dist 方法。



## 语法

express.**BetaDist(Arg1, Arg2, Arg3, Arg4, Arg5)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 介于 A 和 B 之间的值，用来计算函数的值。 |
| Arg2 | 必选 | number（double 精度） | 分布参数。 |
| Arg3 | 必选 | number（double 精度） | 分布参数。 |
| Arg4 | 可选 | any | x 所属区间的可选下界。 |
| Arg5 | 可选 | any | x 所属区间的可选上界。 |

## 返回值

Double

## 说明


Beta 分布通常用于研究样本中某些事物变化的百分比，例如人们一天中用来看电视的时间所占的比例。  

* 如果任一参数为非数值型，则 BetaDist 将返回错误值 #VALUE!。
* 如果 alpha ≤ 0 或 beta ≤ 0，则 BetaDist 将生成一个错误值。
* 如果 x < A、x > B 或 A = B，则 BetaDist 将生成一个错误值。
* 如果省略 A 和 B 的值，则 BetaDist 将使用标准累积 Beta 分布，使 A = 0，B = 1。



## 示例


```JavaScript
/*本示例为C3等单元格分别赋值，并使用BetaDist方法计算Beta累积分布。*/
function test() {
    Range("C3").Value2 = 2
    Range("C4").Value2 = 8
    Range("C5").Value2 = 10
    Range("C6").Value2 = 1
    Range("C7").Value2 = 3
    let betadist1 = Application.WorksheetFunction.BetaDist(Range("C3").Value2, Range("C4").Value2, Range("C5").Value2, Range("C6").Value2, Range("C7").Value2)
    alert(betadist1)
}
```


```JavaScript
/*本示例使用BetaDist方法计算Beta累积分布，并将结果赋值于D3等单元格。*/
function test() {
    Range("D3").Value2 = Application.WorksheetFunction.BetaDist(3, 7, 9, 1, 6)
    Range("D4").Value2 = Application.WorksheetFunction.BetaDist(3.5, 6, 14, 2, 5)
    Range("D5").Value2 = Application.WorksheetFunction.BetaDist(2.5, 7.5, 9.5, 1, 5)
    Range("D6").Value2 = Application.WorksheetFunction.BetaDist(0.5, 7, 9)
}
```
