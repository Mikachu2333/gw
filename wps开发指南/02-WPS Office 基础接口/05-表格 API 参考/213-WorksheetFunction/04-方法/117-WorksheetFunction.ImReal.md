# WorksheetFunction.ImReal

返回以 x + yi 或 x + yj 文本格式表示的复数的实系数。



## 语法

express.**ImReal(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其实系数的复数。 |

## 返回值

Double

## 说明


使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImReal 方法计算以 x + yi 或 x + yj 文本格式表示的复数的实系数，并分别赋值给C1和C2单元格。*/
function test() {
    Range("C1").Value2 = WorksheetFunction.ImReal(WorksheetFunction.Complex(12, 6))
    Range("C2").Value2 = WorksheetFunction.ImReal("10-3j")
}
```


```JavaScript
/*本示例为D1单元格赋值，使用 ImReal 方法计算D1单元格的复数的实系数。*/
function test() {
    Range("D1").Formula = "=COMPLEX(3,5)"
    alert(WorksheetFunction.ImReal(Range("D1").Value2))
}
```
