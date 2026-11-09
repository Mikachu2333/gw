# WorksheetFunction.BesselK

返回修正 Bessel 函数，它等效于根据纯虚数参数计算的 Bessel 函数。



## 语法

express.**BesselK(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 计算的函数值。 |
| Arg2 | 必选 | any | 函数的阶。如果 n 不是整数，则将被截尾取整。 |

## 返回值

Double

## 说明


* 如果 x 为非数值型，则 BesselK 将生成一个错误值。
* 如果 n 为非数值型，则 BesselK 将生成一个错误值。
* 如果 n < 0，则 BesselK 将生成一个错误值。
* 变量 x 的 n 阶修正 Bessel 函数为：  
其中 Jn 和 Yn 分别为 J 和 Y 的 Bessel 函数。



## 示例


```JavaScript
/*本示例使用BesselK方法返回修正Bessel函数值，并将结果赋值于D4等单元格。*/
function test() {
    Range("D4").Value2 = Application.WorksheetFunction.BesselK(4, 3)
    Range("D5").Value2 = Application.WorksheetFunction.BesselK(15, 2)
    Range("D6").Value2 = Application.WorksheetFunction.BesselK(20.15, 1)
}
```


```JavaScript
/*本示例为B4等单元格分别赋值，并使用BesselK方法返回修正Bessel函数值。*/
function test() {
    Range("B4").Value2 = 1
    Range("B5").Value2 = 2
    Range("B6").Value2 = 2.4
    Range("B7").Value2 = 10.9
    let besselk1 = Application.WorksheetFunction.BesselK(Range("B6").Value2, Range("B4").Value2)
    let besselk2 = Application.WorksheetFunction.BesselK(Range("B7").Value2, Range("B5").Value2)
    alert(besselk1)
    alert(besselk2)
}
```
