# WorksheetFunction.Small

返回数据集中第 k 个最小值。使用此函数可以返回数据集中特定位置上的数值。



## 语法

express.**Small(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Array - 需要确定第 k 个最小值的数值数据数组或区域。 |
| Arg2 | 必选 | number（double 精度） | K - 要返回的数据在数组或区域中的位置（从最小值开始）。 |

## 返回值

Double

## 说明


* 如果 array 为空，则 SMALL 将返回错误值 #NUM!。
* 如果 k ≤ 0 或 k 超过了数据点个数，则 SMALL 将返回错误值 #NUM!。
* 如果 n 为数组中数据点的个数，则 SMALL(array,1) 等于最小值，SMALL(array,n) 等于最大值。



## 示例


```JavaScript
/*本示例使用 Small 方法计算数组中第1个和第3个最小值，并分别赋值给B2和B3单元格。*/
function test() {
    let arr1 = [1, 2, 3, 2.5, 5]
    Range("B2").Value2 = WorksheetFunction.Small(arr1, 1)
    Range("B3").Value2 = WorksheetFunction.Small(arr1, 3)
}
```


```JavaScript
/*本示例为A1等单元格赋值，使用 Small 方法计算A1:A4区域中第2个最小值。*/
function test() {
    Range("A1").Value2 = 1.6
    Range("A2").Value2 = 5.6
    Range("A3").Value2 = 3.6
    Range("A4").Value2 = 7.6
    alert(WorksheetFunction.Small(Range("A1:A4"), 2))
}
```
