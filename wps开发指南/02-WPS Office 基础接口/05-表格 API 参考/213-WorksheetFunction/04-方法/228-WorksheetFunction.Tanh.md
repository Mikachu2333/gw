# WorksheetFunction.Tanh

返回某一数字的双曲正切值。



## 语法

express.**Tanh(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number - 任意实数。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 Tanh 方法计算数值1和2.5的双曲正切值，并分别赋值给B2和B3单元格。*/
function test() {
    Range("B2").Value2 = WorksheetFunction.Tanh(1)
    Range("B3").Value2 = WorksheetFunction.Tanh(2.5)
}
```


```JavaScript
/*本示例为A3单元格赋值，使用 Tanh 方法计算其双曲正切值。*/
function test() {
    Range("A3").Value2 = -1
    alert(WorksheetFunction.Tanh(Range("A3").Value2))
}
```
