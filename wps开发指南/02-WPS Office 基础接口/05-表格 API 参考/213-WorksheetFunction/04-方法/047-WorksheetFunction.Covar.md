# WorksheetFunction.Covar

返回协方差，即每对数据点的偏差乘积的平均数。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 WPS表格 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Covariance\_P](#TODO) 和 [Covariance\_S](#TODO) 方法。



## 语法

express.**Covar(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 第一个包含整数的单元格区域。 |
| Arg2 | 必选 | any | 第二个包含整数的单元格区域。 |

## 返回值

Double

## 说明


使用协方差可以确定两个数据集之间的关系。例如，可利用它来检验收入与教育程度是否成正比。

* 参数必须为数字，或者是包含数字的名称、数组或引用。
* 如果数组或引用参数包含文本、逻辑值或空单元格，则这些值将被忽略；但包含零值的单元格将被计算在内。
* 如果 _Arg1_ 和 _Arg2_ 所含数据点的个数不同，则 COVAR 将生成一个错误。
* 如果 _Arg1_ 或 _Arg2_ 为空，则 Covar 将生成一个错误值。



## 示例


```JavaScript
/*本示例为A3等单元格分别赋值，并使用Covar方法计算协方差。*/
function test() {
    Range("A3").Value2 = 20
    Range("A4").Value2 = 12
    Range("A5").Value2 = 34
    Range("A6").Value2 = 28
    Range("B3").Value2 = 47
    Range("B4").Value2 = 5.5
    Range("B5").Value2 = 13
    Range("B6").Value2 = 25
    let covar1 = Application.WorksheetFunction.Covar(Range("A3:A6"), Range("B3:B6"))
    alert(covar1)
}
```


```JavaScript
/*本示例为C3等单元格分别赋值，并使用Covar方法计算协方差，并将结果赋值于F3单元格。*/
function test() {
    Range("C3").Value2 = 20
    Range("C4").Value2 = 12.5
    Range("C5").Value2 = 33
    Range("C6").Value2 = 27.6
    Range("D3").Value2 = 45
    Range("D4").Value2 = 5.5
    Range("D5").Value2 = 13.34
    Range("D6").Value2 = 22.6
    Range("F3").Value2 = Application.WorksheetFunction.Covar(Range("C3:C6"), Range("D3:D6"))
}
```
