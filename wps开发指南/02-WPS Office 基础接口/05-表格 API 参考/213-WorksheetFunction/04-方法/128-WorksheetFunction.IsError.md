# WorksheetFunction.IsError

检查值类型，并根据值是否引用任何错误值（#N/A、#VALUE!、#REF!、#DIV/0!、#NUM!、#NAME? 或 #NULL!）而返回 TRUE 或 FALSE。



## 语法

express.**IsError(Arg1)**

express   一个代表 **WorksheetFunction** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Arg1 | 必选 | any | Value - 要检验的值。可以是空白（空单元格）、错误值、逻辑值、文本值、数字、引用值或对以上任意要检验的值进行引用的名称。 |

## 返回值

Boolean

## 说明


* IS 函数的值参数不能进行转换。例如，在其他需要数字的大多数函数中，文本值 "19" 会被转换成数字 19。然而在公式 ISNUMBER("19") 中，"19" 并未从文本值转换成数字，因此函数 ISNUMBER 返回 FALSE。
* IS 函数在用公式检验计算结果时十分有用。 与 IF 函数结合使用时，它们提供用于在公式中查找错误的方法。



## 示例


```JavaScript
/*本示例使用 IsError 方法判断值是否引用任何错误值，并分别赋值给E4和E5单元格。*/
function test() {
    Range("E4").Value2 = WorksheetFunction.IsError(Range("A1").Value2)
    Range("E5").Value2 = WorksheetFunction.IsError(3)
}
```


```JavaScript
/*本示例使用 IsError 方法判断D1单元格是否引用任何错误值。*/
function test() {
    alert(WorksheetFunction.IsError(Range("D1").Value2))
}
```
