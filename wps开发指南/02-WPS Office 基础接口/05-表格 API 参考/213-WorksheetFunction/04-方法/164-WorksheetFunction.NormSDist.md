# WorksheetFunction.NormSDist

返回标准正态累积分布函数，该分布的平均值为 0（零），标准偏差为 1。可以使用此函数代替标准正态曲线面积表。

此函数已被一个或多个新函数取代，这些新函数可以提供更高的准确度，而且它们的名称可以更好地反映出其用途。仍然提供此函数是为了保持与 ET 早期版本的兼容性。但是，如果不需要后向兼容性，则应考虑从现在开始使用新函数，因为它们可以更加准确地描述其功能。

有关新函数的详细信息，请参阅 [Norm\_S\_Dist](#TODO) 方法。



## 语法

express.**NormSDist(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | z - 要计算其分布的值。 |

## 返回值

Double

## 说明


* 如果 z 为非数字型，则 NORMSDIST 返回错误值 #VALUE!。



## 示例


```JavaScript
/*本示例使用 NormSDist 方法计算标准正态累积分布函数，并分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.NormSDist(0.56)
    Range("A2").Value2 = WorksheetFunction.NormSDist(0.23)
}
```


```JavaScript
/*本示例为D1单元格赋值，使用 NormSDist 方法计算标准正态累积分布函数。*/
function test() {
    Range("D1").Value2 = 0.456
    alert(WorksheetFunction.NormSDist(Range("D1").Value2))
}
```
