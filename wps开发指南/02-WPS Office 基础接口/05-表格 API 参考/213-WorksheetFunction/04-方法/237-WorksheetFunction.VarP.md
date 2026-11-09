# WorksheetFunction.VarP

计算基于整个总体的方差。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Var\_P](#TODO) 方法。



## 语法

express.**VarP(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | number1, number2, ... - 对应于总体的 1 到 30 个数字参数。 |

## 返回值

Double

## 说明


* VARP 假定其参数为整个总体。如果数据代表总体中的一个样本，则请使用 VAR 计算方差。
* 参数可以是数字，也可以是包含数字的名称、数组或引用。
* 直接键入到参数列表中的逻辑值和数字的文本表示形式也计算在内。
* 如果参数是一个数组或引用，则只计算该数组或引用中的数字。数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。
* 如果参数为错误值或不能转换为数字的文本，则将导致错误。



## 示例


```JavaScript
/*本示例使用 VarP 方法计算基于整个总体的方差，并分别赋值到A4和A5单元格。*/
function test() {
    Range("A4").Value2 = WorksheetFunction.VarP(1, 2, 3, 4, 5, 6, 7, 8, 9)
    Range("A5").Value2 = WorksheetFunction.VarP(100, 200.12, 30, 4.2, 544, 6.66)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 VarP 方法计算基于整个总体的方差。*/
function test() {
    Range("A1").Value2 = -55
    Range("A2").Value2 = 100.12
    Range("A3").Value2 = 20
    Range("A4").Value2 = 1000
    alert(WorksheetFunction.VarP(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2, Range("A4").Value2))
}
```
