# WorksheetFunction.Large

返回数据集中第 k 个最大值。使用此函数可以根据相对标准来选择数值。例如，可以使用函数 LARGE 得到第一名、第二名或第三名的得分。



## 语法

express.**Large(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Array - 要确定第 k 个最大值的数组或数据区域。 |
| Arg2 | 必选 | number（double 精度） | K - 要返回的数据在数组或单元格区域中的位置（从最大值开始）。 |

## 返回值

Double

## 说明


* 如果数组为空，函数 LARGE 返回错误值 #NUM!。
* 如果 k ≤ 0 或 k 大于数据点的个数，函数 LARGE 返回错误值 #NUM!。

如果区域中数据点的个数为 n，则函数 LARGE(array,1) 返回最大值，函数 LARGE(array,n) 返回最小值。



## 示例


```JavaScript
/*本示例使用 Large 方法分别计算数组arr1中第3个和第1个最大值，并分别赋值给D2和D3单元格。*/
function test() {
    let arr1 = [1, 2, 3, 4, 5, 6]
    Range("D2").Value2 = WorksheetFunction.Large(arr1, 3)
    Range("D3").Value2 = WorksheetFunction.Large(arr1, 1)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Large 方法计算区域A1:A4数据集中第2个最大值。*/
function test() {
    Range("A1").Value2 = 100
    Range("A2").Value2 = 150
    Range("A3").Value2 = 70
    Range("A4").Value2 = 50
    alert(WorksheetFunction.Large(Range("A1:A4"), 2))
}
```
