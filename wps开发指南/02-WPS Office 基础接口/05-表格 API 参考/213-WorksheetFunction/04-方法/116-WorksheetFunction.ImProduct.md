# WorksheetFunction.ImProduct

返回以 x + yi 或 x + yj 文本格式表示的 2 到 29 个复数的乘积。



## 语法

express.**ImProduct(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg30 | 必选 | any | Inumber1, inumber2,... - 要相乘的 1 到 29 个复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImProduct 方法计算以 x + yi 或 x + yj 文本格式表示的2个和3个复数的乘积，并分别赋值给B3和B4单元格。*/
function test() {
    Range("B3").Value2 = WorksheetFunction.ImProduct(WorksheetFunction.Complex(2, 6), WorksheetFunction.Complex(12, 5))
    Range("B4").Value2 = WorksheetFunction.ImProduct("8+4j", "8+9j", "9+9j")
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 ImProduct 方法计算A1等单元格中复数的乘积。*/
function test() {
    Range("A1").Formula = "=COMPLEX(3,5)"
    Range("A2").Formula = "=COMPLEX(2,5)"
    Range("A3").Formula = "=COMPLEX(1,-6)"
    alert(WorksheetFunction.ImProduct(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2))
}
```
