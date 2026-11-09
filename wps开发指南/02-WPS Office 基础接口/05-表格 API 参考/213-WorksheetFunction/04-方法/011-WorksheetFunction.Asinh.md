# WorksheetFunction.Asinh

返回数字的反双曲正弦值。反双曲正弦值的双曲正弦值为 *Arg1*，因此 Asinh(Sinh(number)) 等于 *Arg1*。



## 语法

express.**Asinh(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 任意实数。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用Asinh计算反双曲正弦值，并将结果分别赋值A1等单元格*/
function test() {
    Range("A1").Value2 = Application.WorksheetFunction.Asinh(4)
    Range("A2").Value2 = Application.WorksheetFunction.Asinh(16.66)
    Range("A3").Value2 = Application.WorksheetFunction.Asinh(-20)
    Range("A4").Value2 = Application.WorksheetFunction.Asinh(48)
}
```


```JavaScript
/*本示例为C3等单元格分别赋值，并使用Asinh计算反双曲正弦值*/
function test() {
    Range("C3").Value2 = 3
    Range("D3").Value2 = 8
    Range("E3").Value2 = -41.23
    Range("F3").Value2 = 0
    let asinh1 = Application.WorksheetFunction.Asinh(Range("C3").Value2)
    let asinh2 = Application.WorksheetFunction.Asinh(Range("D3").Value2)
    let asinh3 = Application.WorksheetFunction.Asinh(Range("E3").Value2)
    let asinh4 = Application.WorksheetFunction.Asinh(Range("F3").Value2)
    alert(asinh1)
    alert(asinh2)
    alert(asinh3)
    alert(asinh4)
}
```
