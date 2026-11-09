# WorksheetFunction.Combin

返回从给定的项目数中提取若干项目的组合数。使用 Combin 可以确定给定的项目数中所有可能的项目组合数。



## 语法

express.**Combin(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 项目数。 |
| Arg2 | 必选 | number（double 精度） | 每个组合中的项目数。 |

## 返回值

Double

## 说明


* 数值参数将被截尾取整。
* 如果两个参数中的任意一个为非数值型，则 Combin 将生成一个错误。
* 如果 number < 0、number\_chosen < 0 或 number < number\_chosen，则 Combin 将生成一个错误。
* 组合为任意项目集或项目子集，而不论其内部顺序如何。组合与排列不同，排列与内部顺序有关。



## 示例


```JavaScript
/*本示例使用Combin方法计算给定数目的项目的组合数，并将结果赋值于B3等单元格。*/
function test() {
    Range("B3").Value2 = Application.WorksheetFunction.Combin(8, 2)
    Range("B4").Value2 = Application.WorksheetFunction.Combin(10, 3)
    Range("B5").Value2 = Application.WorksheetFunction.Combin(12, 5)
}
```


```JavaScript
/*本示例为C3等单元格分别赋值，并使用Combin方法计算给定数目的项目的组合数。*/
function test() {
    Range("C3").Value2 = 15
    Range("C4").Value2 = 25
    Range("C5").Value2 = 8
    Range("C6").Value2 = 10
    let combin1 = Application.WorksheetFunction.Combin(Range("C3").Value2, Range("C5").Value2)
    let combin2 = Application.WorksheetFunction.Combin(Range("C4").Value2, Range("C6").Value2)
    alert(combin1)
    alert(combin2)
}
```
