# WorksheetFunction.Log10

返回以 10 为底的对数。



## 语法

express.**Log10(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要计算其以 10 为底的对数的正实数。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 Log10 方法分别计算数值50和0.6以10为底的对数，并分别赋值给A4和A5单元格。*/
function test() {
    Range("A4").Value2 = WorksheetFunction.Log10(50)
    Range("A5").Value2 = WorksheetFunction.Log10(0.6)
}
```


```JavaScript
/*本示例为B1单元格赋值，使用 Log10 方法计算B1单元格的值以10为底的对数。*/
function test() {
    Range("B1").Value2 = 123
    alert(WorksheetFunction.Log10(Range("B1").Value2))
}
```
