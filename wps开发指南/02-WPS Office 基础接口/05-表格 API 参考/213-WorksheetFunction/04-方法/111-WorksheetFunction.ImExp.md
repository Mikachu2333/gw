# WorksheetFunction.ImExp

返回以 x + yi 或 x + yj 文本格式表示的复数的指数。



## 语法

express.**ImExp(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其指数的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImExp 方法计算以 x + yi 或 x + yj 文本格式表示的复数的指数，并分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.ImExp(WorksheetFunction.Complex(12, 11))
    Range("A2").Value2 = WorksheetFunction.ImExp("6+9j")
}
```


```JavaScript
/*本示例为A5单元格赋值，使用 ImExp 方法计算以 x + yi 文本格式表示的单元格A5中复数的指数。*/
function test() {
    Range("A5").Formula2 = "=COMPLEX(1,6)"
    alert(WorksheetFunction.ImExp(Range("A5").Value2))
}
```
