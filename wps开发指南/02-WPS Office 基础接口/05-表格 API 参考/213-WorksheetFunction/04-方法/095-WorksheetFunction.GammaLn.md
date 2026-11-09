# WorksheetFunction.GammaLn

返回 γ 函数的自然对数 Γ(x)。



## 语法

express.**GammaLn(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | X - 要计算其 GAMMALN 值的数值。 |

## 返回值

Double

## 说明


* 如果 x 是非数值型，则 GAMMALN 将返回错误值 #VALUE!。
* 如果 x ≤ 0，则 GAMMALN 将返回错误值 #NUM!。
* 数字 e 的 GAMMALN(i) 次幂的返回值与 (i - 1)! 的结果相同（其中 i 为整数）。



## 示例


```JavaScript
/*本示例使用 GammaLn 方法计算 γ 函数的自然对数 Γ(x)，并分别赋值给B1和B2单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.GammaLn(2)
    Range("B2").Value2 = WorksheetFunction.GammaLn(Math.E)
}
```


```JavaScript
/*本示例为C1单元格赋值，使用 GammaLn 方法计算C1单元格的 γ 函数的自然对数 Γ(x)。*/
function test() {
    Range("C1").Value2 = 3.3
    alert(WorksheetFunction.GammaLn(Range("C1").Value2))
}
```
