# WorksheetFunction.Atanh

返回数字的反双曲正切值。数字必须介于 -1 和 1 之间（不包括 -1 和 1）。



## 语法

express.**Atanh(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 介于 1 和 -1 之间的任意实数。 |

## 返回值

Double

## 说明


反双曲正切值的双曲正切值为 *Arg1*，因此 Atanh(Tanh(number)) 等于 *Arg1*。



## 示例


```JavaScript
/*本示例为D3等单元格分别赋值，并使用Atanh方法计算数字的反双曲正切值。*/
function test() {
    Range("D3").Value2 = 0.9
    Range("E3").Value2 = 0
    Range("F3").Value2 = -0.1
    let atanh1 = Application.WorksheetFunction.Atanh(Range("D3").Value2)
    let atanh2 = Application.WorksheetFunction.Atanh(Range("E3").Value2)
    let atanh3 = Application.WorksheetFunction.Atanh(Range("F3").Value2)
    alert(atanh1)
    alert(atanh2)
    alert(atanh3)
}
```


```JavaScript
/*本示例使用Atanh方法计算数字的反双曲正切值，并将结果赋值于A5等单元格。*/
function test() {
    Range("A5").Value2 = Application.WorksheetFunction.Atanh(0.5)
    Range("A6").Value2 = Application.WorksheetFunction.Atanh(0.35)
    Range("A7").Value2 = Application.WorksheetFunction.Atanh(-0.9)
    Range("A8").Value2 = Application.WorksheetFunction.Atanh(-0.4)
}
```
