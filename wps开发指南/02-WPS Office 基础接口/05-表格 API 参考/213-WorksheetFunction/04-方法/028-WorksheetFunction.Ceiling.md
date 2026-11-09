# WorksheetFunction.Ceiling

返回向上舍入（远离零）到最接近的 significance 的倍数的 number。  

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 **Ceiling\_Precise** 方法。



## 语法

express.**Ceiling(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要舍入的值。 |
| Arg2 | 必选 | number（double 精度） | Significance - 用以进行舍入计算的倍数。 |

## 返回值

Double

## 说明


例如，如果要避免在价格中使用“分”，而产品价格为 ￥4.42, 那么可使用公式 `Ceiling(4.42,0.05)` 将价格进位到最近的“角”。  

* 如果任一参数为非数值， **Ceiling** 将生成错误。
* 不论 number 的符号如何，向远离零的方向调整时，值都会向上舍入。如果 number 正好是 significance 的倍数，则无需进行任何舍入处理。
* 如果 number 和 significance 的符号不同，则 **Ceiling** 将生成错误。



## 示例


```JavaScript
/*本示例为B2等单元格分别赋值，并使用Ceiling方法将参数向上舍入为最接近的指定基数的倍数。*/
function test() {
    Range("B2").Value2 = 1
    Range("B3").Value2 = 2
    Range("B4").Value2 = 2.5
    Range("B5").Value2 = 4.55
    let ceiling1 = Application.WorksheetFunction.Ceiling(Range("B4").Value2, Range("B2").Value2)
    let ceiling2 = Application.WorksheetFunction.Ceiling(Range("B5").Value2, Range("B3").Value2)
    alert(ceiling1)
    alert(ceiling2)
}
```


```JavaScript
/*本示例使用Ceiling方法将参数向上舍入为最接近的指定基数的倍数，并将结果赋值于A4等单元格。*/
function test() {
    Range("A4").Value2 = Application.WorksheetFunction.Ceiling(-2.5, -2)
    Range("A5").Value2 = Application.WorksheetFunction.Ceiling(-1.5, 2)
    Range("A6").Value2 = Application.WorksheetFunction.Ceiling(1.5, 0.1)
    Range("A7").Value2 = Application.WorksheetFunction.Ceiling(0.234, 0.01)
}
```
