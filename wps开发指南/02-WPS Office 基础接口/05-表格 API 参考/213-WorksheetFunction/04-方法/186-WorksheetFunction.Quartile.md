# WorksheetFunction.Quartile

返回数据集的四分位数。四分位数通常用于在销售额和调查数据中对总体进行分组。例如，可以使用函数 QUARTILE 求得总体中前 25% 的收入值。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Quartile\_Inc](#TODO) 和 [Quartile\_Exc](#TODO) 方法。



## 语法

express.**Quartile(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | array - 要计算其四分位数值的数值数组或单元格区域。 |
| Arg2 | 必选 | number（double 精度） | Quart - 指示要返回哪一个值。 |

## 返回值

Double

## 说明


| 如果 quart 等于 | QUARTILE 就返回        |
| ----------- | ------------------- |
| 0           | 最小值                 |
| 1           | 第一个四分位数（第 25 个百分点值） |
| 2           | 中值（第 50 个百分点值）      |
| 3           | 第三个四分位数（第 75 个百分点值） |
| 4           | 最大值                 |

* 如果 array 为空，则 QUARTILE 将返回错误值 #NUM!。
* 如果 quart 不为整数，则将被截尾取整。
* 如果 quart < 0 或 quart > 4，则 QUARTILE 将返回错误值 #NUM!。
* 当 quart 分别等于 0（零）、2 和 4 时，MIN、MEDIAN 和 MAX 返回的值与 QUARTILE 返回的值相同。



## 示例


```JavaScript
/*本示例使用 Quartile 方法计算数组的四分位数，并分别赋值给A4和A5单元格。*/
function test() {
    let arr1 = [10, 10.2, 3.2, 5, 3.6]
    Range("A4").Value2 = WorksheetFunction.Quartile(arr1, 0)
    Range("A5").Value2 = WorksheetFunction.Quartile(arr1, 2)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 Quartile 方法计算表格区域B1:B4的四分位数。*/
function test() {
    Range("B1").Value2 = 12
    Range("B2").Value2 = 24
    Range("B3").Value2 = 36
    Range("B4").Value2 = 48
    alert(WorksheetFunction.Quartile(Range("B1:B4"), 3))
}
```
