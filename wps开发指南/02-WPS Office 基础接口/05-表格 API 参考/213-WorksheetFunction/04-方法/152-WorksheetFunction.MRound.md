# WorksheetFunction.MRound

返回参数按指定基数舍入后的数值。



## 语法

express.**MRound(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Number - 要进行舍入的值。 |
| Arg2 | 必选 | any | Multiple - 用以进行舍入计算的基数。 |

## 返回值

Double

## 说明


如果数值 number 除以基数的余数大于或等于基数的一半，则函数 MROUND 向远离零的方向舍入。



## 示例


```JavaScript
/*本示例使用 MRound 方法计算参数按指定基数舍入后的数值，并分别赋值给B4和B5单元格。*/
function test() {
    Range("B4").Value2 = WorksheetFunction.MRound(11.3, 5)
    Range("B5").Value2 = WorksheetFunction.MRound(20.35, 8)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 MRound 方法计算参数按指定基数舍入后的数值。*/
function test() {
    Range("A1").Value2 = 9.5689
    Range("A2").Value2 = 2
    alert(WorksheetFunction.MRound(Range("A1").Value2, Range("A2").Value2))
}
```
