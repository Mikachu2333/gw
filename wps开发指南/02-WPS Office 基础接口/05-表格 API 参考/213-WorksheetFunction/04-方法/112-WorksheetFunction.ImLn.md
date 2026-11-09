# WorksheetFunction.ImLn

返回以 x + yi 或 x + yj 文本格式表示的复数的自然对数。



## 语法

express.**ImLn(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其自然对数的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。



## 示例


```JavaScript
/*本示例使用 ImLn 方法计算以 x + yi 或 x + yj 文本格式表示的复数的自然对数，并分别赋值给E3和E4单元格。*/
function test() {
    Range("E3").Value2 = WorksheetFunction.ImLn(WorksheetFunction.Complex(12, 3))
    Range("E4").Value2 = WorksheetFunction.ImLn("10+10j")
}
```


```JavaScript
/*本示例使用 ImLn 方法计算以 x + yi 文本格式表示的单元格B3中复数的自然对数。*/
function test() {
    Range("B3").Formula2 = "=COMPLEX(4,6)"
    alert(WorksheetFunction.ImLn(Range("B3").Value2))
}
```
