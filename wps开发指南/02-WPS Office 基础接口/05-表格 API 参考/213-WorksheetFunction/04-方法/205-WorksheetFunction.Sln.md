# WorksheetFunction.Sln

返回某项资产一个周期的直线折旧值。



## 语法

express.**Sln(Arg1, Arg2, Arg3)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Cost - 资产的初始成本。 |
| Arg2 | 必选 | number（double 精度） | Salvage - 资产在折旧期末的价值（有时也称为资产残值）。 |
| Arg3 | 必选 | number（double 精度） | Life - 资产进行折旧计算的周期数（有时也称作资产的生命周期）。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 Sln 方法计算资产3年期和5年期的直线折旧值，并分别赋值给A1和A2单元格。*/
function test() {
    Range("C3").Value2 = WorksheetFunction.Sln(100, 10000, 3)
    Range("C4").Value2 = WorksheetFunction.Sln(10000, 100, 5)
}
```


```JavaScript
/*本示例为B1等单元格分别赋值，使用 Sln 方法计算资产4年期的直线折旧值。*/
function test() {
    Range("B1").Value2 = 9234
    Range("C1").Value2 = 6548
    Range("D1").Value2 = 4
    alert(WorksheetFunction.Sln(Range("B1").Value2, Range("C1").Value2, Range("D1").Value2))
}
```
