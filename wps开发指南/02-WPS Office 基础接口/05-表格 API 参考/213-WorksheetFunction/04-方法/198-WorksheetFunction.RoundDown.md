# WorksheetFunction.RoundDown

将数字向零的方向向下舍入。



## 语法

express.**RoundDown(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要向下舍入的任何实数。 |
| Arg2 | 必选 | number（double 精度） | Num\_digits - 要将数字舍入到的位数。 |

## 返回值

Double

## 说明


* ROUNDDOWN 与 ROUND 功能相似，不同之处在于 ROUNDDOWN 总是向下舍入数字。
* 如果 num\_digits 大于 0（零），则将 number 向下舍入到指定的小数位数。
* 如果 num\_digits 为 0，则将 number 向下舍入到最接近的整数。
* 如果 num\_digits 小于 0，则将 number 向下舍入到小数点左侧。



## 示例


```JavaScript
/*本示例使用 RoundDown 方法将数字58.368和52236.12向下舍入到 0 (零) ，并分别赋值给B1和C1单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.RoundDown(58.368, 2)
    Range("C1").Value2 = WorksheetFunction.RoundDown(52236.12, -3)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 RoundDown 方法将B1单元格中数字向下舍入到 0 (零)。*/
function test() {
    Range("B1").Value2 = -1.3315
    Range("B2").Value2 = 3
    alert(WorksheetFunction.RoundDown(Range("B1").Value2, Range("B2").Value2))
}
```
