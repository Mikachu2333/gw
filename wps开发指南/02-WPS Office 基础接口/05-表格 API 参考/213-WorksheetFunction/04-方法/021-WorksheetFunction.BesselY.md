# WorksheetFunction.BesselY

返回 Bessel 函数，该函数也称为 Weber 函数或 Neumann 函数。



## 语法

express.**BesselY(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 计算的函数值。 |
| Arg2 | 必选 | any | 函数的阶。如果 n 不是整数，则将被截尾取整。 |

## 返回值

Double

## 说明


* 如果 x 为非数值型，则 BesselY 将生成一个错误值。
* 如果 n 为非数值型，则 BesselY 将生成一个错误值。
* 如果 n < 0，则 BesselY 将生成一个错误值。
* 变量 x 的 n 阶 Bessel 函数为：



## 示例


```JavaScript
/*本示例为A2等单元格分别赋值，并使用BesselY方法计算并显示结果。*/
function test() {
    Range("A2").Value2 = 1
    Range("B2").Value2 = 2
    Range("C2").Value2 = 2.5
    Range("D2").Value2 = 10
    let bessely1 = Application.WorksheetFunction.BesselY(Range("C2").Value2, Range("B2").Value2)
    let bessely2 = Application.WorksheetFunction.BesselY(Range("D2").Value2, Range("A2").Value2)
    alert(bessely1)
    alert(bessely2)
}
```


```JavaScript
/*本示例使用BesselY方法计算，并将结果赋值于B3等单元格。*/
function test() {
    Range("B3").Value2 = Application.WorksheetFunction.BesselY(3, 3)
    Range("B4").Value2 = Application.WorksheetFunction.BesselY(23.5, 4)
    Range("B5").Value2 = Application.WorksheetFunction.BesselY(40.12, 1)
}
```
