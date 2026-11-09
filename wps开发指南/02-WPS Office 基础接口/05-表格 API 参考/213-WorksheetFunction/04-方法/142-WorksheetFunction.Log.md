# WorksheetFunction.Log

按所指定的底数，返回一个数的对数。



## 语法

express.**Log(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要计算其对数的正实数。 |
| Arg2 | 可选 | any | Base - 对数的底数。如果省略底数，则假设其值为 10。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 Log 方法分别计算数值25以5为底的对数和数值125以10为底的对数，并分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.Log(25, 5)
    Range("A2").Value2 = WorksheetFunction.Log(125)
}
```


```JavaScript
/*本示例为C1等单元格分别赋值，使用 Log 方法计算C1单元格数值以D1单元格数值为底的对数。*/
function test() {
    Range("C1").Value2 = 236
    Range("D1").Value2 = 6
    alert(WorksheetFunction.Log(Range("C1").Value2, Range("D1").Value2))
}
```
