# WorksheetFunction.AccrInt

返回定期付息有价证券的应计利息。



## 语法

express.**AccrInt(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Issue date - 债券的发行日期。 |
| Arg2 | 必选 | any | First interest - 债券的首次计息日。 |
| Arg3 | 必选 | any | Settlement - 债券的结算日。 |
| Arg4 | 必选 | any | Rate - 债券的年息票利率。 |
| Arg5 | 必选 | any | Par - 债券的票面价值。 |
| Arg6 | 必选 | any | Frequency - 每年支付息票的次数。 |
| Arg7 | 可选 | any | Basis - 要使用的日计数基准类型。 |

## 返回值

Double

## 说明


日期应使用 DATE 函数输入，或者作为其他公式或函数的结果输入。例如，使用 DATE(2008,5,23) 输入 2008 年 5 月 23 日。如果日期以文本形式输入，将会出现问题。  

下表描述了可用于 *Arg5* 的值。

| 基准    | 日计数基准               |
| ----- | ------------------- |
| 0 或省略 | 美国（美国证券交易商协会）30/360 |
| 1     | 实际天数/实际天数           |
| 2     | 实际天数/360            |
| 3     | 实际天数/365            |
| 4     | 欧洲 30/360           |



## 示例


```JavaScript
/*本示例为A1:G1分别赋值，再将其用于计算定期付息有价证券的应计利息。*/
function test() {
    Range("A1").Value2 = "2018/3/1"
    Range("B1").Value2 = "2018/8/31"
    Range("C1").Value2 = "2018/5/1"
    Range("D1").Value2 = 0.1
    Range("E1").Value2 = 1000
    Range("F1").Value2 = 2
    Range("G1").Value2 = 0
    let accrint = Application.WorksheetFunction.AccrInt(Range("A1").Value2, Range("B1").Value2, Range("C1").Value2, Range("D1").Value2, Range("E1").Value2, Range("F1").Value2, Range("G1").Value2)
    alert(accrint)
}
```


```JavaScript
/*本示例计算定期付息有价证券的应计利息并将结果分别赋值于A2与B2单元格。*/
function test() {
    Range("A2").Value2 = Application.WorksheetFunction.AccrInt("2023/3/1", "2023/8/31", "2023/5/1", 0.11, 2000, 2)
    Range("B2").Value2 = Application.WorksheetFunction.AccrInt("2022/4/1", "2022/7/31", "2022/5/1", 0.1, 1000, 1, 3)
}
```
