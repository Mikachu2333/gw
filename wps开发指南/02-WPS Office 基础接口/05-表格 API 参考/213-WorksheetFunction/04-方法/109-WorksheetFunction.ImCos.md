# WorksheetFunction.ImCos

返回以 x + yi 或 x + yj 文本格式表示的复数的余弦值。



## 语法

express.**ImCos(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Inumber - 要计算其余弦值的复数。 |

## 返回值

String

## 说明


* 使用 COMPLEX 可以将实系数和虚系数转换为复数。
* 如果 inumber 为逻辑值，则 IMCOS 将返回错误值 #VALUE!。



## 示例


```JavaScript
/*本示例使用 ImCos 方法计算以 x + yi 或 x + yj 文本格式表示的复数的余弦值，并分别赋值给D1和D2单元格。*/
function test() {
    Range("D1").Value2 = WorksheetFunction.ImCos(WorksheetFunction.Complex(20, 6))
    Range("D2").Value2 = WorksheetFunction.ImCos("1+3j")
}
```


```JavaScript
/*本示例为D3等单元格分别赋值，使用 ImCos 方法计算以 x + yi 文本格式表示的D3单元格中复数的余弦值。*/
function test() {
    Range("D3").Formula2 = "=COMPLEX(1,4)"
    alert(WorksheetFunction.ImCos(Range("D3").Value2))
}
```
