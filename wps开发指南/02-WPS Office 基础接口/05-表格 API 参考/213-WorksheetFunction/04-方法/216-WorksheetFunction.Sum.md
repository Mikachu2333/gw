# WorksheetFunction.Sum

对某单元格区域中的所有数字求和。



## 语法

express.**Sum(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | Number1, number2, ... - 要对其求和的 1 到 30 个参数。 |

## 返回值

Double

## 说明


* 直接键入参数列表的数字、逻辑值和数字的文本表示也包括在内。请参阅下面的第一个和第二个示例。
* 如果参数为数组或引用，则只有该数组或引用中的数字将被计算在内。数组或引用中的空单元格、逻辑值或文本将被忽略。请参阅下面的第三个示例。
* 如果参数为错误值或不能转换为数字的文本，则将导致错误。



## 示例


```JavaScript
/*本示例使用 Sum 方法计算所有数字求和，并赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.Sum(1.1, 2.2, 3.3)
    Range("A2").Value2 = WorksheetFunction.Sum(-7, -3.6, 0)
}
```


```JavaScript
/*本示例为E1等单元格赋值，使用 Sum 方法计算E1等单元格中的所有数字求和。*/
function test() {
    Range("E1").Value2 = 2.5
    Range("E2").Value2 = -5
    Range("E3").Value2 = 6
    alert(WorksheetFunction.Sum(Range("E1").Value2, Range("E2").Value2, Range("E3").Value2))
}
```
