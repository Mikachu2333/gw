# WorksheetFunction.ImSqrt

返回以 x + yi 或 x + yj 文本格式表示的复数的平方根。



## 语法

express.**ImSqrt(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其平方根的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImSqrt 方法计算以 x + yi 或 x + yj 文本格式表示的复数平方根，并分别赋值给A6和A7单元格。*/
function test() {
    Range("A6").Value2 = WorksheetFunction.ImSqrt(WorksheetFunction.Complex(6, 4))
    Range("A7").Value2 = WorksheetFunction.ImSqrt("8+8j")
}
```


```JavaScript
/*本示例为D1单元格赋值，使用 ImSqrt 方法计算以 x + yi 文本格式表示的复数平方根。*/
function test() {
    Range("D1").Formula = "=COMPLEX(4,2)"
    alert(WorksheetFunction.ImSqrt(Range("D1").Value2))
}
```
