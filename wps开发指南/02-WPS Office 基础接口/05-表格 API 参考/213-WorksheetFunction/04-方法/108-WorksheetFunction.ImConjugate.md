# WorksheetFunction.ImConjugate

返回以 x + yi 或 x + yj 文本格式表示的复数的共轭复数。



## 语法

express.**ImConjugate(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其共轭复数的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例为使用 ImConjugate 方法计算以 x + yi 或 x + yj 文本格式表示的复数的共轭复数，并分别赋值给C1和C2单元格。*/
function test() {
    Range("C1").Value2 = WorksheetFunction.ImConjugate(WorksheetFunction.Complex(1, 2))
    Range("C2").Value2 = WorksheetFunction.ImConjugate("2-4j")
}
```


```JavaScript
/*本示例为B1单元格赋值，使用 ImConjugate 方法计算以 x + yi 文本格式表示的复数的共轭复数。*/
function test() {
    Range("B1").Formula2 = "=COMPLEX(5,4)"
    alert(WorksheetFunction.ImConjugate(Range("B1").Value2))
}
```
