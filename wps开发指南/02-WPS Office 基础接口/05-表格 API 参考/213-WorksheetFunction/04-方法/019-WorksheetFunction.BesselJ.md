# WorksheetFunction.BesselJ

返回 Bessel 函数。



## 语法

express.**BesselJ(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 计算的函数值。 |
| Arg2 | 必选 | any | Bessel 函数的阶。如果 n 不是整数，则将被截尾取整。 |

## 返回值

Double

## 说明


* 如果 x 为非数值型，则 BesselJ 将生成一个错误值。
* 如果 n 为非数值型，则 BesselJ 将返回一个错误值。
* 如果 n < 0，则 BesselJ 将生成一个错误值。
* 变量 x 的 n 阶 Bessel 函数为：  
其中：  
为 γ 函数。



## 示例


```JavaScript
/*本示例使用BesselJ方法返回Bessel函数值，并将结果赋值于F4等单元格。*/
function test() {
    Range("F4").Value2 = Application.WorksheetFunction.BesselJ(1.5, 1)
    Range("F5").Value2 = Application.WorksheetFunction.BesselJ(12, 2)
    Range("F6").Value2 = Application.WorksheetFunction.BesselJ(30.45, 2)
}
```


```JavaScript
/*本示例为A5等单元格分别赋值，并使用BesselJ方法返回Bessel函数值。*/
function test() {
    Range("A5").Value2 = 3
    Range("B5").Value2 = 4
    Range("C5").Value2 = 2
    Range("D5").Value2 = -5
    let besselj1 = Application.WorksheetFunction.BesselJ(Range("C5").Value2, Range("A5").Value2)
    let besselj2 = Application.WorksheetFunction.BesselJ(Range("D5").Value2, Range("B5").Value2)
    alert(besselj1)
    alert(besselj2)
}
```
