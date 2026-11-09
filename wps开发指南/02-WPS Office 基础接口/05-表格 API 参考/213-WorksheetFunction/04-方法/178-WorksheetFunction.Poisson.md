# WorksheetFunction.Poisson

返回泊松分布。泊松分布通常用于预测一段时间内事件发生的次数，例如一分钟内通过收费站的轿车的数量。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Poisson\_Dist](#TODO) 方法。



## 语法

express.**Poisson(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | x - 事件数。 |
| Arg2 | 必选 | number（double 精度） | mean - 期望的数值。 |
| Arg3 | 必选 | boolean | cumulative - 一个决定所返回的概率分布形式的逻辑值。如果 cumulative 为 TRUE，则函数 POISSON 返回泊松累积分布概率，即，随机事件发生的次数在零到 x 之间（包括零和 x）；如果为 FALSE，则返回泊松概率密度函数，即，随机事件发生的次数正好为 x。 |

## 返回值

Double

## 说明


* 如果 x 不是整数，则将被截尾取整。
* 如果 x 或 mean 为非数字型，则 POISSON 返回错误值 #VALUE!。
* 如果 x < 0，函数 POISSON 返回错误值 #NUM!。
* 如果 mean ≤ 0，则 POISSON 返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 Poisson 方法分别计算事件数10和23的泊松分布，并分别赋值给D1和D2单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.Poisson(10, 24, true)
    Range("D2").Value2 = WorksheetFunction.Poisson(23, 12, false)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 Poisson 方法计算泊松分布。*/
function test() {
    Range("B1").Value2 = 5
    Range("B2").Value2 = 3
    alert(WorksheetFunction.Poisson(Range("B1").Value2, Range("B2").Value2, true))
}
```
