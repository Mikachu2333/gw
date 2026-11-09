# WorksheetFunction.Delta

检验两个值是否相等。如果 number1 = number2，则返回 1；否则返回 0。



## 语法

express.**Delta(Arg1, Arg2)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Number1 - 第一个数。 |
| Arg2 | 可选 | any | Number2 - 第二个数。如果省略，则假定 number2 为零。 |

## 返回值

Double

## 说明


使用此函数可对一组值进行筛选。例如，通过对几个 DELTA 函数求和，可以计算相等的数值对的个数。此函数也称为 Kronecker Delta 函数。

* 如果 number1 为非数值型，则 DELTA 将返回错误值 #VALUE!。
* 如果 number2 为非数值型，则 DELTA 将返回错误值 #VALUE!。



## 示例


```JavaScript
/*本示例为A3等单元格分别赋值，并使用Delta方法检验值是否相等。*/
function test() {
    Range("A3").Value2 = 60
    Range("A4").Value2 = 30
    Range("A5").Value2 = 10
    Range("A6").Value2 = 10
    let delta1 = Application.WorksheetFunction.Delta(Range("A3").Value2, Range("A4").Value2)
    let delta2 = Application.WorksheetFunction.Delta(Range("A4").Value2)
    let delta3 = Application.WorksheetFunction.Delta(Range("A5").Value2, Range("A6").Value2)
    alert(delta1)
    alert(delta2)
    alert(delta3)
}
```


```JavaScript
/*本示例使用Delta方法检验值是否相等，并将结果赋值于B3等单元格。*/
function test() {
    Range("B3").Value2 = Application.WorksheetFunction.Delta(10, 100)
    Range("B4").Value2 = Application.WorksheetFunction.Delta(0, 0)
    Range("B5").Value2 = Application.WorksheetFunction.Delta(12.5, 12.5)
}
```
