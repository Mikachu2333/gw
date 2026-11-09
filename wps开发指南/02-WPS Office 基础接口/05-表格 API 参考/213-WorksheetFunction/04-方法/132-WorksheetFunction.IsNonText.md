# WorksheetFunction.IsNonText

检查值类型，并根据值是否引用任何非文本项而返回 TRUE 或 FALSE。（请注意，如果值引用了空白单元格，则此函数将返回 TRUE。）



## 语法

express.**IsNonText(Arg1)**

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
/*本示例使用 IsNonText 方法判断该值是否引用非文本项，并分别赋值给B1和B2单元格。*/
function test() {
    Range("B1").Value2 = WorksheetFunction.IsNonText(123)
    Range("B2").Value2 = WorksheetFunction.IsNonText("hello")
}
```


```JavaScript
/*本示例使用 IsNonText 方法判断C5单元格中的值是否引用非文本项。*/
function test() {
    alert(WorksheetFunction.IsNonText(Range("C5").Value2))
}
```
