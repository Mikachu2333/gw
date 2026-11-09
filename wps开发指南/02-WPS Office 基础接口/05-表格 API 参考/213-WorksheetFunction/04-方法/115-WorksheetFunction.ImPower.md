# WorksheetFunction.ImPower

返回以 x + yi 或 x + yj 文本格式表示的复数的乘幂。



## 语法

express.**ImPower(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其乘幂的复数。 |
| Arg2 | 必选 | any | Number - 要对复数计算的幂次。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。
* 如果 number 为非数值型，则 IMPOWER 将返回错误值 #VALUE!。
* Number 可以为整数、分数或负数。



## 示例


```JavaScript
/*本示例使用 ImPower 方法计算以 x + yi 或 x + yj 文本格式表示的复数的乘幂，并分别赋值给A3和A4单元格。*/
function test() {
    Range("A3").Value2 = WorksheetFunction.ImPower(WorksheetFunction.Complex(2, 1), 4)
    Range("A4").Value2 = WorksheetFunction.ImPower("8+3j", 2.3)
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，使用 ImPower 方法计算以 x + yi 文本格式表示的复数的乘幂。*/
function test() {
    Range("C1").Formula = "=COMPLEX(3,2)"
    Range("C2").Value2 = -4
    alert(WorksheetFunction.ImPower(Range("C1").Value2, Range("C2").Value2))
}
```
