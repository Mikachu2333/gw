# WorksheetFunction.ImDiv

返回以 x + yi 或 x + yj 文本格式表示的两个复数的商。



## 语法

express.**ImDiv(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber1 - 作为分子或被除数的复数。 |
| Arg2 | 必选 | any | Inumber2 - 作为分母或除数的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImDiv 方法计算以 x + yi 或 x + yj 文本格式表示的两个复数的商，并分别赋值给B1和B2单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.ImDiv(WorksheetFunction.Complex(2, 11), WorksheetFunction.Complex(6, 3))
    Range("B2").Value2 = WorksheetFunction.ImDiv("4+5j", "6+5j")
}
```


```JavaScript
/*本示例为B3等单元格分别赋值，使用 ImDiv 方法计算以 x + yi 文本格式表示的B3和B4单元格中两个复数的商。*/
function test() {
    Range("B3").Formula2 = "=COMPLEX(2,2)"
    Range("B4").Formula2 = "=COMPLEX(2,4)"
    alert(WorksheetFunction.ImDiv(Range("B3").Value2, Range("B4").Value2))
}
```
