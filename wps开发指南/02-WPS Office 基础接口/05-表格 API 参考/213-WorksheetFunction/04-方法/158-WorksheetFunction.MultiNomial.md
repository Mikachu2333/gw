# WorksheetFunction.MultiNomial

返回参数和的阶乘与各参数阶乘乘积的比值。



## 语法

express.**MultiNomial(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | Number1,number2, ... - 用于进行函数 Multinomial 运算的 1 到 29 个数值参数。 |

## 返回值

Double

## 说明


* 如果有些参数为非数值型，函数 MULTINOMIAL 返回错误值 #VALUE!。
* 如果有任何参数小于零，函数 MULTINOMIAL 返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 MultiNomial 方法计算参数和的阶乘与各参数阶乘乘积的比值，并分别赋值给A5和A6单元格。*/
function test() {
    Range("A5").Value2 = WorksheetFunction.MultiNomial(1, 2, 3)
    Range("A6").Value2 = WorksheetFunction.MultiNomial(30.3, 50.5, 60.66)
}
```


```JavaScript
/*本示例为B3等单元格分别赋值，使用 MultiNomial 方法计算B3等单元格的参数和的阶乘与各参数阶乘乘积的比值。*/
function test() {
    Range("B3").Value2 = 1.1
    Range("B4").Value2 = 5.5
    alert(WorksheetFunction.MultiNomial(Range("B3").Value2, Range("B4").Value2))
}
```
