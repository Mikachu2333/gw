# WorksheetFunction.Permut

返回从给定数目的对象集合中选取的若干对象的排列数。排列为有内部顺序的对象或事件的任意集合或子集。排列与组合不同，组合的内部顺序无意义。此函数可用于彩票抽奖的概率计算。



## 语法

express.**Permut(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 表示对象个数的整数。 |
| Arg2 | 必选 | number（double 精度） | Number\_chosen - 表示每个排列中对象个数的整数。 |

## 返回值

Double

## 说明


* 两个参数将被截尾取整。
* 如果 number 或 number\_chosen 为非数值型，函数 PERMUT 返回错误值 #VALUE!。
* 如果 number ≤ 0 或 number\_chosen < 0，函数 PERMUT 返回错误值 #NUM!。
* 如果 number < number\_chosen，函数 PERMUT 返回错误值 #NUM!。



## 示例


```JavaScript
/*本示例使用 Permut 方法分别计算从10个对象集合中选取4个对象和30个对象集合中选取2个对象的排列数，并将结果分别赋值给B1和B2单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.Permut(10, 4)
    Range("B2").Value2 = WorksheetFunction.Permut(30, 2)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 Permut 方法计算从给定数目的对象集合中选取的若干对象的排列数。*/
function test() {
    Range("B1").Value2 = 30
    Range("B2").Value2 = 4
    alert(WorksheetFunction.Permut(Range("B1").Value2, Range("B2").Value2))
}
```
