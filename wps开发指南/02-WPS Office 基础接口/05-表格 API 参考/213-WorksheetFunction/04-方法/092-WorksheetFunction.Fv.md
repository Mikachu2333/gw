# WorksheetFunction.Fv

基于固定利率和等额分期付款方式，返回某项投资的未来值。



## 语法

express.**Fv(Arg1, Arg2, Arg3, Arg4, Arg5)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Rate - 各期利率。 |
| Arg2 | 必选 | number（double 精度） | Nper - 年金中的总付款期数。 |
| Arg3 | 必选 | number（double 精度） | Pmt - 各期所应支付的金额；其数值在整个年金期间保持不变。通常 pmt 包括本金和利息，但不包括其他费用及税款。如果省略 pmt，则必须包括 pv 参数。 |
| Arg4 | 可选 | any | Pv - 现值，或一系列未来付款当前所值的累积和。如果省略 pv，则假定其值为 0（零），并且必须包括 pmt 参数。 |
| Arg5 | 可选 | any | Type - 数字 0 或 1，用以指示付款时间。如果省略 type，则假定其值为 0。 |

## 返回值

Double

## 说明


有关 FV 中各参数的详细说明及年金函数的详细信息，请参阅 PV。

| Type 值 | 付款时间 |
| ------ | ---- |
| 0      | 期末   |
| 1      | 期初   |

* 请确保用于指定 rate 和 nper 的单位的一致性。例如，同样是四年期年利率为 12% 的贷款，如果按月支付，rate 应为 12%/12，nper 应为 4\*12；如果按年支付，rate 应为 12%，nper 为 4。
* 在所有参数中，支出的款项，如银行存款，表示为负数；收入的款项，如股息支票，表示为正数。



## 示例


```JavaScript
/*本示例使用 Fv 方法计算投资的未来值，并分别赋值给B1等单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.Fv(0.04, 30, -2000, -10000, 1)
    Range("B2").Value2 = WorksheetFunction.Fv(0.06 / 12, 20 * 12, -200)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Fv 方法计算A1等单元格投资的未来值。*/
function test() {
    Range("A1").Value2 = 0.08
    Range("A2").Value2 = 5
    Range("A3").Value2 = -500
    alert(WorksheetFunction.Fv(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2))
}
```
