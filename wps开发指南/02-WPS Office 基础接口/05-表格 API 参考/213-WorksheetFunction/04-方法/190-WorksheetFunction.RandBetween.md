# WorksheetFunction.RandBetween

返回介于指定的两个数字之间的一个随机整数。每次计算工作表时都将返回一个新的随机整数。



## 语法

express.**RandBetween(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Bottom - RANDBETWEEN 将返回的最小整数。 |
| Arg2 | 必选 | any | Top - RANDBETWEEN 将返回的最大整数。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 RandBetween 方法分别获取数字100至150之间和数字10至30之间的随机整数，并赋值给B3和B4单元格。*/
function test() {
    Range("B3").Value2 = WorksheetFunction.RandBetween(100, 150)
    Range("B4").Value2 = WorksheetFunction.RandBetween(10, 30)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 RandBetween 方法获取A1单元格中数字和A2单元格中数字之间的随机整数。*/
function test() {
    Range("A1").Value2 = 12
    Range("A2").Value2 = 21
    alert(WorksheetFunction.RandBetween(Range("A1").Value2, Range("A2").Value2))
}
```
