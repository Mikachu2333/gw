# WorksheetFunction.Pi

返回数字 3.14159265358979，即数学常量 pi，精确到 15 位数字。



## 语法

express.**Pi()**

express   一个代表 **WorksheetFunction** 对象的变量。

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 Pi 方法获取数字 3.14159265358979，并赋值给E1单元格。*/
function test() {
    Range("E1").Value2 = WorksheetFunction.Pi()
}
```


```JavaScript
/*本示例使用 Pi 方法获取数字 3.14159265358979。*/
function test() {
    alert(WorksheetFunction.Pi())
}
```
