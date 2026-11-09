# PageSetup.PrintArea

以字符串返回或设置要打印的区域，该字符串使用宏语言的 A1 样式的引用。 **String** 类型，可读写。



## 语法

express.**PrintArea**

express   一个代表 **PageSetup** 对象的变量。

## 类型

string

## 说明


将该属性设置为 **False** 或空字符串 ("")，可打印整个工作表。

该属性仅适用于工作表页面。



## 示例


```JavaScript
/*本示例将打印区域设置为 Sheet1 上的单元格 A1:C5。*/
function test() {
    Application.Worksheets.Item("Sheet1").PageSetup.PrintArea = "$A$1:$C$5"
}
```


```JavaScript
/*本示例将 sheet1 的打印区域设置为当前区。注意使用 Address 属性返回 A1-样式的地址。*/
function test() {
    Application.Worksheets.Item("Sheet1").Activate()
    Application.ActiveSheet.PageSetup.PrintArea = ActiveCell.CurrentRegion.Address()
}
```
