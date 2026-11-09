# Interior.Pattern

返回或设置一个包含 **[xlPattern](/app-integration-dev/wps365/client/wpsoffice/jsapi/et/enum/XlPattern)** 常量的 **Variant** 值，它代表内部图案。



## 语法

express.**Pattern**

express   一个代表 **Interior** 对象的变量。

## 类型

any

## 示例


```JavaScript
/*本示例在 Sheet1 中 A1 单元格的内部添加十字图案。*/
function test() {
    Application.Worksheets.Item("Sheet1").Range("A1").Interior.Pattern = xlPatternCrissCross
}
```


```JavaScript
/*本示例在活动工作表中 A1:C4 单元格的内部添加网格图案。*/
function test() {
    ActiveSheet.Range("A1:C4").Interior.Pattern = xlPatternGrid
}
```
