# WorksheetFunction.CountA

计算非空单元格及参数列表中值的个数。



## 语法

express.**CountA(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Arg30 代表要计算在内的值的 1 到 30 个参数。 |

## 返回值

Double

## 说明


使用 CountA 可以计算区域或数组中包含数据的单元格的个数。

* 值可以是任何信息类型，包括错误值和空文本 ("")，但不包括空单元格。
* 如果参数为数组或引用，则只会使用该数组或引用中的值。数组或引用中的空单元格和文本值将被忽略。
* 如果不需要统计逻辑值、文本或错误值，则请使用 Count 函数。



## 示例


```JavaScript
/*本示例为B2等单元格分别赋值，并使用CountA方法计算非空单元格中值的个数。*/
function test() {
    Range("B2").Value2 = 5
    Range("B3").Value2 = 3
    Range("B4").Value2 = "西瓜"
    Range("B5").Value2 = ""
    Range("B6").Value2 = 1.5
    let counta1 = Application.WorksheetFunction.CountA(Range("B2:B6"))
    alert(counta1)
}
```


```JavaScript
/*本示例使用CountA方法计算参数列表中值的个数，并将结果赋值于D3等单元格。*/
function test() {
    Range("D3").Value2 = Application.WorksheetFunction.CountA(2, 4, "香蕉", "苹果", true)
    Range("D4").Value2 = Application.WorksheetFunction.CountA(12, 13, 14, 15, 16)
    Range("D5").Value2 = Application.WorksheetFunction.CountA("篮球", "乒乓球", false)
}
```
