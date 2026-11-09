# WorksheetFunction.Syd

返回某项资产按年限总和折旧法计算的指定期间的折旧值。



## 语法

express.**Syd(Arg1, Arg2, Arg3, Arg4)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Cost - 资产的初始成本。 |
| Arg2 | 必选 | number（double 精度） | Salvage - 资产在折旧期末的价值（有时也称为资产残值）。 |
| Arg3 | 必选 | number（double 精度） | Life - 资产进行折旧计算的周期数（有时也称作资产的生命周期）。 |
| Arg4 | 必选 | number（double 精度） | Per - 期间，其单位必须与 life 相同。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例使用 Syd 方法计算某项资产按年限总和折旧法计算3年期和1年期的折旧值，并分别赋值给C1和C2单元格。*/
function test() {
    Range("C1").Value2 = WorksheetFunction.Syd(10000, 200, 3, 1)
    Range("C2").Value2 = WorksheetFunction.Syd(0, 100.23, 1, 1)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Syd 方法计算某项资产按年限总和折旧法计算5年期的折旧值。*/
function test() {
    Range("A1").Value2 = 500.36
    Range("B1").Value2 = 200.03
    Range("C1").Value2 = 5
    Range("D1").Value2 = 1
    alert(WorksheetFunction.Syd(Range("A1").Value2, Range("B1").Value2, Range("C1").Value2, Range("D1").Value2))
}
```
