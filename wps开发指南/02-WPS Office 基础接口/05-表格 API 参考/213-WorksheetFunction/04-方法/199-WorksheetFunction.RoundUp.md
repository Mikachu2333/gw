# WorksheetFunction.RoundUp

将数字向远离 0（零）的方向向上舍入。



## 语法

express.**RoundUp(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要向上舍入的任何实数。 |
| Arg2 | 必选 | number（double 精度） | Num\_digits - 要将数字舍入到的位数。 |

## 返回值

Double

## 说明


* ROUNDUP 与 ROUND 功能相似，不同之处在于 ROUNDUP 总是向上舍入数字。
* 如果 num\_digits 大于 0（零），则将 number 向上舍入到指定的小数位数。
* 如果 num\_digits 为 0，则将 number 向上舍入到最接近的整数。
* 如果 num\_digits 小于 0，则将 number 向上舍入到小数点左侧。



## 示例


```JavaScript
/*本示例使用 RoundUp 方法将数字1.2346和526.12向远离 0（零）的方向向上舍入，并分别赋值给B2和B3单元格。*/
function test() {
    Range("B2").Value2 = WorksheetFunction.RoundUp(1.2346, 1)
    Range("B3").Value2 = WorksheetFunction.RoundUp(526.12, -1)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 RoundUp 方法将A1单元格中数字向远离 0（零）的方向向上舍入。*/
function test() {
    Range("A1").Value2 = -1.335
    Range("B1").Value2 = 2
    alert(WorksheetFunction.RoundUp(Range("A1").Value2, Range("B1").Value2))
}
```
