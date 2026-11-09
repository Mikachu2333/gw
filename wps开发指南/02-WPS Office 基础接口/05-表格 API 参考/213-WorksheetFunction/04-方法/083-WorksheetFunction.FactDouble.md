# WorksheetFunction.FactDouble

返回数字的双倍阶乘。



## 语法

express.**FactDouble(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Number - 要返回其双倍阶乘的值。如果 number 不是整数，则将被截尾取整。 |

## 返回值

Double

## 说明


* 如果 number 为非数值型，则 FACTDOUBLE 将返回错误值 #VALUE!。
* 如果 number 为负数，则 FACTDOUBLE 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例分别赋值A1等单元格，使用 FactDouble 方法计算数字的双倍阶乘。*/
function test() {
    Range("A1").Value2 = 6
    Range("A2").Value2 = 5
    alert(WorksheetFunction.FactDouble(Range("A1").Value2))
    alert(WorksheetFunction.FactDouble(Range("A2").Value2))
}
```


```JavaScript
/*本示例使用 FactDouble 方法计算数字的双倍阶乘结果，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.FactDouble(0)
    Range("B2").Value2 = WorksheetFunction.FactDouble(6.6)
}
```
