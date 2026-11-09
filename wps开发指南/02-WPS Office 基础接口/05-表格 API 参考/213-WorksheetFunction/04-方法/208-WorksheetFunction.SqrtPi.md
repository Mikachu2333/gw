# WorksheetFunction.SqrtPi

返回某数与 pi 的乘积的平方根。



## 语法

express.**SqrtPi(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Number - 与 pi 相乘的数字。 |

## 返回值

Double

## 说明


如果 number < 0，则 SQRTPI 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 SqrtPi 方法计算所给出数值与 pi 的乘积的平方根，并分别赋值给A3和A4单元格。*/
function test() {
    Range("A3").Value2 = WorksheetFunction.SqrtPi(2.3)
    Range("A4").Value2 = WorksheetFunction.SqrtPi(2)
}
```


```JavaScript
/*本示例为B1单元格赋值，使用 SqrtPi 方法计算B1单元格的值与 pi 的乘积的平方根。*/
function test() {
    Range("B1").Value2 = 3.6
    alert(WorksheetFunction.SqrtPi(Range("B1").Value2))
}
```
