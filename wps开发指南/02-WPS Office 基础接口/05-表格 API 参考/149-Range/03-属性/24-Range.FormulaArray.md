# Range.FormulaArray

返回或设置区域的数组公式。返回（或可设置为）单个公式或数组。如果指定区域不包含数组公式，则该属性返回 **null** 。 **Variant** 类型，可读写。



## 语法

express.**FormulaArray**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


如果用本属性输入数组公式，那么该公式必须使用 R1C1 引用样式，而不能使用 A1 引用样式（请参阅第二个示例）。

 **FormulaArray** 属性的字符限制为 255。



## 示例


```JavaScript
/*本示例在 Sheet1 上的单元格区域 A1:C5 中输入数组常量 3。*/
function test() {
    Worksheets.Item("Sheet1").Range("A1:C5").FormulaArray = "=3"
}
```


```JavaScript
/*本示例在 sheet1 上的单元格区域 E1:E3 中输入数组公式“=SUM(R1C1:R3C3)”。*/
function test() {
    Worksheets.Item("Sheet1").Range("E1:E3").FormulaArray = "=Sum(R1C1:R3C3)"
}
```
