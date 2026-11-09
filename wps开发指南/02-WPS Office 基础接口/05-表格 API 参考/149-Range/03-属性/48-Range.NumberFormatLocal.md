# Range.NumberFormatLocal

以采用用户语言字符串的形式返回或设置一个 **Variant** 值，它代表对象的格式代码。



## 语法

express.**NumberFormatLocal**

express   一个代表 **Range** 对象的变量。

## 类型

any

## 说明


 **Format** 函数使用的格式代码字符串与 **[NumberFormat](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Range/member/NumberFormat)** 和 **NumberFormatLocal** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例以用户语言显示 Sheet1 上的单元格 A1 中的数字格式。*/
function test() {
    let numberFormula = Worksheets.Item("Sheet1").Range("A1").NumberFormatLocal
    MsgBox("The number format for cell A1 is " + numberFormula)
}
```


```JavaScript
/*本示例将 A1:C4 单元格区域的数字格式（用户语言）设置为 yyyy/m/d，并显示，然后将 E1 单元格的数字格式（用户语言）设置为 # ??/??*/
function test() {
    Range("A1:C4").NumberFormatLocal = "yyyy/m/d"
    alert(Range("C4").NumberFormatLocal)
    Range("E1").NumberFormatLocal = "# ??/??"
}
```
