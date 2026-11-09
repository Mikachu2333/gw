# WorksheetFunction.TTest

返回与学生 t 检验相关的概率。可以使用函数 TTEST 判断两个样本是否可能来自两个具有相同平均值的总体。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [T\_Test](#TODO) 方法。



## 语法

express.**TTest(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | array1 - 第一个数据集。 |
| Arg2 | 必选 | any | array2 - 第二个数据集。 |
| Arg3 | 必选 | number（double 精度） | tails - 指定分布的尾数。如果 tails = 1，则 TTEST 将使用单尾分布。如果 tails = 2，则 TTEST 将使用双尾分布。 |
| Arg4 | 必选 | number（double 精度） | type - 要执行的 t 检验的种类。 |

## 返回值

Double

## 说明


| 如果 type 等于 | 则将执行此检验      |
| ---------- | ------------ |
| 1          | 成对           |
| 2          | 双样本等方差（同方差）  |
| 3          | 双样本不等方差（异方差） |

* 如果 array1 和 array2 的数据点个数不同，且 type = 1（成对），则 TTEST 将返回错误值 #N/A。
* 参数 tails 和 type 将被截尾取整。
* 如果 tails 或 type 为非数值型，则 TTEST 将返回错误值 #VALUE!。
* 如果 tails 不为值 1 或 2，则 TTEST 将返回错误值 #NUM!。
* TTEST 使用 array1 和 array2 中的数据计算非负值 t 统计。如果 tails=1，假定 array1 和 array2 为来自具有相同平均值的总体的样本，则 TTEST 将返回 t 统计的较高值的概率。假定“总体平均值相同”，则当 tails=2 时返回的值是当 tails=1 时返回的值的两倍，且符合 t 统计的较高绝对值的概率。



## 示例


```JavaScript
/*本示例使用 TTest 方法计算与学生 t 检验相关的概率，并分别赋值给C1和C2单元格。*/
function test() {
    let arr1 = [1, 2, 3]
    let arr2 = [12, 22, 32]
    Range("C1").Value2 = WorksheetFunction.TTest(arr1, arr2, 1, 3)
    Range("C2").Value2 = WorksheetFunction.TTest(arr1, arr2, 2, 1)
}
```


```JavaScript
/*本示例为D2等单元格赋值，使用 TTest 方法计算与学生 t 检验相关的概率。*/
function test() {
    Range("D2").Value2 = 2.3
    Range("D3").Value2 = 4.3
    Range("D4").Value2 = 2.34
    Range("E2").Value2 = 2.3
    Range("E3").Value2 = 2
    Range("E4").Value2 = 20
    alert(WorksheetFunction.TTest(Range("D2:D4"), Range("E2:E4"), 1, 2))
}
```
