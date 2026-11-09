# WorksheetFunction.Gcd

返回两个或多个整数的最大公约数，最大公约数是能分别将 Number1 和 Number2 除尽的最大整数。



## 语法

express.**Gcd(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | Number1, number2, ... - 为 1 到 29 个值，如果任一值不是整数，则将被截尾取整。 |

## 返回值

Double

## 说明


* 如果任一参数为非数值型，则 GCD 将返回错误值 #VALUE!。
* 如果任一参数小于零，则 GCD 将返回错误值 #NUM!。
* 任何值都能被 1 整除。
* 素数只能被其本身和 1 整除。



## 示例


```JavaScript
/*本示例使用 Gcd 方法计算两个或多个整数的最大公约数，并分别赋值给D1和D3单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.Gcd(2, 6)
    Range("D3").Value2 = WorksheetFunction.Gcd(100, 20, 50)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Gcd 方法计算A1等单元格的最大公约数。*/
function test() {
    Range("A1").Value2 = 9
    Range("A2").Value2 = 15
    Range("A3").Value2 = 30
    alert(WorksheetFunction.Gcd(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2))
}
```
