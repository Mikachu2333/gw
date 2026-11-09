# WorksheetFunction.Imaginary

返回以 x + yi 或 x + yj 文本格式表示的复数的虚系数。



## 语法

express.**Imaginary(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其虚系数的复数。 |

## 返回值

Double

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例为使用 Imaginary 方法计算以 x + yi 或 x + yj 文本格式表示的复数的虚系数，并分别赋值给A2和A3单元格。*/
function test() {
    Range("A2").Value2 = WorksheetFunction.Imaginary(WorksheetFunction.Complex(11, 22))
    Range("A3").Value2 = WorksheetFunction.Imaginary("12-2j")
}
```


```JavaScript
/*本示例为A1单元格赋值，使用 Imaginary 方法计算以 x + yi 文本格式表示的A1单元格中复数的虚系数。*/
function test() {
    Range("A1").Formula2 = "=COMPLEX(3,4)"
    alert(WorksheetFunction.Imaginary(Range("A1").Value2))
}
```
