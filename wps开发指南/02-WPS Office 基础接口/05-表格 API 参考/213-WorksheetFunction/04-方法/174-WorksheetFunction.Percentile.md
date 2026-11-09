# WorksheetFunction.Percentile

返回区域中数值的第 k 个百分点的值。可以使用此函数来建立接受阈值。例如，可以确定得分排名在第 90 个百分点之上的检测侯选人。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Percentile\_Inc](#TODO) 和 [Percentile\_Exc](#TODO) 方法。



## 语法

express.**Percentile(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | array - 定义相对位置的数组或数据区域。 |
| Arg2 | 必选 | number（double 精度） | k - 0 到 1 之间的百分点值，包括 0 和 1。 |

## 返回值

Double

## 说明


* 如果 array 为空，则 PERCENTILE 将返回错误值 #NUM!。
* 如果 k 为非数字型，函数 PERCENTILE 返回错误值 #VALUE!。
* 如果 k < 0 或 k > 1，函数 PERCENTILE 返回错误值 #NUM!。
* 如果 k 不是 1/(n - 1) 的倍数，函数 PERCENTILE 使用插值法来确定第 k 个百分点的值。



## 示例


```JavaScript
/*本示例使用 Percentile 方法分别计算数组arr数值第0.3个和第0.56个百分点的值，并分别赋值给A1和A2单元格。*/
function test() {
    let arr = [1, 2, 3, 4, 5, 6]
    Range("A1").Value2 = WorksheetFunction.Percentile(arr, 0.3)
    Range("A2").Value2 = WorksheetFunction.Percentile(arr, 0.56)
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，显示使用 Percentile 方法计算的C1:C5单元格区域中D1单元格值对应百分点的值。*/
function test() {
    Range("C1").Value2 = 121
    Range("C2").Value2 = 141
    Range("C3").Value2 = 231
    Range("C4").Value2 = 322
    Range("C5").Value2 = 423
    Range("D1").Value2 = 0.64
    alert(WorksheetFunction.Percentile(Range("C1:C5"), Range("D1").Value2))
}
```
