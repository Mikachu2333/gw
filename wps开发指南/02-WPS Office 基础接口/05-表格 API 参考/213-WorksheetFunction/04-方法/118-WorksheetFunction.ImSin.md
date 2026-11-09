# WorksheetFunction.ImSin

返回以 x + yi 或 x + yj 文本格式表示的复数的正弦值。



## 语法

express.**ImSin(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其正弦值的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImSin 方法计算以 x + yi 或 x + yj 文本格式表示的复数正弦值，并分别赋值给B6和B7单元格。*/
function test() {
    Range("B6").Value2 = WorksheetFunction.ImSin(WorksheetFunction.Complex(1, 1))
    Range("B7").Value2 = WorksheetFunction.ImSin("2+4j")
}
```


```JavaScript
/*本示例为B4单元格赋值，使用 ImSin 方法计算单元格B4中的复数的正弦值。*/
function test() {
    Range("B4").Formula = "=COMPLEX(1,5)"
    alert(WorksheetFunction.ImSin(Range("B4").Value2))
}
```
