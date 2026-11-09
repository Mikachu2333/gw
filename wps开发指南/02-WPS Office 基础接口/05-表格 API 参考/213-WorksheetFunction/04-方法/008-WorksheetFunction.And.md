# WorksheetFunction.And

如果其所有参数都为 TRUE，则返回 TRUE；如果一个或多个参数为 FALSE，则返回 FALSE。



## 语法

express.**And(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | 1 到 30 个需要进行检验的条件，可为 TRUE 或 FALSE。 |

## 返回值

Boolean

## 说明


* 参数的计算结果必须为逻辑值（如 TRUE 或 FALSE），或者参数必须是包含逻辑值的数组或引用。
* 如果数组或引用参数中包含文本或空单元格，则这些值将被忽略。
* 如果指定区域内不包含逻辑值，则此方法将生成一个错误值。



## 示例


```JavaScript
/*本示例使用And计算所有参数结果，并将结果赋值于E5等单元格。*/
function test() {
    Range("E5").Value2 = Application.WorksheetFunction.And(true, true)
    Range("E6").Value2 = Application.WorksheetFunction.And(false, false)
    Range("E7").Value2 = Application.WorksheetFunction.And(false, true)
}
```


```JavaScript
/*本示例为H5等单元格分别赋值，并使用And计算所有参数结果。*/
function test() {
    Range("H5").Value2 = 78
    Range("H6").Value2 = 56
    let and1 = Application.WorksheetFunction.And(Range("H5").Value2 > Range("H6").Value2)
    let and2 = Application.WorksheetFunction.And(true, Range("H5").Value2 < Range("H6").Value2, true)
    let and3 = Application.WorksheetFunction.And(Range("H5").Value2 > Range("H6").Value2, false, true)
    alert(and1)
    alert(and2)
    alert(and3)
}
```
