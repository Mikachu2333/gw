# Worksheet.StandardWidth

返回或设置工作表中所有列的标准列宽（默认值）。 **Double** 类型，可读写。



## 语法

express.**StandardWidth**

express   一个代表 **Worksheet** 对象的变量。

## 类型

number（double 精度）

## 说明


一个列宽单位等于“常规”样式中一个字符的宽度。对于比例字体，则使用字符 0（零）的宽度。



## 示例


```JavaScript
/*本示例设置工作表 Sheet1 中首列的列宽为标准列宽。*/
function test() {
    Worksheets.Item("Sheet1").Columns.Item(1).ColumnWidth = Worksheets.Item("Sheet1").StandardWidth
}
```


```JavaScript
/*本示例设置活动工作表上所有列的标准 (默认) 宽度为20。*/
function test() {
    Application.ActiveSheet.StandardWidth = 20
}
```
