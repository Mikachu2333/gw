# WorksheetFunction.Asin

返回一个数字的反正弦值。反正弦值是一个角度，这个角度的正弦值为 *Arg1*。返回的角度采用弧度的形式，其范围从 -pi/2 到 pi/2。



## 语法

express.**Asin(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 所需角度的正弦值，必须介于 -1 到 1 之间。 |

## 返回值

Double

## 说明


要用度表示反正弦值，请将结果乘以 180/PI( ) 或使用 Degrees 方法。



## 示例


```JavaScript
/*本示例为B4等单元格分别赋值，并使用Asin计算反正弦值*/
function test() {
    Range("B4").Value2 = -1
    Range("B5").Value2 = 0.5
    Range("B6").Value2 = 0.8660254
    Range("B7").Value2 = 1
    let asin1 = Application.WorksheetFunction.Asin(Range("B4").Value2)
    let asin2 = Application.WorksheetFunction.Asin(Range("B5").Value2)
    let asin3 = Application.WorksheetFunction.Asin(Range("B6").Value2)
    let asin4 = Application.WorksheetFunction.Asin(Range("B7").Value2)
    alert(asin1)
    alert(asin2)
    alert(asin3)
    alert(asin4)
}
```


```JavaScript
/*本示例使用Asin计算反正弦值，并将结果分别赋值于F5等单元格*/
function test() {
    Range("F5").Value2 = Application.WorksheetFunction.Asin(-0.8660254)
    Range("G5").Value2 = Application.WorksheetFunction.Asin(0.96592583)
    Range("H5").Value2 = Application.WorksheetFunction.Asin(0.70710678)
    Range("I5").Value2 = Application.WorksheetFunction.Asin(0.25881905)
}
```
