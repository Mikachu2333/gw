# WorksheetFunction.HLookup

在表格或数值数组的首行查找某个值，然后返回表格或数组当前列中指定行中的值。当比较值位于数据表的首行，并且要向下查找指定的行数时，请使用 HLOOKUP。当比较值位于要查找的数据左边的一列中时，请使用 VLOOKUP。



## 语法

express.**HLookup(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Lookup\_value - 要在表格首行中进行查找的值。Lookup\_value 可以为值、引用或文本字符串。 |
| Arg2 | 必选 | any | Table\_array - 要在其中查找数据的信息表。可以使用对区域或区域名称的引用。 |
| Arg3 | 必选 | any | Row\_index\_num - table\_array 中要返回的匹配值的行号。Row\_index\_num 为 1 时，返回 table\_array 中第一行的值，row\_index\_num 为 2 时，返回 table\_array 中第二行的值，依此类推。如果 row\_index\_num 小于 1，则 HLOOKUP 将返回错误值 #VALUE!；如果 row\_index\_num 大于 table\_array 中的行数，则 HLOOKUP 将返回错误值 #REF!。 |
| Arg4 | 可选 | any | Range\_lookup - 一个逻辑值，指定想让 HLOOKUP 查找的是精确匹配值还是近似匹配值。如果为 TRUE 或省略，则返回近似匹配值。也就是说，如果找不到精确匹配值，则返回下一个小于 lookup\_value 的最大值。如果为 FALSE，则 HLOOKUP 将查找精确匹配值，如果找不到，则返回错误值 #N/A。 |

## 返回值

Variant

## 说明


* 如果 HLOOKUP 找不到 lookup\_value 且 range\_lookup 为 TRUE，则使用小于 lookup\_value 的最大值。
* 如果 lookup\_value 小于 table\_array 第一行中的最小值，则 HLOOKUP 将返回错误值 #N/A。
* 如果 range\_lookup 为 FALSE 且 lookup\_value 为文本，则可在 lookup\_value 中使用通配符，包括问号 (?) 和星号 (\*)。问号可匹配任意的单个字符；星号可匹配任意一串字符。如果要查找实际的问号或星号，则请在该字符前键入一个波形符 (\~)。



## 示例


```JavaScript
/*本示例使用 HLookup 方法从数组arr中获取与数值2、3同一列的值，并分别赋值给A1和A2单元格。*/
function test() {
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    Range("A1").Value2 = WorksheetFunction.HLookup(2, arr, 1, true)
    Range("A2").Value2 = WorksheetFunction.HLookup(3, arr, 3, false)
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，使用 HLookup 方法从区域C1:D2中获取与单元格E1中数值同一列的值。*/
function test() {
    Range("C1").Value2 = -10
    Range("C2").Value2 = -20
    Range("D1").Value2 = 100
    Range("D2").Value2 = 200
    Range("E1").Value2 = 100
    Range("F1").Value2 = 2
    alert(WorksheetFunction.HLookup(Range("E1").Value2, Range("C1:D2"), Range("F1").Value2))
}
```
