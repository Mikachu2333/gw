# WorksheetFunction.FisherInv

返回 Fisher 变换的反函数值。使用此变换可以分析数据区域或数组之间的相关性。如果 y = FISHER(x)，则 FISHERINV(y) = x。



## 语法

express.**FisherInv(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | y - 要对其执行逆变换的值。 |

## 返回值

Double

## 说明


* 如果 y 为非数值型，则 FISHERINV 将返回错误值 #VALUE!。



## 示例


```JavaScript
/*本示例使用 FisherInv 方法计算 Fisher 变换的反函数值，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.FisherInv(-0.9)
    Range("B2").Value2 = WorksheetFunction.FisherInv(0.5)
}
```


```JavaScript
/*本示例使用 FisherInv 方法计算 Fisher 变换的反函数值。*/
function test() {
    Range("A1").Value2 = 3.5
    Range("A2").Value2 = 0
    alert(WorksheetFunction.FisherInv(Range("A1").Value2))
    alert(WorksheetFunction.FisherInv(Range("A2").Value2))
}
```
