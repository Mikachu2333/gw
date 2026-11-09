# WorksheetFunction.Vdb

使用双倍余额递减法或其他指定的方法，返回指定的任何期间内（包括部分期间）的资产折旧值。函数 VDB 代表可变余额递减法。



## 语法

express.**Vdb(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | Cost - 资产的初始成本。 |
| Arg2 | 必选 | number（double 精度） | Salvage - 资产在折旧期末的价值（有时也称为资产残值）。此值可为 0。 |
| Arg3 | 必选 | number（double 精度） | Life - 资产进行折旧计算的周期数（有时也称作资产的生命周期）。 |
| Arg4 | 必选 | number（double 精度） | Start\_period - 要为其进行折旧计算的起始期间。Start\_period 必须与 life 使用相同的单位。 |
| Arg5 | 必选 | number（double 精度） | End\_period - 要为其进行折旧计算的截止期间。End\_period 必须与 life 使用相同的单位。 |
| Arg6 | 可选 | any | Factor - 余额递减速率。如果省略 factor，则假定其值为 2（双倍余额递减法）。如果不想使用双倍余额递减法，则请改变 factor 的值。有关双倍余额递减法的说明，请参阅 DDB。 |
| Arg7 | 可选 | any | No\_switch - 一个逻辑值，指定当折旧值大于余额递减计算值时，是否转用直线折旧法。 |

## 返回值

Double

## 说明


* 如果 no\_switch 为 TRUE，即使折旧值大于余额递减计算值，ET 也不转用直线折旧法。
* 如果 no\_switch 为 FALSE 或被省略，当折旧值大于余额递减计算值时，ET 就会转用直线折旧法。

除 no\_switch 外的所有参数必须为正数。



## 示例


```JavaScript
/*本示例使用 Vdb 方法，分别计算4年期和2年期的资产折旧值，并分别赋值到A4和A5单元格。*/
function test() {
    Range("A4").Value2 = WorksheetFunction.Vdb(1000, 0, 4, 0, 1)
    Range("A5").Value2 = WorksheetFunction.Vdb(5000, 1000, 2, 0, 1, 2, false)
}
```


```JavaScript
/*本示例使用 Vdb 方法，计算10年期中的前5年的资产折旧值。*/
function test() {
    Range("A1").Value2 = 10235
    Range("A2").Value2 = 10
    Range("A3").Value2 = 10
    Range("A4").Value2 = 0
    Range("A5").Value2 = 5
    alert(WorksheetFunction.Vdb(Range("A1").Value2, Range("A2").Value2, Range("A3").Value2, Range("A4").Value2, Range("A5").Value2))
}
```
