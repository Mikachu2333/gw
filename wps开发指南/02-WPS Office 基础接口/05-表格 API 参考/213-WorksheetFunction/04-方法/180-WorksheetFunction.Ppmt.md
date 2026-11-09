# WorksheetFunction.Ppmt

基于固定利率及等额分期付款方式，返回投资在某一给定期间内的本金偿还额。



## 语法

express.**Ppmt(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Rate - 各期利率。 |
| Arg2 | 必选 | number（double 精度） | Per - 用于计算其本金数额的期数，必须介于 1 到 nper 之间。 |
| Arg3 | 必选 | number（double 精度） | Nper - 年金中的总付款期数。 |
| Arg4 | 必选 | number（double 精度） | Pv - 现值 — 即一系列未来付款当前所值的总额。 |
| Arg5 | 可选 | any | Fv - 未来值，或在最后一次付款后希望得到的现金余额。如果省略 fv，则假定其值为 0（零），即一笔贷款的未来值为 0。 |
| Arg6 | 可选 | any | Type - 数字 0 或 1，用以指示付款时间。 |

## 返回值

Double

## 说明


有关函数 PPMT 中参数的详细信息，请参阅 PV。

| Type 值 | 付款时间 |
| ------ | ---- |
| 0 或省略  | 期末   |
| 1      | 期初   |

应确保所指定的 rate 和 nper 单位的一致性。例如，同样是四年期年利率为 12% 的贷款，如果按月支付，rate 应为 12%/12，nper 应为 4\*12；如果按年支付，rate 应为 12%，nper 为 4。



## 示例


```JavaScript
/*本示例使用 Ppmt 方法分别计算投资在10期和21期的本金偿还额，并分别赋值给A1和A2单元格。*/
function test() {
    Range("A1").Value2 = WorksheetFunction.Ppmt(0.0023, 10, 12, 3000)
    Range("A2").Value2 = WorksheetFunction.Ppmt(0.0033, 21, 24, 2100, 23, 1)
}
```


```JavaScript
/*本示例为A1等单元格分别赋值，使用 Ppmt 方法计算投资在B1单元格中给定期间内的本金偿还额。*/
function test() {
    Range("A1").Value2 = 0.0011
    Range("B1").Value2 = 12
    Range("C1").Value2 = 48
    Range("D1").Value2 = 3200
    alert(WorksheetFunction.Ppmt(Range("A1").Value2, Range("B1").Value2, Range("C1").Value2, Range("D1").Value2))
}
```
