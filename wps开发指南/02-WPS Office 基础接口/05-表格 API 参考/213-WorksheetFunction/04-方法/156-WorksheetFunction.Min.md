# WorksheetFunction.Min

返回一组值中的最小值。



## 语法

express.**Min(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | Number1, number2, ... - 要从中查找最小值的 1 到 30 个数字。 |

## 返回值

Double

## 说明


* 参数可以是数字，也可以是包含数字的名称、数组或引用。
* 直接键入参数列表的数字的逻辑值和文本表示也包括在内。
* 如果参数为数组或引用，则只使用其中的数值。数组或引用中的空白单元格、逻辑值或文本将被忽略。
* 如果参数不包含任何数字，则 MIN 返回 0。
* 如果参数为错误值或不能转换为数字的文本，则将导致错误。
* 如果想在引用中将数字的逻辑值和文本表示作为计算的一部分包括在内，请使用 MINA 函数。



## 示例


```JavaScript
/*本示例使用 Min 方法计算一组值中的最小值，并将结果分别赋值给A1和A2单元格。*/
function test() {
    let arr1 = [1, 2, 3, 4]
    Range("A1").Value2 = WorksheetFunction.Min(arr1)
    Range("A2").Value2 = WorksheetFunction.Min(10, 20, -4, 2.6, 5)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Min 方法计算区域A1:A4中的最小值。*/
function test() {
    Range("A1").Value2 = 10.6
    Range("A2").Value2 = 10.65
    Range("A3").Value2 = 10.23
    Range("A4").Value2 = 10.2
    alert(WorksheetFunction.Min(Range("A1:A4")))
}
```
