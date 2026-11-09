# WorksheetFunction.Fisher

返回点 x 的 Fisher 变换。该变换生成一个正态分布而非偏斜的函数。使用此函数可以完成相关系数的假设检验。



## 语法

express.**Fisher(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | x - 要对其进行变换的数值。 |

## 返回值

Double

## 说明


* 如果 x 为非数值型，则 FISHER 将返回错误值 #VALUE!。
* 如果 x ≤ -1 或 x ≥ 1，则 FISHER 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 Fisher 方法计算 Fisher 转换，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.Fisher(-0.9)
    Range("B2").Value2 = WorksheetFunction.Fisher(0.5)
}
```


```JavaScript
/*本示例分别赋值A1等单元格，使用 Fisher 方法计算A1等单元格的 Fisher 转换。*/
function test() {
    Range("A1").Value2 = 0.99
    Range("A2").Value2 = -0.9
    alert(WorksheetFunction.Fisher(Range("A1").Value2))
    alert(WorksheetFunction.Fisher(Range("A2").Value2))
}
```
