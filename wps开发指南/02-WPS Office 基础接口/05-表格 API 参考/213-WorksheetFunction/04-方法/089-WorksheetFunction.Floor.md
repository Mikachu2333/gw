# WorksheetFunction.Floor

将 number 向下舍入（向零的方向），使其等于最接近的 significance 的倍数。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 **[Floor\_Precise](#TODO)** 方法。



## 语法

express.**Floor(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要进行舍入的数值。 |
| Arg2 | 必选 | number（double 精度） | Significance - 用以进行舍入计算的倍数。 |

## 返回值

Double

## 说明


* 如果两个参数中的任意一个为非数值型，则 FLOOR 将返回错误值 #VALUE!。
* 如果 number 和 significance 符号不同，则 FLOOR 将返回错误值 #NUM!。
* 不论 number 的符号如何，向远离零的方向调整时，值都会向下舍入。如果 number 正好是 significance 的倍数，则无需进行任何舍入处理。



## 示例


```JavaScript
/*本示例使用 Floor 方法计算参数number向下舍入（向零的方向），使其等于最接近的参数significance的倍数，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.Floor(5.6, 1)
    Range("B2").Value2 = WorksheetFunction.Floor(-3.8, -1)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Floor 方法计算A1单元格向下舍入（向零的方向），使其等于最接近的A2单元格的倍数。*/
function test() {
    Range("A1").Value2 = 0.08
    Range("A2").Value2 = 0.1
    alert(WorksheetFunction.Floor(Range("A1").Value2, Range("A2").Value2))
}
```
