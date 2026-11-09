# WorksheetFunction.Round

将数字舍入到指定位数。



## 语法

express.**Round(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要进行舍入的数字。 |
| Arg2 | 必选 | number（double 精度） | Num\_digits - 指定要将数字舍入到的位数。 |

## 返回值

Double

## 说明


* 如果 num\_digits 大于 0（零），则会将 number 舍入到指定的小数位数。
* 如果 num\_digits 为 0，则会将 number 舍入到最接近的整数。
* 如果 num\_digits 小于 0，则会将 number 舍入到小数点左侧。



## 示例


```JavaScript
/*本示例使用 Round 方法将数字123.654和-235.654分别舍入到2位和-1位，并分别赋值给B1和C1单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.RoundDown(123.654, 2)
    Range("C1").Value2 = WorksheetFunction.RoundDown(-235.654, -1)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Round 方法将A1单元格数字舍入到指定位数。*/
function test() {
    Range("A1").Value2 = -100.3615
    Range("B1").Value2 = 2
    alert(WorksheetFunction.Round(Range("A1").Value2, Range("B1").Value2))
}
```
