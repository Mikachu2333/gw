# WorksheetFunction.Transpose

返回转置单元格区域，即将一行单元格区域转置成一列单元格区域，反之亦然。在行列数分别与数组 （数组：用于建立可生成多个结果或可对在行和列中排列的一组参数进行运算的单个公式。数组区域共用一个公式；数组常量是用作参数的一组常量。）的行列数相同的区域中，必须将 TRANSPOSE 输入为数组公式 （数组公式：数组公式对一组或多组值执行多重计算，并返回一个或多个结果。数组公式括于大括号 ({ }) 中。按 Ctrl+Shift+Enter 可以输入数组公式。）。使用 TRANSPOSE 可在工作表中转置数组的垂直和水平方向。



## 语法

express.**Transpose(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Array - 要进行转置的工作表中的单元格数组或区域。所谓数组的转置就是，将数组的第一行作为新数组的第一列，将数组的第二行作为新数组的第二列，依此类推。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例使用 Transpose 方法转置数组，并将结果赋值给A1等单元格。*/
function test() {
    let arr1 = [1, 2, 3, 4]
    let arr2 = [[1], [2], [3], [4]]
    Range("A1:A4").Value2 = WorksheetFunction.Transpose(arr1)
    Range("B1:E1").Value2 = WorksheetFunction.Transpose(arr2)
}
```


```JavaScript
/*本示例为A1等单元格赋值，使用 Transpose 方法 转置单元格区域。*/
function test() {
    Range("A1").Value2 = 2
    Range("A2").Value2 = -3
    Range("A3").Value2 = 4.2
    Range("A4").Value2 = 5.99
    Range("B1:E1").Value2 = WorksheetFunction.Transpose(Range("A1:A4"))
}
```
