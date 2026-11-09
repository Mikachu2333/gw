# WorksheetFunction.ImSum

返回以 x + yi 或 x + yj 文本格式表示的两个或更多个复数的和。



## 语法

express.**ImSum(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | inumber1、inumber2、...对应 1 到 30 个需要相加的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImSum 方法计算 x + yi 或 x + yj 文本格式表示的复数和，并分别赋值给D3和D4单元格。*/
function test() {
    Range("D3").Value2 = WorksheetFunction.ImSum(WorksheetFunction.Complex(1, 1), WorksheetFunction.Complex(1, 2))
    Range("D4").Value2 = WorksheetFunction.ImSum("2-2j", "1+3j", "3+5j")
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 ImSum 方法以 x + yi 文本格式表示两个复数的和。*/
function test() {
    Range("B1").Formula = "=COMPLEX(4,5)"
    Range("B2").Value2 = "4+7i"
    alert(WorksheetFunction.ImSum(Range("B1").Value2, Range("B2").Value2))
}
```
