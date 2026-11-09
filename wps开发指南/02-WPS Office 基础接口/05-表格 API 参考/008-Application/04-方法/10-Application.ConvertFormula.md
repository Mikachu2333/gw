# Application.ConvertFormula

在 A1 和 R1C1 引用样式之间转换、在相对和绝对引用之间转换公式中的单元格引用，或者同时进行这两种转换。 **Variant** 类型。



## 语法

express.**ConvertFormula(Formula, FromReferenceStyle, ToReferenceStyle, ToAbsolute, RelativeTo)**

express   一个代表 **Application** 对象的变量。

## 参数

| **名称** | **必选/可选** | **数据类型** | **说明** |
| :------ | :------------ | :---------- | :------- |
| Formula | 必选 | any | 包含要转换的公式的字符串。必须为有效的公式，并且必须以等号开头。 |
| FromReferenceStyle | 必选 | XlReferenceStyle | 公式的引用样式。 |
| ToReferenceStyle | 可选 | any | 指定要返回的引用样式的 **XlReferenceStyle** 常量。如果省略此参数，则引用样式不变；公式样式保持 _FromReferenceStyle_ 参数指定的样式。 |
| ToAbsolute | 可选 | any | 指定转换引用类型的 **XlReferenceStyle** 常量。如果省略该参数，则引用类型不变。 |
| RelativeTo | 可选 | any | 包含一个单元格的 **Range** 对象。相对引用与此单元格相对。 |

## 返回值

Variant

## 示例


```JavaScript
/*本示例将包含 R1C1-样式引用的 SUM 公式转换为包含 A1-样式引用的等价公式，然后显示转换结果。*/
function test() {
    let inputFormula = "=SUM(R10C2:R15C2)"
    MsgBox(Application.ConvertFormula(inputFormula, xlR1C1, xlA1))
}
```


```JavaScript
/*本示例将包含 A1-样式引用的 AVERAGE 公式转换为包含 R1C1-样式引用的等价公式，并赋值给D1单元格与E1单元格。*/
function test() {
    let inputFormula = "=AVERAGE(B10:B15)"
    Range("D1").Formula = Application.ConvertFormula(inputFormula, xlA1, xlR1C1, xlA1)
    Range("E1").Formula = Application.ConvertFormula(inputFormula, xlA1, xlR1C1, null, Range("B10"))
}
```
