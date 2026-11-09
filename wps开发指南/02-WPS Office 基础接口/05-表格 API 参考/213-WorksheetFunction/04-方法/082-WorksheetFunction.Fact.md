# WorksheetFunction.Fact

返回数的阶乘。一个数的阶乘等于 1\*2\*3\*...\* 该数。



## 语法

express.**Fact(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 要计算其阶乘的非负数。如果 number 不是整数，则将被截尾取整。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例分别赋值A1等单元格，使用 Fact 方法计算数的阶乘。*/
function test() {
    Range("A1").Value2 = 6
    Range("A2").Value2 = 5
    alert(WorksheetFunction.Fact(Range("A1").Value2))
    alert(WorksheetFunction.Fact(Range("A2").Value2))
}
```


```JavaScript
/*本示例使用 Fact 方法计算数的阶乘结果，并分别赋值给C1等单元格。*/
function test() {
    Range("C1").Value2 = WorksheetFunction.Fact(0)
    Range("C2").Value2 = WorksheetFunction.Fact(3.3)
}
```
