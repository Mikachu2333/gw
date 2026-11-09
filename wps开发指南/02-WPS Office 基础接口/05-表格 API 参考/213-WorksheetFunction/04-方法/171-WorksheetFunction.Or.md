# WorksheetFunction.Or

在其参数组中，如果任一参数的逻辑值为 TRUE，即返回 TRUE；如果所有参数的逻辑值为 FALSE，即返回 FALSE。



## 语法

express.**Or(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Logical1,logical2,... - 1 到 30 个需要进行检验的条件，可为 TRUE 或 FALSE。 |

## 返回值

Boolean

## 说明


* 参数必须能计算为逻辑值，如 TRUE 或 FALSE，或者为包含逻辑值的数组 （数组：用于建立可生成多个结果或可对在行和列中排列的一组参数进行运算的单个公式。数组区域共用一个公式；数组常量是用作参数的一组常量。）或引用。
* 如果数组或引用参数中包含文本或空单元格，则这些值将被忽略。
* 如果指定的区域中不包含任何逻辑值，则 OR 返回错误值 #VALUE!。
* 可以使用 OR 数组公式来检验数组中是否包含特定的数值。若要输入数组公式，请按 Ctrl+Shift+Enter。



## 示例


```JavaScript
/*本示例使用 Or 方法判断参数的逻辑值，并分别赋值给C1和C2单元格。*/
function test() {
    Range("C1").Value2 = WorksheetFunction.Or(true, false, false, false)
    Range("C2").Value2 = WorksheetFunction.Or(false, false)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Or 方法判断如下相应条件的逻辑值。*/
function test() {
    Range("A1").Value2 = 4
    Range("A2").Value2 = 3
    Range("A3").Value2 = 0
    Range("A4").Value2 = 10
    alert(WorksheetFunction.Or(Range("A1").Value2 > 1, Range("A2").Value2 > 1, Range("A3").Value2 < 1, Range("A4").Value2 == 10))
}
```
