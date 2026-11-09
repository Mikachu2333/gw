# WorksheetFunction.ExponDist

返回指数分布。使用 EXPONDIST 可以建立事件之间的时间间隔模型，如银行自动提款机支付一次现金所花费的时间。例如，可以使用函数 EXPONDIST 来确定这一过程最长持续 1 分钟的发生概率。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Expon\_Dist](#TODO) 方法。



## 语法

express.**ExponDist(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | x - 函数的值。 |
| Arg2 | 必选 | number（double 精度） | lambda - 参数值。 |
| Arg3 | 必选 | boolean | Cumulative - 一个逻辑值，指示要提供的指数函数的形式。如果 cumulative 为 TRUE，则 EXPONDIST 将返回累积分布函数；如果为 FALSE，则它将返回概率密度函数。 |

## 返回值

Double

## 说明


* 如果 x 或 lambda 为非数值型，则 EXPONDIST 将返回错误值 #VALUE!。
* 如果 x < 0，则 EXPONDIST 将返回错误值 #NUM!。
* 如果 lambda ≤ 0，则 EXPONDIST 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例分别赋值A1等单元格，使用 ExponDist 方法计算指数分布结果。*/
function test() {
    Range("A1").Value2 = 5
    Range("A2").Value2 = 6
    alert(WorksheetFunction.ExponDist(Range("A1").Value2, Range("A2").Value2, false))
}
```


```JavaScript
/*本示例使用 ExponDist 方法计算指数分布结果，并分别赋值给C1等单元格。*/
function test() {
    Range("C1").Value2 = WorksheetFunction.ExponDist(5.5, 9.9, true)
    Range("C2").Value2 = WorksheetFunction.ExponDist(0, 6, false)
}
```
