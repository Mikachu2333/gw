# WorksheetFunction.StDev_S

基于样本估算标准偏差。标准偏差反映数值相对于平均值 (mean) 的离散程度。



## 语法

express.**StDev_S(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | number1,number2,... - 对应于总体样本的 1 到 30 个数字参数。也可以不使用这种用逗号分隔参数的形式，而使用一个数组或一个对数组的引用。 |

## 返回值

Double

## 说明


* STDEV\_S 假定其参数是总体的样本。如果数据代表整个总体，则应使用 STDEV\_P 来计算标准偏差。
* 标准偏差的计算使用“无偏差”或“n-1”方法。
* 参数可以是数字，也可以是包含数字的名称、数组或引用。
* 直接键入到参数列表中的逻辑值和数字的文本表示形式也计算在内。
* 如果参数是一个数组或引用，则只计算该数组或引用中的数字。数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。
* 如果参数为错误值或不能转换为数字的文本，则将导致错误。



## 示例


```JavaScript
/*本示例使用 StDev_S 方法计算基于样本估算标准偏差，并分别赋值给A1和A2单元格。*/
function test() {
    let arr1 = [-10.1, 20.3, 40, 50.3, 60]
    let arr2 = [-10.9, 10.3, 30, 20.3, 40]
    Range("A1").Value2 = WorksheetFunction.StDev_S(arr1, arr2)
    Range("A2").Value2 = WorksheetFunction.StDev_S(11, 21, 31.1, 41, 21.6, 14)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 StDev_S 方法计算基于样本估算标准偏差。*/
function test() {
    Range("B1").Value2 = 51.3
    Range("B2").Value2 = 10.2
    Range("B3").Value2 = 22.3
    alert(WorksheetFunction.StDev_S(Range("B1").Value2, Range("B2").Value2, Range("B3").Value2))
}
```
