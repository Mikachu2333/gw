# WorksheetFunction.Sinh

返回某一数字的双曲正弦值。



## 语法

express.**Sinh(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Number 为任意实数。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 Sinh 方法计算数值0.5和2的双曲正弦值，并分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.Sinh(0.5)
    Range("A2").Value2 = WorksheetFunction.Sinh(2)
}
```


```JavaScript
/*本示例为D1单元格赋值，使用 Sinh 方法计算D1单元格的双曲正弦值。*/
function test() {
    Range("D1").Value2 = 1.5
    alert(WorksheetFunction.Sinh(Range("D1").Value2))
}
```
