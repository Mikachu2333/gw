# WorksheetFunction.StDevP

基于以参数形式给出的整个样本总体计算标准偏差。标准偏差反映数值相对于平均值 (mean) 的离散程度。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [StDev\_P](#TODO) 方法。



## 语法

express.**StDevP(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | number1, number2, ... - 对应于总体的 1 到 30 个数字参数。也可以不使用这种用逗号分隔参数的形式，而使用一个数组或一个对数组的引用。 |

## 返回值

Double

## 说明


* STDEVP 假定其参数为整个总体。如果数据代表总体中的样本，则应使用 STDEV 来计算标准偏差。
* 对于较大的样本大小，STDEV 和 STDEVP 的返回值大致相等。
* 此处标准偏差的计算使用“有偏差”或“n”方法。
* 参数可以是数字，也可以是包含数字的名称、数组或引用。
* 直接键入到参数列表中的逻辑值和数字的文本表示形式也计算在内。
* 如果参数是一个数组或引用，则只计算该数组或引用中的数字。数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。
* 如果参数为错误值或不能转换为数字的文本，则将导致错误。



## 示例


```JavaScript
/*本示例使用 StDevP 方法获取基于以参数形式给出的整个样本总体计算标准偏差，并分别赋值给B1和B2单元格。*/
function test() {
    let arr1 = [-1.1, 2.3, 4, 5.3, 6]
    let arr2 = [-0.9, 1.3, 3, 2.3, 4]
    Range("B1").Value2 = WorksheetFunction.StDevP(arr1, arr2)
    Range("B2").Value2 = WorksheetFunction.StDevP(1, 2, 3.1, 4, 2.6, 4)
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，使用 StDevP 方法获取基于以参数形式给出的整个样本总体计算标准偏差。*/
function test() {
    Range("C1").Value2 = 5.3
    Range("C2").Value2 = 0.2
    Range("C3").Value2 = 2.3
    alert(WorksheetFunction.StDevP(Range("C1").Value2, Range("C2").Value2, Range("C3").Value2))
}
```
