# WorksheetFunction.DevSq

返回数据点与其样本平均值的偏差的平方和。



## 语法

express.**DevSq(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Arg30 Number1, number2, ... - 为 1 到 30 个要为其计算偏差平方和的参数。也可以不使用这种用逗号分隔参数的形式，而使用一个数组或一个对数组的引用。 |

## 返回值

Double

## 说明


* 参数可以是数字，也可以是包含数字的名称、数组或引用。
* 直接键入参数列表的逻辑值和数字的文本表示也包括在内。
* 如果数组或引用参数包含文本、逻辑值或空单元格，则这些值将被忽略；但包含零值的单元格将被计算在内。
* 如果参数为错误值或不能转换为数字的文本，则将导致错误。



## 示例


```JavaScript
/*本示例为B2等单元格分别赋值，并使用DevSq方法计算数据点与其样本平均值的偏差的平方和。*/
function test() {
    Range("B2").Value2 = 60
    Range("B3").Value2 = 40
    Range("B4").Value2 = 30.5
    Range("B5").Value2 = 78
    Range("B6").Value2 = 96.77
    let devsq1 = Application.WorksheetFunction.DevSq(Range("B2:B6"))
    alert(devsq1)
}
```


```JavaScript
/*本示例使用DevSq方法计算数据点与其样本平均值的偏差的平方和，并将结果赋值于C3等单元格。*/
function test() {
    Range("C3").Value2 = Application.WorksheetFunction.DevSq(100, 20, 35.6, 24.8, 95)
    Range("C4").Value2 = Application.WorksheetFunction.DevSq(2, 4, 6, 8, 10)
    Range("C5").Value2 = Application.WorksheetFunction.DevSq(12.5, 35.9, 46.22, 75.8)
}
```
