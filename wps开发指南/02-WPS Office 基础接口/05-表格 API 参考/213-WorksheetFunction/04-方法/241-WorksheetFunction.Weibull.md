# WorksheetFunction.Weibull

返回韦伯分布。使用此分布可以进行可靠性分析，例如计算设备失效的平均时间。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Weibull\_Dist](#TODO) 方法。



## 语法

express.**Weibull(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | x - 用于计算函数的值。 |
| Arg2 | 必选 | number（double 精度） | alpha - 分布参数。 |
| Arg3 | 必选 | number（double 精度） | beta - 分布参数。 |
| Arg4 | 必选 | boolean | cumulative - 决定函数的形式。 |

## 返回值

Double

## 说明


* 如果 x、alpha 或 beta 为非数值型，则 WEIBULL 将返回错误值 #VALUE!。
* 如果 x < 0，则 WEIBULL 将返回错误值 #NUM!。
* 如果 alpha ≤ 0 或 beta ≤ 0，则 WEIBULL 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例演示用 Weibull 计算韦伯分布。*/
function test() {
    Range("A3").Value2 = WorksheetFunction.Weibull(1, 2, 2, true)
    Range("A4").Value2 = WorksheetFunction.Weibull(2, 4, 1, false)
}
```


```JavaScript
/*本示例演示为B3等单元格赋值，再用 Weibull 计算韦伯分布。*/
function test() {
    Range("B3").Value2 = 2.3
    Range("B4").Value2 = 3
    Range("B5").Value2 = 5.62
    alert(WorksheetFunction.Weibull(Range("B3").Value2, Range("B4").Value2, Range("B5").Value2, true))
}
```
