# WorksheetFunction.SumX2MY2

返回两个数组中对应值的平方差之和。



## 语法

express.**SumX2MY2(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Array\_x - 第一个数值数组或区域。 |
| Arg2 | 必选 | any | Array\_y - 第二个数值数组或区域。 |

## 返回值

Double

## 说明


* 参数应为数字，或者是包含数字的名称、数组或引用。
* 如果数组或引用参数包含文本、逻辑值或空单元格，则这些值将被忽略；但含有零值的单元格包括在内。
* 如果 array\_x 和 array\_y 中值的数目不同，则 SUMX2MY2 将返回错误值 #N/A。



## 示例


```JavaScript
/*本示例使用 SumX2MY2 方法计算两个数组中对应值的平方差之和，并赋值给D2单元格。*/
function test() {
    let arr1 = [10, -10.3, 30.2]
    let arr2 = [10.3, 3.2, 6.2]
    Range("D2").Value2 = WorksheetFunction.SumX2MY2(arr1, arr2)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 SumX2MY2 方法计算两个数组中对应值的平方差之和。*/
function test() {
    Range("A1").Value2 = 23.3
    Range("A2").Value2 = 20.03
    Range("A3").Value2 = 20.6
    Range("A4").Value2 = 21
    Range("B1").Value2 = -5
    Range("B2").Value2 = 2
    Range("B3").Value2 = 6
    Range("B4").Value2 = 3
    alert(WorksheetFunction.SumX2MY2(Range("A1:A4"), Range("B1:B4")))
}
```
