# WorksheetFunction.GeoMean

返回正数数组或区域的几何平均值。例如，可以使用函数 GEOMEAN 计算可变复利的平均增长率。



## 语法

express.**GeoMean(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | Number1, number2, ... - 要计算其平均值的 1 到 30 个参数。也可以不使用这种用逗号分隔参数的形式，而使用一个数组或一个对数组的引用。 |

## 返回值

Double

## 说明


* 参数可以是数字，也可以是包含数字的名称、数组或引用。
* 直接键入参数列表的逻辑值和数字的文本表示也包括在内。
* 如果数组或引用参数包含文本、逻辑值或空单元格，则这些值将被忽略；但含有零值的单元格包括在内。
* 如果参数为错误值或不能转换为数字的文本，则将导致错误。
* 如果任一数据点 ≤ 0，则 GEOMEAN 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 GeoMean 方法计算正数数组的几何平均值，并分别赋值给C1和C3单元格。*/
function test() {
    Range("C1").Value2 = WorksheetFunction.GeoMean([1, 2, 3, 6, 9])
    Range("C3").Value2 = WorksheetFunction.GeoMean(1.3, 5.2, 6.3, 8)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 GeoMean 方法计算正数区域A1:A4的几何平均值。*/
function test() {
    Range("A1").Value2 = 11
    Range("A2").Value2 = 22
    Range("A3").Value2 = 45
    Range("A4").Value2 = 66
    alert(WorksheetFunction.GeoMean(Range("A1:A4")))
}
```
