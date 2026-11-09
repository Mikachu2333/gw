# WorksheetFunction.Complex

将实系数及虚系数转换为 x + yi 或 x + yj 形式的复数。



## 语法

express.**Complex(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 复数的实系数。 |
| Arg2 | 必选 | any | 复数的虚系数。 |
| Arg3 | 可选 | any | 复数中虚部的后缀。如果省略，则假定后缀为“i”。 |

## 返回值

String

## 说明


所有复数函数均接受“i”和“j”作为后缀，但不接受“I”和“J”。使用大写将生成一个错误。接受两个或更多个复数的所有函数均要求所有后缀一致。

* 如果_Arg1_为非数值型，则 Complex 将生成一个错误。
* 如果_Arg2_为非数值型，则 Complex 将生成一个错误。
* 如果_Arg3_既不为“i”，也不为“j”，则 Complex 将生成一个错误。



## 示例


```JavaScript
/*本示例为D3等单元格分别赋值，并使用Complex方法计算将实系数及虚系数转换为x+yi形式的复数。*/
function test() {
    Range("D3").Value2 = 0
    Range("D4").Value2 = 1
    Range("D5").Value2 = 3
    Range("D6").Value2 = 4
    let complex1 = Application.WorksheetFunction.Complex(Range("D3").Value2, Range("D4").Value2)
    let complex2 = Application.WorksheetFunction.Complex(Range("D5").Value2, Range("D6").Value2, "i")
    let complex3 = Application.WorksheetFunction.Complex(Range("D4").Value2, Range("D3").Value2)
    alert(complex1)
    alert(complex2)
    alert(complex3)
}
```


```JavaScript
/*本示例使用Complex方法计算将实系数及虚系数转换为x+yi或x+yj形式的复数，并将结果赋值于A3等单元格。*/
function test() {
    Range("A3").Value2 = Application.WorksheetFunction.Complex(1, 2, "i")
    Range("B4").Value2 = Application.WorksheetFunction.Complex(9, 3, "j")
    Range("C5").Value2 = Application.WorksheetFunction.Complex(12, 3.5, "j")
}
```
