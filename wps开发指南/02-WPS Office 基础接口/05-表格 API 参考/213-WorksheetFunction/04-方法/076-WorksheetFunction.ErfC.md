# WorksheetFunction.ErfC

返回从指定参数到无穷积分的 ERF 函数的余误差函数。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [ErfC\_Precise](#TODO) 方法。



## 语法

express.**ErfC(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 第一个参数。 |

## 返回值

Double

## 说明


如果该函数不可用，并返回 #NAME? 错误，则需要安装并加载 **“分析工具库”** 加载宏。

如果参数是非数值，则 ERFC 返回 #VALUE! 错误值。

如果参数是负值，则 ERFC 返回 #NUM! 错误值。



## 示例


```JavaScript
/*本示例分别赋值B1等单元格，使用 ErfC 方法计算指定参数到无穷积分的 ERF 函数的余误差函数。*/
function test() {
    Range("B1").Value2 = 1
    Range("B2").Value2 = 3.3
    alert(WorksheetFunction.ErfC(Range("B1").Value2))
    alert(WorksheetFunction.ErfC(Range("B2").Value2))
}
```


```JavaScript
/*本示例使用 ErfC 方法计算指定参数到无穷积分的 ERF 函数的余误差函数，并分别赋值给D1等单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.ErfC(0)
    Range("D2").Value2 = WorksheetFunction.ErfC(1000)
}
```
