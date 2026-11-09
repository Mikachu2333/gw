# WorksheetFunction.CumIPmt

返回一笔贷款在 start\_period 到 end\_period 期间累积支付的利息。



## 语法

express.**CumIPmt(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | 利率。 |
| Arg2 | 必选 | any | 总付款期数。 |
| Arg3 | 必选 | any | 现值。 |
| Arg4 | 必选 | any | 计算中的首期。付款期数从 1 开始计数。 |
| Arg5 | 必选 | any | 计算中的末期。 |
| Arg6 | 必选 | any | 付款时间。 |

## 返回值

Double

## 说明


下表列出了 _Arg6_ 中使用的值。

| Type | 时间   |
| ---- | ---- |
| 0（零） | 期末付款 |
| 1    | 期初付款 |

* 请确保用于指定 rate 和 nper 的单位的一致性。例如，同样是四年期年利率为 12% 的贷款，如果按月支付，则 rate 应为 12%/12， _Arg2_ 应为 4*12；如果按年支付，则 rate 应为 12%， _Arg2_ 应为 4。
* _Arg2_ 、 _Arg4_ 、 _Arg5_ 和 type 均会被截尾取整。
* 如果 rate ≤ 0、 _Arg2_ ≤ 0 或 _Arg3_ ≤ 0，则 CumIPmt 将生成一个错误。
* 如果 _Arg4_ < 1、_Arg5_ < 1 或 _Arg4_ > _Arg5_ ，则 CumIPmt 将生成一个错误。
* 如果 _Arg6_ 不为数字 0 或 1，则 CumIPmt 将生成一个错误。



## 示例


```JavaScript
/*本示例使用CumIPmt方法计算一笔贷款在给定的首期到末期期间累计偿还的利息数额，并将结果赋值于A3等单元格。*/
function test() {
    Range("A3").Value2 = Application.WorksheetFunction.CumIPmt(0.001, 40, 2000000, 1, 1, 0)
    Range("B3").Value2 = Application.WorksheetFunction.CumIPmt(0.05, 20, 1500000, 5, 8, 1)
    Range("C3").Value2 = Application.WorksheetFunction.CumIPmt(0.007, 30, 1234000, 10, 15, 1)
}
```


```JavaScript
/*本示例为D3等单元格分别赋值，并使用CumIPmt方法计算一笔贷款在给定的首期到末期期间累计偿还的利息数额。*/
function test() {
    Range("D3").Value2 = 0.09
    Range("D4").Value2 = 30
    Range("D5").Value2 = 1250000
    Range("D6").Value2 = 10
    Range("D7").Value2 = 20
    let cumipmt1 = Application.WorksheetFunction.CumIPmt(Range("D3").Value2, Range("D4").Value2, Range("D5").Value2, Range("D6").Value2, Range("D7").Value2, 0)
    alert(cumipmt1)
}
```
