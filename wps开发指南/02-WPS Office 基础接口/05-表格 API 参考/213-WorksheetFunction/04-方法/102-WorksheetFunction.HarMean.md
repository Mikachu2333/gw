# WorksheetFunction.HarMean

返回一组数据的调和平均值。调和平均值与倒数的算术平均值互为倒数。



## 语法

express.**HarMean(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | Number1, number2, ... - 要计算其平均值的 1 到 30 个参数。也可以不使用这种用逗号分隔参数的形式，而使用一个数组或一个对数组的引用。 |

## 返回值

Double

## 说明


* 调和平均值总小于几何平均值，而几何平均值总小于算术平均值。
* 参数可以是数字，也可以是包含数字的名称、数组或引用。
* 直接键入参数列表的逻辑值和数字的文本表示也包括在内。
* 如果数组或引用参数包含文本、逻辑值或空单元格，则这些值将被忽略；但含有零值的单元格包括在内。
* 如果参数为错误值或不能转换为数字的文本，则将导致错误。
* 如果任一数据点 ≤ 0，则 HARMEAN 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 HarMean 方法计算数组中数据的调和平均值，并分别赋值给D1和D2单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.HarMean([1, 2, 3, 4, 5])
    Range("D2").Value2 = WorksheetFunction.HarMean([1.2, 3.6, 5.6, 8])
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 HarMean 方法计算区域B1:B4中数据的调和平均值。*/
function test() {
    Range("B1").Value2 = 12
    Range("B2").Value2 = 1
    Range("B3").Value2 = 25
    Range("B4").Value2 = 3
    alert(WorksheetFunction.HarMean(Range("B1:B4")))
}
```
