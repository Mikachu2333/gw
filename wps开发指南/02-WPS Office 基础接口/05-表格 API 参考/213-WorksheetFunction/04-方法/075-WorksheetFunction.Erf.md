# WorksheetFunction.Erf

返回误差函数在 lower\_limit 和 upper\_limit 之间的积分。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 **[Erf\_Precise](#TODO)** 方法。



## 语法

express.**Erf(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Lower\_limit - ERF 的积分下限。 |
| Arg2 | 可选 | any | Upper\_limit - ERF 的积分上限。如果省略，ERF 将在零到下限之间进行积分。 |

## 返回值

Double

## 说明


* 如果 lower\_limit 是非数值型，则 ERF 将返回错误值 #VALUE!。
* 如果 lower\_limit 是负数，则 ERF 将返回错误值 #NUM!。
* 如果 upper\_limit 是非数值型，则 ERF 将返回错误值 #VALUE!。
* 如果 upper\_limit 是负数，则 ERF 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例分别赋值A1等单元格，使用 Erf 方法计算误差函数在A1单元格数值和A2单元格数值之间的积分。*/
function test() {
    Range("A1").Value2 = 2
    Range("A2").Value2 = 0.5
    alert(WorksheetFunction.Erf(Range("A1").Value2, Range("A2").Value2))
}
```


```JavaScript
/*本示例使用 Erf 方法计算误差函数在参数1和参数2之间的积分，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.Erf(0, 0)
    Range("B2").Value2 = WorksheetFunction.Erf(-1, 0.8)
}
```
