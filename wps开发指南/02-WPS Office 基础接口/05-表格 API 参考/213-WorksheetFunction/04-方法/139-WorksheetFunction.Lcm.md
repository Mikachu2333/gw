# WorksheetFunction.Lcm

返回整数的最小公倍数。最小公倍数是所有整数参数 number1、number2 等等的最小正整数倍数。用函数 LCM 可以将分母不同的分数相加。



## 语法

express.**Lcm(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Number1, number2,... - 要计算最小公倍数的 1 到 29 个值。如果值不是整数，则截尾取整。 |

## 返回值

Double

## 说明


* 如果有任何参数为非数值型，函数 LCM 返回错误值 #VALUE!。
* 如果有任何参数小于零，函数 LCM 返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 Lcm 方法计算整数的最小公倍数，并分别赋值给C2和C3单元格。*/
function test() {
    Range("C2").Value2 = WorksheetFunction.Lcm(2, 3, 5, 7)
    Range("C3").Value2 = WorksheetFunction.Lcm(9, 15)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Lcm 方法计算A1和A2单元格值的最小公倍数。*/
function test() {
    Range("A1").Value2 = 12
    Range("A2").Value2 = 18
    alert(WorksheetFunction.Lcm(Range("A1").Value2, Range("A2").Value2))
}
```
