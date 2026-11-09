# Style.NumberFormat

返回或设置一个 **String** 值，它代表对象的格式代码。



## 语法

express.**NumberFormat**

express   一个代表 **Style** 对象的变量。

## 类型

string

## 说明


格式代码与 **“设置单元格格式”** 对话框中的 **“格式代码”** 选项是同一个字符串。 **Format** 函数使用的格式代码字符串与 **NumberFormat** 和 **[NumberFormatLocal](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/Style/member/NumberFormatLocal)** 属性使用的格式代码字符串不同。



## 示例


```JavaScript
/*本示例为工作表 Sheet1 中的单元格 C1 赋值，并将单元格的数字格式设置为百分比格式。*/
function test() {
    Worksheets.Item("Sheet1").Range("C1").Value2 = 1.5
    Worksheets.Item("Sheet1").Range("C1").Style.NumberFormat = "0%"
}
```


```JavaScript
/*本示例为A1单元格赋值，并显示A1单元格的数字格式。*/
function test() {
    Range("A1").Value2 = 12
    alert(Range("A1").Style.NumberFormat)
}
```
