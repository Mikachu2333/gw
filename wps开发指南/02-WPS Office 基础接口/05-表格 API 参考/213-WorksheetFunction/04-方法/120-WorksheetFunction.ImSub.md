# WorksheetFunction.ImSub

返回以 x + yi 或 x + yj 文本格式表示的两个复数的差。



## 语法

express.**ImSub(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber1 - 作为被减数的复数。 |
| Arg2 | 必选 | any | Inumber2 - 作为减数的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImSub 方法计算以 x + yi 或 x + yj 文本格式表示的两个复数差，并分别赋值给A2和A3单元格。*/
function test() {
    Range("A2").Value2 = WorksheetFunction.ImSub(WorksheetFunction.Complex(12, 4), WorksheetFunction.Complex(10, 20))
    Range("A3").Value2 = WorksheetFunction.ImSub("1-4j", "6+2j")
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，使用 ImSub 方法计算以 x + yi文本格式表示单元格C1和C2中的两个复数的差。*/
function test() {
    Range("C1").Formula = "=COMPLEX(3,11)"
    Range("C2").Value2 = "5+6i"
    alert(WorksheetFunction.ImSub(Range("C1").Value2, Range("C2").Value2))
}
```
