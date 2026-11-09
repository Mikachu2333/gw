# WorksheetFunction.Standardize

返回以 mean 和 standard\_dev 表示的分布的正态化数值。



## 语法

express.**Standardize(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | X - 要进行正态化的值。 |
| Arg2 | 必选 | number（double 精度） | Mean - 分布的算术平均值。 |
| Arg3 | 必选 | number（double 精度） | Standard\_dev - 分布的标准偏差。 |

## 返回值

Double

## 说明


* 如果 standard\_dev ≤ 0，则 STANDARDIZE 将返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 Standardize 方法计算以 mean 和 standard_dev 表示的分布的正态化数值，并分别赋值给A3和B3单元格。*/
function test() {
    Range("A3").Value2 = WorksheetFunction.Standardize(-2.3, 1, 1.2)
    Range("B3").Value2 = WorksheetFunction.Standardize(1, 2.2, 8.3)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Standardize 方法计算以 mean 和 standard_dev 表示的分布的正态化数值。*/
function test() {
    Range("A1").Value2 = 7.2
    Range("B1").Value2 = 2
    Range("C1").Value2 = 3.3
    alert(WorksheetFunction.Standardize(Range("A1").Value2, Range("B1").Value2, Range("C1").Value2))
}
```
