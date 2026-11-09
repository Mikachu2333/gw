# WorksheetFunction.Subtotal

创建分类汇总。返回 Double 表示小计。



## 语法

express.**Subtotal(Arg1, Arg2, Arg3, Arg4, Arg5, Arg6, Arg7, Arg8, Arg9, Arg10, Arg11, Arg12, Arg13, Arg14, Arg15, Arg16, Arg17, Arg18, Arg19, Arg20, Arg21, Arg22, Arg23, Arg24, Arg25, Arg26, Arg27, Arg28, Arg29, Arg30)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | number（double 精度） | 一个数字，表示要由该方法使用的聚合函数。 |
| Arg2 | 必选 | Range | 要为其计算分类汇总的第一个 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。 |
| Arg3 - Arg30 | 可选 | any | 随后要为其计算分类汇总的 **[Range](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/obj)** 对象。 |

## 返回值

Double

## 示例


```JavaScript
/*本示例为C2等单元格分别赋值，使用 Subtotal 方法创建分类汇总，并分别赋值给B1和B2单元格。*/
function test() {
    Range("C2").Value2 = 0.3
    Range("C3").Value2 = 10
    Range("C4").Value2 = 11
    Range("C5").Value2 = 23.3
    Range("B1").Value2 = WorksheetFunction.Subtotal(1, Range("C2:C5"))
    Range("B2").Value2 = WorksheetFunction.Subtotal(3, Range("C2:C5"))
}
```


```JavaScript
/*本示例为A2等单元格分别赋值，使用 Subtotal 方法创建分类汇总。*/
function test() {
    Range("A2").Value2 = 0.3
    Range("A3").Value2 = 4.3
    Range("A4").Value2 = 1.3
    Range("A5").Value2 = 2.3
    alert(WorksheetFunction.Subtotal(9, Range("A2:A5")))
}
```
