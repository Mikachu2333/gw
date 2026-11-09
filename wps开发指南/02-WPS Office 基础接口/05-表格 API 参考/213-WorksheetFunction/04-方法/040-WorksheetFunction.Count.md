# WorksheetFunction.Count

计算包含数字的单元格的个数，以及参数列表中的数字的个数。



## 语法

express.**Count(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Arg30 可以包含或引用各种不同类型的数据的 1 到 30 个参数，但只有数字才计算在内。 |

## 返回值

Double

## 说明


使用 Count 可以获得区域或数字数组中数字字段的输入项个数。

* 作为数字、日期或用文本表示的数字的参数会被计算在内。
* 直接键入参数列表的逻辑值和数字的文本表示也包括在内。
* 如果参数为错误值或无法转换为数字的文本，则将被忽略。
* 如果参数为数组或引用，则只有该数组或引用中的数字将被计算在内。数组或引用中的空单元格、逻辑值、文本或错误值将被忽略。
* 如果想统计逻辑值、文本或错误值，则请使用 CountA 函数。



## 示例


```JavaScript
/*本示例为C2等单元格分别赋值，并使用Count方法计算包含数字的单元格的个数。*/
function test() {
    Range("C2").Value2 = 1
    Range("C3").Value2 = 2
    Range("C4").Value2 = "西瓜"
    Range("C5").Value2 = 12
    Range("C6").Value2 = 13.5
    let count1 = Application.WorksheetFunction.Count(Range("C2:C6"))
    alert(count1)
}
```


```JavaScript
/*本示例使用Count方法计算包含数字的单元格的个数，并将结果赋值于F3等单元格。*/
function test() {
    Range("F3").Value2 = Application.WorksheetFunction.Count(12, 24, 35, "香蕉", "苹果", 30)
    Range("F4").Value2 = Application.WorksheetFunction.Count(12.3, 12.5, 15.33)
    Range("F5").Value2 = Application.WorksheetFunction.Count("足球", "篮球", "乒乓球")
}
```
