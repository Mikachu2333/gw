# WorksheetFunction.Odd

返回数字向上舍入到的最接近的奇数。



## 语法

express.**Odd(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要进行舍入的值。 |

## 返回值

Double

## 说明


* 如果 number 为非数字型，则 ODD 返回错误值 #VALUE!。
* 不论数字符号如何，都按远离零来进行舍入。如果 number 正好是奇数，则不进行任何舍入。



## 示例


```JavaScript
/*本示例使用 Odd 方法获取数字“0.123”和“3.456”向上舍入到的最接近的奇数，并分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.Odd(0.123)
    Range("A2").Value2 = WorksheetFunction.Odd(3.456)
}
```


```JavaScript
/*本示例为B1单元格赋值，使用 Odd 方法获取B1单元格中数字向上舍入到的最接近的奇数。*/
function test() {
    Range("B1").Value2 = -6
    alert(WorksheetFunction.Odd(Range("B1").Value2))
}
```
