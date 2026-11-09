# WorksheetFunction.MMult

返回两数组的矩阵乘积。结果矩阵的行数与 array1 的行数相同，矩阵的列数与 array2 的列数相同。



## 语法

express.**MMult(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 - Arg2 | 必选 | any | Array1, array2 - 要进行矩阵乘法运算的两个数组。 |

## 返回值

Variant

## 说明


* Array1 的列数必须与 array2 的行数相同，而且两个数组中都只能包含数值。
* Array1 和 array2 可以是单元格区域、数组常量或引用。
* 在以下情况下，MMULT 返回错误值 #VALUE!：  
  * 任意单元格为空或包含文字。  
  * array1 的列数与 array2 的行数不相等。  
  * 结果数组的容量等于或大于总计 5,461 个单元格。
* 对于返回结果为数组的公式，必须以数组公式的形式输入。



## 示例


```JavaScript
/*本示例使用 MMult 方法计算两数组的矩阵乘积，并分别赋值给C2等单元格。*/
function test() {
    Range("C2:D3").Value2 = WorksheetFunction.MMult([[1, 3], [5, 7]], [[10.3, 5.3], [12.6, 7.3]])
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 MMult 方法计算两数值区域的矩阵乘积。*/
function test() {
    Range("A1").Value2 = 3
    Range("A2").Value2 = 5
    Range("B1").Value2 = 1
    Range("B2").Value2 = 2
    Range("C1").Value2 = 3.6
    Range("C2").Value2 = 9.3
    Range("D1").Value2 = 5.3
    Range("D2").Value2 = 4.3
    let da = WorksheetFunction.MMult(Range("A1:B2"), Range("C1:D2"))
    alert(da.toString())
}
```
