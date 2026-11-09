# WorksheetFunction.Quotient

返回商的整数部分，该函数可用于舍掉商的小数部分。



## 语法

express.**Quotient(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Numerator - 被除数。 |
| Arg2 | 必选 | any | Denominator - 除数。 |

## 返回值

Double

## 说明


如果两个参数中的任意一个为非数值型，则 QUOTIENT 将返回错误值 #VALUE!。



## 示例


```JavaScript
/*本示例使用 Quotient 方法分别计算100除以3和12除以5的整数部分，并分别赋值给D2和D3单元格。*/
function test() {
    Range("D2").Value2 = WorksheetFunction.Quotient(100, 3)
    Range("D3").Value2 = WorksheetFunction.Quotient(12, 5)
}
```


```JavaScript
/*本示例为B1等单元格赋值，使用 Quotient 方法获取B1单元格中数值除以B2单元格中数值的整数部分。*/
function test() {
    Range("B1").Value2 = 10
    Range("B2").Value2 = 4
    alert(WorksheetFunction.Quotient(Range("B1").Value2, Range("B2").Value2))
}
```
