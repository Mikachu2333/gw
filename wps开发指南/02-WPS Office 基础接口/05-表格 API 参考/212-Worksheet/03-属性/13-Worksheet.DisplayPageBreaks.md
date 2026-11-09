# Worksheet.DisplayPageBreaks

如果显示指定工作表中的分页符（包括自动和手动分页符），则该属性值为 **True** 。 **Boolean** 类型，可读写。



## 语法

express.**DisplayPageBreaks**

express   一个代表 **Worksheet** 对象的变量。

## 类型

boolean

## 说明


如果没有安装打印机，不能设置该属性。



## 示例


```JavaScript
/*本示例使工作表 sheet1 显示分页符。*/
function test() {
    Worksheets.Item("Sheet1").DisplayPageBreaks = true
}
```


```JavaScript
/*本示例演示DisplayPageBreaks属性的数据类型，并将DisplayPageBreaks属性的值设置为false。*/
function test() {
    alert("DisplayPageBreaks属性的数据类型为：" + typeof ActiveSheet.DisplayPageBreaks)
    ActiveSheet.DisplayPageBreaks = false
}
```
