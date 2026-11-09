# WorksheetFunction.ImLog10

返回以 x + yi 或 x + yj 文本格式表示的复数的常用对数（以 10 为底数）。



## 语法

express.**ImLog10(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其常用对数的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImLog10 方法计算以 x + yi 或 x + yj 文本格式表示的复数的常用对数（以 10 为底数），并分别赋值给C3和C4单元格。*/
function test() {
    Range("C3").Value2 = WorksheetFunction.ImLog10(WorksheetFunction.Complex(6, 10))
    Range("C4").Value2 = WorksheetFunction.ImLog10("2+4i")
}
```


```JavaScript
/*本示例为A1单元格赋值，使用 ImLog10 方法计算单元格A1中复数的常用对数（以 10 为底数）。*/
function test() {
    Range("A1").Formula2 = "=COMPLEX(2,6)"
    alert(WorksheetFunction.ImLog10(Range("A1").Value2))
}
```
